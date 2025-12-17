import { AxiosError } from 'axios'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useMemo } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { handleServerError } from '@/lib/handle-server-error'
import { DirectionProvider } from '@/context/direction-provider'
import { FontProvider } from '@/context/font-provider'
import { ThemeProvider } from '@/context/theme-provider'
import { routeTree } from '@/routeTree.gen'

const isProd = process.env.NODE_ENV === 'production'
const routerRef: { current: ReturnType<typeof createRouter> | null } = {
  current: null,
}

let queryClientSingleton: QueryClient | null = null
let routerSingleton: ReturnType<typeof createRouter> | null = null

function ensureQueryClient() {
  if (queryClientSingleton) return queryClientSingleton

  queryClientSingleton = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (failureCount >= 0 && !isProd) return false
          if (failureCount > 3 && isProd) return false

          return !(
            error instanceof AxiosError &&
            [401, 403].includes(error.response?.status ?? 0)
          )
        },
        refetchOnWindowFocus: isProd,
        staleTime: 10 * 1000,
      },
      mutations: {
        onError: (error) => {
          handleServerError(error)

          if (error instanceof AxiosError) {
            if (error.response?.status === 304) {
              toast.error('Content not modified!')
            }
          }
        },
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        if (!(error instanceof AxiosError)) return

        const router = routerRef.current
        if (!router) return

        if (error.response?.status === 401) {
          toast.error('Session expired!')
          useAuthStore.getState().auth.reset()
          const redirect = router.history.location.href
          router.navigate({ to: '/sign-in', search: { redirect } })
        }

        if (error.response?.status === 500) {
          toast.error('Internal Server Error!')
          router.navigate({ to: '/500' })
        }
      },
    }),
  })

  return queryClientSingleton
}

function ensureRouter() {
  if (routerSingleton) return routerSingleton

  const queryClient = ensureQueryClient()
  routerSingleton = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })
  routerRef.current = routerSingleton

  return routerSingleton
}

export function ClientApp() {
  const queryClient = useMemo(() => ensureQueryClient(), [])
  const router = useMemo(() => ensureRouter(), [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FontProvider>
          <DirectionProvider>
            <RouterProvider router={router} />
          </DirectionProvider>
        </FontProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

