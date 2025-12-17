// Removed toggle button and related imports
import { Command } from 'lucide-react'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar'

// Button import no longer needed

export function AppTitle() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className='relative flex items-center gap-2'>
          <SidebarMenuButton
            size='lg'
            className='text-sidebar-foreground hover:text-sidebar-foreground active:text-sidebar-foreground gap-2 py-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2 hover:bg-transparent active:bg-transparent'
            asChild
          >
            <div className='relative flex h-full w-full items-center gap-2'>
              {/* Brand icon shown in collapsed icon mode */}
              <span className='hidden size-5 items-center justify-center opacity-100 transition-opacity group-hover/menu-item:opacity-0 group-data-[collapsible=icon]:inline-flex peer-hover/menu-button:opacity-0'>
                <Command className='size-4' />
              </span>
              {/* Brand text removed per request */}

              {/* Collapsed overlay trigger centered over brand icon */}
              <SidebarTrigger className='z-10 hidden size-6 group-hover/menu-item:pointer-events-auto group-hover/menu-item:opacity-100 group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:absolute group-data-[collapsible=icon]:inset-0 group-data-[collapsible=icon]:grid group-data-[collapsible=icon]:place-items-center group-data-[collapsible=icon]:opacity-0 peer-hover/menu-button:pointer-events-auto peer-hover/menu-button:opacity-100' />
            </div>
          </SidebarMenuButton>
          {/* Expanded mode trigger to the right of text */}
          <SidebarTrigger className='z-10 ms-1 inline-flex size-6 transition-opacity group-data-[collapsible=icon]:hidden' />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
