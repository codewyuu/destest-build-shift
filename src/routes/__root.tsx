import { type QueryClient } from '@tanstack/react-query'
import {
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { getCookie } from '@/lib/cookies'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import { GeneralError } from '@/features/errors/general-error'
import { NotFoundError } from '@/features/errors/not-found-error'
import { SearchProvider } from '@/context/search-provider'
import { useAuthStore } from '@/stores/auth-store'
import { Main } from './index'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})

function RootComponent() {
  const isDev = process.env.NODE_ENV === 'development'
  const showDevtools = getCookie('show_devtools') === 'true'
  const routerState = useRouterState()
  const accessToken = useAuthStore((state) => state.auth.accessToken)
  const isMarketingHome = routerState.location.pathname === '/' && !accessToken

  return (
    <SearchProvider>
      <NavigationProgress />
      {isMarketingHome ? <Main /> : <Outlet />}
      <Toaster duration={5000} />
      {isDev && showDevtools && (
        <>
          <ReactQueryDevtools buttonPosition='bottom-left' />
          <TanStackRouterDevtools position='bottom-right' />
        </>
      )}
    </SearchProvider>
  )
}
