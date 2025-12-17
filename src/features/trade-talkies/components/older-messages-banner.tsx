import { cn } from '@/lib/utils'

type OlderMessagesBannerProps = {
  visible: boolean
  onJumpToPresent: () => void
  className?: string
}

export function OlderMessagesBanner({
  visible,
  onJumpToPresent,
  className,
}: OlderMessagesBannerProps) {
  if (!visible) return null
  return (
    <div
      className={cn(
        'bg-background/80 pointer-events-auto mx-auto flex w-max items-center gap-3 rounded-full border px-4 py-2 text-xs shadow-lg backdrop-blur-md',
        'border-black/10 dark:border-white/15',
        className
      )}
      aria-live='polite'
    >
      <span className='text-muted-foreground'>
        You’re viewing older messages
      </span>
      <button
        onClick={onJumpToPresent}
        className='bg-primary text-primary-foreground inline-flex items-center rounded-full px-3 py-1 hover:opacity-90'
      >
        Jump to Present
      </button>
    </div>
  )
}
