import { useSearch } from '@tanstack/react-router'
import { Logo } from '@/assets/logo'
import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })

  return (
    <div className='relative flex min-h-svh items-center justify-center overflow-hidden bg-black'>
      <div className='pointer-events-none absolute inset-0'>
        <img
          src='/images/signbg.png'
          alt=''
          className='h-full w-full object-cover opacity-90'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40' />
      </div>

      <div className='relative mx-4 flex w-full max-w-4xl rounded-[28px] border border-white/25 bg-white/10 p-[1px] shadow-[0_32px_120px_rgba(0,0,0,0.8)] ring-1 ring-white/15 backdrop-blur-2xl'>
        <div className='flex w-full flex-col overflow-hidden rounded-[26px] bg-black/40 lg:flex-row'>
          <div className='w-full max-w-md px-7 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10'>
            <div className='mb-6 flex items-center gap-2'>
              <Logo className='h-7 w-7' />
              <span className='text-xl font-semibold tracking-tight'>
                Moneybh.Ai
              </span>
            </div>

            <div className='space-y-0.5'>
              <h2 className='text-xl font-semibold tracking-tight sm:text-2xl'>
                Sign in
              </h2>
              <p className='text-muted-foreground text-xs sm:text-sm'>
                Enter your email and password below to log into your account.
              </p>
            </div>

            <div className='mt-4 sm:mt-5'>
              <UserAuthForm redirectTo={redirect} />
            </div>

            <p className='text-muted-foreground mt-4 px-2 text-[11px] leading-relaxed sm:text-xs'>
              By clicking sign in, you agree to our{' '}
              <a
                href='/terms'
                className='hover:text-primary underline underline-offset-4'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='/privacy'
                className='hover:text-primary underline underline-offset-4'
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className='relative hidden flex-1 lg:block'>
            <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-[30px] border-l border-white/35 bg-gradient-to-br from-white/26 via-white/10 to-white/0 shadow-[0_0_80px_rgba(255,255,255,0.18)] backdrop-blur-3xl'>
              <img
                src='/images/signbg.png'
                alt=''
                className='h-full w-full object-cover opacity-80'
              />
              <div className='absolute inset-0 bg-gradient-to-br from-black/25 via-black/15 to-black/0' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
