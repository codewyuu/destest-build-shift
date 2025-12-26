import { useEffect, useState } from 'react'
import { ArrowRight, LogIn } from 'lucide-react'
import Dither from '@/components/Dither'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'

export function Main() {
  const [showDither, setShowDither] = useState(false)

  useEffect(() => {
    setShowDither(true)
  }, [])

  return (
    <div className='bg-black text-white'>
      <header className='fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl'>
        <div className='mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-3 sm:h-16 sm:gap-6 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-2'>
            <Logo className='h-6 w-6' />
            <span className='text-[13px] font-semibold tracking-tight sm:text-sm'>
              Moneybh.Ai
            </span>
          </div>
          <nav className='mx-auto hidden items-center gap-8 text-xs font-medium text-neutral-300 sm:flex sm:text-sm'>
            <a href='#product' className='hover:text-white transition-colors'>
              Product
            </a>
            <a href='#features' className='hover:text-white transition-colors'>
              Features
            </a>
            <a
              href='#testimonials'
              className='hover:text-white transition-colors'
            >
              Testimonials
            </a>
            <a href='#pricing' className='hover:text-white transition-colors'>
              Pricing
            </a>
          </nav>
          <div className='flex items-center gap-1.5 sm:gap-3'>
            <a
              href='/sign-in'
              className='inline-flex items-center justify-center rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black shadow-sm transition hover:bg-neutral-100 sm:px-4 sm:text-sm'
            >
              Sign in
            </a>
          </div>
        </div>
      </header>

      <main className='pt-14 sm:pt-16'>
        <section
          id='product'
          className='relative flex min-h-[80vh] items-center justify-center overflow-hidden'
        >
          <div className='absolute inset-0'>
            {showDither && (
              <Dither enableMouseInteraction={false} pixelSize={3} />
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black' />
          </div>

          <div className='relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-12 pt-8 text-center sm:px-6 sm:pb-16 sm:pt-10 lg:pb-24'>
            <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-neutral-200 shadow-sm backdrop-blur-xl sm:px-4 sm:text-xs'>
              <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400' />
              AI copilot for every money decision
            </div>

            <h1 className='mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
              Ask Moneybh.Ai about your money in one tap.
            </h1>

            <p className='mt-3 max-w-2xl text-balance text-sm text-neutral-300 sm:mt-4 sm:text-base'>
              From “What should I buy this month?” to “Am I on track for my
              goals?” Moneybh.Ai turns messy finance into clear, actionable
              answers.
            </p>

            <div className='mt-8 flex w-full flex-col items-center gap-4'>
              <div className='flex w-full max-w-3xl items-center overflow-hidden rounded-full border border-white/20 bg-white/10 px-1 py-1 shadow-[0_18px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl'>
                <input
                  className='flex-1 bg-transparent px-5 py-3 text-left text-sm text-white placeholder:text-neutral-200 outline-none sm:text-base'
                  placeholder='Ask Moneybh.Ai anything about your money...'
                />
                <Button className='me-1 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black shadow-md hover:bg-neutral-100 sm:px-6 sm:text-sm'>
                  Ask
                </Button>
              </div>

              <div className='flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm'>
                <button className='rounded-full border border-white/20 bg-black/40 px-3 py-1 text-neutral-100 shadow-sm backdrop-blur-md hover:bg-black/60'>
                  What should I buy this month?
                </button>
                <button className='rounded-full border border-white/20 bg-black/40 px-3 py-1 text-neutral-100 shadow-sm backdrop-blur-md hover:bg-black/60'>
                  Build a SIP for 5 years
                </button>
                <button className='rounded-full border border-white/20 bg-black/40 px-3 py-1 text-neutral-100 shadow-sm backdrop-blur-md hover:bg-black/60'>
                  Analyse my holdings
                </button>
              </div>

              <div className='mt-4 flex flex-wrap items-center justify-center gap-3'>
                <a
                  href='/sign-up'
                  className='inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-[0_16px_60px_rgba(0,0,0,0.85)] transition hover:bg-neutral-100'
                >
                  Experience Moneybhai
                  <ArrowRight className='ms-2 h-4 w-4' />
                </a>
                <a
                  href='#features'
                  className='inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-medium text-neutral-100 backdrop-blur-md hover:bg-black/60'
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label='Available features'
          className='bg-black px-4 pb-10 text-white sm:px-6 lg:px-8'
        >
          <div className='mx-auto max-w-5xl'>
            <p className='mb-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-neutral-400'>
              Available now
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                    <span className='rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold text-emerald-300'>
                      Live
                    </span>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-zinc-50'>
                      Trade Talkies
                    </div>
                    <div className='mt-1 text-xs text-zinc-400'>
                      Join communities and share ideas with other traders.
                    </div>
                  </div>
                  <div className='flex items-center justify-between text-[11px] text-zinc-500'>
                    <span>Market streams</span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                    <span className='rounded-full bg-sky-400/15 px-3 py-1 text-[10px] font-semibold text-sky-300'>
                      Coming soon
                    </span>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-zinc-50'>
                      Moneybh.Ai chatbot
                    </div>
                    <div className='mt-1 text-xs text-zinc-400'>
                      Chat interface for questions across all your accounts.
                    </div>
                  </div>
                  <div className='flex items-center justify-between text-[11px] text-zinc-500'>
                    <span>Conversational layer</span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                    <span className='rounded-full bg-fuchsia-400/15 px-3 py-1 text-[10px] font-semibold text-fuchsia-300'>
                      Coming soon
                    </span>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-zinc-50'>
                      Moneypoly
                    </div>
                    <div className='mt-1 text-xs text-zinc-400'>
                      Gamified journeys to build better investing habits.
                    </div>
                  </div>
                  <div className='flex items-center justify-between text-[11px] text-zinc-500'>
                    <span>Behavioral nudges</span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                    <span className='rounded-full bg-amber-400/15 px-3 py-1 text-[10px] font-semibold text-amber-300'>
                      Coming soon
                    </span>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-zinc-50'>
                      Portfolio analysis
                    </div>
                    <div className='mt-1 text-xs text-zinc-400'>
                      Deep risk, return, and allocation views on your holdings.
                    </div>
                  </div>
                  <div className='flex items-center justify-between text-[11px] text-zinc-500'>
                    <span>Risk and allocation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id='features'
          className='bg-black px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20'
        >
          <div className='mx-auto max-w-5xl'>
            <div className='max-w-2xl'>
              <h2 className='text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl'>
                Built for everyday investors, powered by institutional-grade
                intelligence.
              </h2>
              <p className='mt-3 text-sm text-zinc-400 sm:text-base'>
                Moneybh.Ai watches your portfolio, cashflows, and markets in
                real-time to surface the next best action you can take.
              </p>
            </div>

            <div className='mt-8 grid gap-6 md:grid-cols-3'>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-zinc-50 sm:text-base'>
                      One inbox for all your money
                    </h3>
                    <p className='mt-2 text-xs text-zinc-400 sm:text-sm'>
                      Connect brokers, banks, and apps to view every position,
                      order, and SIP in one live canvas.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-zinc-50 sm:text-base'>
                      Answers, not dashboards
                    </h3>
                    <p className='mt-2 text-xs text-zinc-400 sm:text-sm'>
                      Ask natural questions and get precise, explainable
                      actions: rebalance, hedge, or hold.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-zinc-50 sm:text-base'>
                      Guardrails built-in
                    </h3>
                    <p className='mt-2 text-xs text-zinc-400 sm:text-sm'>
                      Scenario tests, risk limits, and reminders so every move
                      fits your plan and risk profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id='testimonials'
          className='bg-gradient-to-b from-black to-black/95 px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20'
        >
          <div className='mx-auto max-w-5xl'>
            <div className='max-w-2xl'>
              <h2 className='text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl'>
                Trusted by investors who want clarity, not noise.
              </h2>
              <p className='mt-3 text-sm text-zinc-400 sm:text-base'>
                From first-time investors to full-time traders, Moneybh.Ai keeps
                everyone on the same page.
              </p>
            </div>

            <div className='mt-8 grid gap-6 md:grid-cols-3'>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <p className='mt-1 text-sm leading-relaxed text-zinc-100'>
                    “In one screen I see what changed, why it changed, and what
                    I should do next. I have not opened my broker app homepage
                    in weeks.”
                  </p>
                  <p className='mt-2 text-xs text-zinc-400'>
                    Retail investor, 5+ years
                  </p>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <p className='mt-1 text-sm leading-relaxed text-zinc-100'>
                    “Moneybh.Ai turned my scattered SIPs into an actual plan. It
                    nudges me when I drift away from my goals.”
                  </p>
                  <p className='mt-2 text-xs text-zinc-400'>
                    Young professional, first-time investor
                  </p>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-[26px] border border-neutral-800 bg-gradient-to-b from-[#181818] via-[#101010] to-[#050505] p-4 text-sm text-zinc-200 shadow-[0_22px_40px_rgba(0,0,0,0.9)] sm:p-5'>
                <div className='pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_0_0,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_55%)]' />
                <div className='relative flex h-full flex-col justify-between gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/80 text-[11px] text-zinc-100'>
                      ✶
                    </div>
                  </div>
                  <p className='mt-1 text-sm leading-relaxed text-zinc-100'>
                    “I forward statements, it figures out the rest. The AI
                    answers are specific to my portfolio, not generic tips.”
                  </p>
                  <p className='mt-2 text-xs text-zinc-400'>
                    Part-time trader, equities and mutual funds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id='pricing'
          className='bg-black px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16'
        >
          <div className='mx-auto flex max-w-4xl flex-col items-center text-center'>
            <h2 className='text-xl font-semibold tracking-tight sm:text-2xl'>
              Start free while we are in beta.
            </h2>
            <p className='mt-3 max-w-xl text-sm text-neutral-300 sm:text-base'>
              Early users get priority access to new models, features, and
              support. No card required to try Moneybh.Ai.
            </p>
            <div className='mt-5 flex flex-wrap items-center justify-center gap-3'>
              <a
                href='/sign-up'
                className='inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-[0_16px_60px_rgba(0,0,0,0.85)] transition hover:bg-neutral-100'
              >
                Get early access
              </a>
              <a
                href='/sign-in'
                className='inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-medium text-neutral-100 backdrop-blur-md hover:bg-black/60'
              >
                Log in to workspace
                <LogIn className='ms-2 h-4 w-4' />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-neutral-800 bg-gradient-to-b from-[#0e0e0e] to-[#0a0a0a]'>
        <div className='mx-auto max-w-[1100px] px-4 py-12'>
          <div className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.35)]'>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
              <div className='flex items-center gap-3'>
                <span className='text-xl text-[#f78a1d]'>Moneybh.Ai</span>
                <span className='text-[11px] text-zinc-400 sm:text-xs'>
                  AI copilot for every money decision
                </span>
              </div>
              <form className='flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2 md:w-auto'>
                <input
                  type='email'
                  required
                  placeholder='Enter your email'
                  className='flex-1 rounded-[22px] border border-neutral-800 bg-[#050505] px-5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#f78a1d] sm:text-xs md:w-64'
                />
                <Button className='w-full rounded-[22px] border border-[#f78a1d]/70 bg-gradient-to-r from-[#f78a1d] via-amber-400 to-[#f78a1d] px-4 py-2.5 text-xs font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.75)] transition hover:brightness-110 sm:w-auto sm:px-5 sm:text-xs'>
                  Subscribe
                </Button>
              </form>
            </div>
            <div className='mt-6 flex items-center justify-between text-xs text-zinc-500'>
              <div>© {new Date().getFullYear()} Moneybh.Ai</div>
              <div className='flex items-center gap-4'>
                <a href='/privacy' className='hover:text-white'>
                  Privacy
                </a>
                <a href='/terms' className='hover:text-white'>
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
