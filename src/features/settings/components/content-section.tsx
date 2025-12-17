import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

type ContentSectionProps = {
  title: string
  desc: string
  children: React.JSX.Element
  titleClassName?: string
  descClassName?: string
  compact?: boolean
}

export function ContentSection({
  title,
  desc,
  children,
  titleClassName,
  descClassName,
  compact,
}: ContentSectionProps) {
  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <div className='flex-none'>
        <h3 className={cn('text-lg font-medium', titleClassName)}>{title}</h3>
        <p className={cn('text-muted-foreground text-sm', descClassName)}>
          {desc}
        </p>
      </div>
      <Separator className={cn('flex-none', compact ? 'my-2' : 'my-4')} />
      <div className='no-scrollbar relative min-h-0 w-full flex-1 overflow-y-auto scroll-smooth pe-4 pb-12'>
        <div className='relative -mx-1 px-1.5 md:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl'>
          <div className='rounded-xl border border-black/12 bg-black/8 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/10 backdrop-blur-md sm:p-6 md:p-8 dark:border-white/25 dark:bg-white/12 dark:shadow-[0_2px_8px_rgba(255,255,255,0.08)] dark:ring-white/20'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
