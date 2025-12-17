import { useState } from 'react'
import { Plus, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet'
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type RoomItem = {
  id: string
  name: string
  memberCount: number
}

type ChannelItem = {
  id: string
  name: string
}

type RoomsSidebarSheetProps = {
  open: boolean
  rooms: RoomItem[]
  selectedRoomId?: string | null
  onOpenChange: (open: boolean) => void
  onSelectRoom: (roomId: string) => void
  onCreateRoomClick: () => void
  onDiscoverClick?: () => void
  channels?: ChannelItem[]
  selectedChannelId?: string | null
  onSelectChannel?: (channelId: string) => void
  onCreateChannelClick?: () => void
  canModerate?: boolean
}

export function RoomsSidebarSheet({
  open,
  rooms,
  selectedRoomId,
  onOpenChange,
  onSelectRoom,
  onCreateRoomClick,
  onDiscoverClick,
  channels = [],
  selectedChannelId,
  onSelectChannel,
  onCreateChannelClick,
  canModerate = false,
}: RoomsSidebarSheetProps) {
  const [tab, setTab] = useState<'communities' | 'channels'>('communities')
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side='left'
        className='inset-y-0 start-0 h-full w-[86%] border border-e border-black/10 bg-black/10 text-neutral-800 ring-1 ring-black/10 backdrop-blur-md sm:max-w-sm dark:border-white/30 dark:bg-white/10 dark:text-white dark:ring-white/15'
      >
        <SheetHeader className='flex h-full flex-col px-4 pt-3 pr-16'>
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as 'communities' | 'channels')}
          >
            <div className='flex items-center justify-between'>
              <TabsList className='bg-black/8 ring-1 ring-black/10 dark:bg-white/8 dark:ring-white/15'>
                <TabsTrigger
                  value='communities'
                  className='text-foreground dark:text-foreground data-[state=active]:bg-black/12 dark:data-[state=active]:bg-white/12'
                >
                  Communities
                </TabsTrigger>
                <TabsTrigger
                  value='channels'
                  className='text-foreground dark:text-foreground data-[state=active]:bg-black/12 dark:data-[state=active]:bg-white/12'
                >
                  Channels
                </TabsTrigger>
              </TabsList>
              {tab === 'communities' ? (
                <Button
                  variant='outline'
                  size='icon'
                  onClick={onCreateRoomClick}
                  aria-label='Create community'
                  className='text-foreground border-black/20 bg-black/12 ring-1 ring-black/10 hover:bg-black/20 dark:border-white/20 dark:bg-white/12 dark:ring-white/15 dark:hover:bg-white/20'
                >
                  <Plus className='h-4 w-4' />
                </Button>
              ) : canModerate ? (
                <Button
                  variant='outline'
                  size='icon'
                  onClick={onCreateChannelClick}
                  aria-label='Create channel'
                  className='text-foreground border-black/20 bg-black/12 ring-1 ring-black/10 hover:bg-black/20 dark:border-white/20 dark:bg-white/12 dark:ring-white/15 dark:hover:bg-white/20'
                >
                  <Plus className='h-4 w-4' />
                </Button>
              ) : (
                <div className='h-9' />
              )}
            </div>
            <TabsContent value='communities' className='mt-2 flex-1'>
              <ScrollArea className='h-full px-2 pb-6'>
                <SidebarMenu className='gap-2'>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      size='lg'
                      className='text-foreground rounded-lg px-3 py-2'
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
                        className='text-foreground rounded-lg px-3 py-2 data-[active=true]:bg-black/12 dark:data-[active=true]:bg-white/12'
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
                            <p className='text-foreground/70 truncate text-xs'>
                              Tap to view channels
                            </p>
                          </div>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </ScrollArea>
            </TabsContent>
            <TabsContent value='channels' className='mt-2 flex-1'>
              <ScrollArea className='h-full px-2 pb-6'>
                {(!selectedRoomId || channels.length === 0) && (
                  <div className='text-muted-foreground px-3 py-2 text-xs'>
                    Select a community to view channels.
                  </div>
                )}
                <SidebarMenu className='gap-2'>
                  {channels.map((ch) => (
                    <SidebarMenuItem key={ch.id}>
                      <SidebarMenuButton
                        asChild
                        size='lg'
                        isActive={selectedChannelId === ch.id}
                        className='text-foreground rounded-lg px-3 py-2 data-[active=true]:bg-black/12 dark:data-[active=true]:bg-white/12'
                      >
                        <button
                          type='button'
                          className='w-full text-left'
                          onClick={() => onSelectChannel?.(ch.id)}
                        >
                          <div className='min-w-0'>
                            <span className='truncate font-medium'>
                              # {ch.name}
                            </span>
                          </div>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
