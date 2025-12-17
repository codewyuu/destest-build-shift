import dynamic from 'next/dynamic'

const ClientApp = dynamic(() => import('@/next-app').then((m) => m.ClientApp), {
  ssr: false,
})

export default function CatchAllPage() {
  return <ClientApp />
}

