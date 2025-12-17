import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

type RoomItem = {
  id: string
  name: string
  memberCount: number
}

type RoomsSidebarInlineProps = {
  open: boolean
  rooms: RoomItem[]
  selectedRoomId?: string | null
  onSelectRoom: (roomId: string) => void
  onCreateRoomClick: () => void
  onOpenChange?: (open: boolean) => void
  onDiscoverClick?: () => void
}

const PANEL_WIDTH = 300

export function RoomsSidebarInline({
  open,
  rooms,
  selectedRoomId,
  onSelectRoom,
  onCreateRoomClick,
  onOpenChange,
  onDiscoverClick,
}: RoomsSidebarInlineProps) {
  return (
    <AnimatePresence initial={false} mode='wait'>
      {open && (
        <motion.aside
          key='rooms-sidebar-inline'
          initial={{ width: 0, x: -24, opacity: 0 }}
          animate={{ width: PANEL_WIDTH, x: 0, opacity: 1 }}
          exit={{ width: 0, x: -24, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='absolute inset-y-0 start-0 z-20 h-full overflow-hidden border-r border-black/12 bg-black/8 ring-1 ring-black/10 backdrop-blur-md dark:border-white/20 dark:bg-white/12 dark:ring-white/20'
          onMouseEnter={() => onOpenChange?.(true)}
          onMouseLeave={() => onOpenChange?.(false)}
          aria-label='Communities'
        >
          <div className='flex h-full flex-col px-4 pt-3'>
            <div className='flex items-center justify-between'>
              <div className='text-sm font-medium'>Communities</div>
              <Button
                variant='outline'
                size='icon'
                onClick={onCreateRoomClick}
                aria-label='Create community'
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
            <ScrollArea className='mt-2 flex-1 px-2 pb-4'>
              <SidebarMenu className='gap-2'>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    size='lg'
                    className='rounded-lg px-3 py-2'
                  >
                    <button
                      type='button'
                      className='w-full text-left'
                      onClick={() => onDiscoverClick?.()}
                    >
                      <div className='flex min-w-0 items-center gap-2'>
                        <Compass className='h-4 w-4' />
                        <span className='truncate font-medium'>Discover</span>
                      </div>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {rooms.length === 0 && (
                  <div className='text-muted-foreground px-2 py-2 text-xs'>
                    No rooms yet. Create one to start chatting.
                  </div>
                )}
                {rooms.map((room) => (
                  <SidebarMenuItem key={room.id}>
                    <SidebarMenuButton
                      asChild
                      size='lg'
                      isActive={selectedRoomId === room.id}
                      className='rounded-lg px-3 py-2'
                    >
                      <button
                        type='button'
                        className='w-full text-left'
                        onClick={() => onSelectRoom(room.id)}
                      >
                        <div className='min-w-0'>
                          <div className='flex items-center justify-between gap-2'>
                            <span className='truncate font-medium'>
                              {room.name}
                            </span>
                            <span className='text-muted-foreground text-xs'>
                              {room.memberCount}
                            </span>
                          </div>
                          <p className='text-muted-foreground truncate text-xs'>
                            Open to see channels
                          </p>
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
