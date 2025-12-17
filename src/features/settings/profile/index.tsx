import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { useProfileStore } from '@/stores/profile-store'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ContentSection } from '../components/content-section'

export function SettingsProfile() {
  const { avatarUrl, setAvatarFile } = useProfileStore()
  const fileRef = React.useRef<HTMLInputElement | null>(null)

  const onAvatarClick = () => {
    fileRef.current?.click()
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      void setAvatarFile(file)
      // reset input value so same file can be reselected if needed
      e.target.value = ''
    }
  }

  return (
    <ContentSection
      title='Settings › Profile'
      desc='Manage your profile and preferences'
      titleClassName='text-base'
      descClassName='text-xs'
      compact
    >
      <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2'>
        <div className='relative rounded-2xl border border-white/30 bg-white/55 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 md:col-span-2 dark:border-white/20 dark:bg-slate-900/30 dark:shadow-[0_4px_24px_rgba(255,255,255,0.06)] dark:ring-white/10'>
          <div className='grid grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-4 gap-y-2'>
            <div className='col-start-1 row-start-1 min-w-0'>
              <div className='text-2xl leading-tight font-bold sm:text-3xl'>
                <span>Hi,</span>
                <br />
                <span>Yuvraj</span>
              </div>
            </div>
            <div className='col-start-2 row-start-1 flex flex-col items-center gap-2 self-start'>
              <input
                ref={fileRef}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={onFileChange}
              />
              <Avatar
                onClick={onAvatarClick}
                title='Change profile picture'
                className='hover:ring-foreground/30 h-16 w-16 cursor-pointer ring-1 ring-black/10 sm:h-20 sm:w-20 dark:ring-white/20'
              >
                <AvatarImage
                  src={avatarUrl ?? '/avatars/shadcn.jpg'}
                  alt='Profile'
                />
                <AvatarFallback>YY</AvatarFallback>
              </Avatar>
            </div>
            <div className='text-muted-foreground col-start-1 row-start-2 truncate text-sm'>
              example@email.com
            </div>
            <div className='col-start-2 row-start-2 self-end justify-self-end'>
              <Link
                to='/settings/account'
                aria-label='Edit profile'
                className='inline-flex items-center justify-center'
              >
                <ChevronRight className='text-muted-foreground hover:text-foreground size-5 transition-colors' />
              </Link>
            </div>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-2xl border border-white/30 bg-white/50 px-4 py-3 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl sm:px-5 sm:py-4 dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <img
            src='/images/bhaipoints.png'
            alt='Bhai Points banner'
            className='pointer-events-none absolute inset-0 h-full w-full rounded-2xl object-cover opacity-90'
          />
          <div className='relative flex items-center justify-between gap-3'>
            <div className='min-w-0'>
              <div className='text-sm font-medium'>Bhai Points</div>
              <div className='text-muted-foreground text-xs'>
                Your reward progress
              </div>
            </div>
          </div>
        </div>

        <div className='relative rounded-2xl border border-white/30 bg-white/50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <div className='px-4 pt-3 sm:px-5 sm:pt-3'>
            <span className='text-muted-foreground text-xs'>Accessibility</span>
          </div>
          <ul className='divide-y divide-black/10 dark:divide-white/15'>
            <li>
              <Link
                to='/settings/appearance'
                className='flex items-center justify-between px-4 py-4 hover:bg-black/5 sm:px-5 dark:hover:bg-white/5'
              >
                <span className='text-sm sm:text-base'>Appearance</span>
                <ChevronRight className='size-4 opacity-70' />
              </Link>
            </li>
            <li>
              <Link
                to='/settings/notifications'
                className='flex items-center justify-between px-4 py-4 hover:bg-black/5 sm:px-5 dark:hover:bg-white/5'
              >
                <span className='text-sm sm:text-base'>Notifications</span>
                <ChevronRight className='size-4 opacity-70' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ContentSection>
  )
}
