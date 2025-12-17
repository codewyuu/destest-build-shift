import { type SVGProps } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Root as Radio, Item } from '@radix-ui/react-radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { fonts } from '@/config/fonts'
import { CircleCheck } from 'lucide-react'
import { IconDir } from '@/assets/custom/icon-dir'
import { IconLayoutCompact } from '@/assets/custom/icon-layout-compact'
import { IconLayoutDefault } from '@/assets/custom/icon-layout-default'
import { IconLayoutFull } from '@/assets/custom/icon-layout-full'
import { IconSidebarFloating } from '@/assets/custom/icon-sidebar-floating'
import { IconSidebarInset } from '@/assets/custom/icon-sidebar-inset'
import { IconSidebarSidebar } from '@/assets/custom/icon-sidebar-sidebar'
import { IconThemeDark } from '@/assets/custom/icon-theme-dark'
import { IconThemeLight } from '@/assets/custom/icon-theme-light'
import { IconThemeSystem } from '@/assets/custom/icon-theme-system'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { useDirection } from '@/context/direction-provider'
import { useFont } from '@/context/font-provider'
import { useLayout } from '@/context/layout-provider'
import { useTheme } from '@/context/theme-provider'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useSidebar } from '@/components/ui/sidebar'
import { SelectDropdown } from '@/components/select-dropdown'

const appearanceFormSchema = z.object({
  theme: z.enum(['system', 'light', 'dark']),
  variant: z.enum(['inset', 'floating', 'sidebar']),
  layout: z.enum(['default', 'icon', 'offcanvas']),
  direction: z.enum(['ltr', 'rtl']),
  font: z.enum(fonts),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceForm() {
  const { font, setFont, resetFont } = useFont()
  const { theme, setTheme, resetTheme } = useTheme()
  const { defaultDir, dir, setDir } = useDirection()
  const { collapsible, setCollapsible, variant, setVariant, resetLayout } =
    useLayout()
  const { open, setOpen } = useSidebar()

  // This can come from your database or API.
  const defaultValues: Partial<AppearanceFormValues> = {
    theme: theme as 'system' | 'light' | 'dark',
    variant,
    layout: (open ? 'default' : collapsible) as
      | 'default'
      | 'icon'
      | 'offcanvas',
    direction: dir,
    font,
  }

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    if (data.font !== font) setFont(data.font)
    if (data.theme !== theme) setTheme(data.theme)

    if (data.variant !== variant) setVariant(data.variant)

    // Layout handling mirrors ConfigDrawer behavior
    if (data.layout === 'default') {
      if (!open) setOpen(true)
    } else {
      if (open) setOpen(false)
      if (data.layout !== collapsible) setCollapsible(data.layout)
    }

    if (data.direction !== dir) setDir(data.direction)

    showSubmittedData(data)
  }

  // Visual radio item reused from the previous Theme Settings drawer
  function VisualRadioItem({
    item,
    isTheme,
  }: {
    item: {
      value: string
      label: string
      icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement
    }
    isTheme?: boolean
  }) {
    return (
      <Item
        value={item.value}
        className='group transition duration-200 ease-in outline-none'
        aria-label={`Select ${item.label.toLowerCase()}`}
        aria-describedby={`${item.value}-description`}
      >
        <div
          className='ring-border group-data-[state=checked]:ring-primary relative rounded-[6px] ring-[1px] group-focus-visible:ring-2 group-data-[state=checked]:shadow-2xl'
          role='img'
          aria-hidden='false'
          aria-label={`${item.label} option preview`}
        >
          <CircleCheck
            className='fill-primary absolute top-0 right-0 size-6 translate-x-1/2 -translate-y-1/2 stroke-white group-data-[state=unchecked]:hidden'
            aria-hidden='true'
          />
          <item.icon
            className={cn(
              !isTheme &&
                'stroke-primary fill-primary group-data-[state=unchecked]:stroke-muted-foreground group-data-[state=unchecked]:fill-muted-foreground'
            )}
            aria-hidden='true'
          />
        </div>
        <div
          className='mt-1 text-xs'
          id={`${item.value}-description`}
          aria-live='polite'
        >
          {item.label}
        </div>
      </Item>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 sm:space-y-6'
      >
        {/* Theme with visual figures */}
        <div className='relative rounded-2xl border border-white/30 bg-white/55 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 dark:border-white/20 dark:bg-slate-900/30 dark:shadow-[0_4px_24px_rgba(255,255,255,0.06)] dark:ring-white/10'>
          <FormField
            control={form.control}
            name='theme'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel className='text-sm'>Theme</FormLabel>
                <FormDescription className='text-xs'>
                  Adjust the app color scheme.
                </FormDescription>
                <FormControl>
                  <Radio
                    value={field.value}
                    onValueChange={field.onChange}
                    className='grid w-full max-w-md grid-cols-3 gap-4'
                    aria-label='Select theme preference'
                    aria-describedby='theme-description'
                  >
                    {[
                      {
                        value: 'system',
                        label: 'System',
                        icon: IconThemeSystem,
                      },
                      { value: 'light', label: 'Light', icon: IconThemeLight },
                      { value: 'dark', label: 'Dark', icon: IconThemeDark },
                    ].map((item) => (
                      <VisualRadioItem key={item.value} item={item} isTheme />
                    ))}
                  </Radio>
                </FormControl>
                <div id='theme-description' className='sr-only'>
                  Choose between system preference, light mode, or dark mode
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Sidebar variant with visual figures */}
        <div className='relative rounded-2xl border border-white/30 bg-white/50 p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <FormField
            control={form.control}
            name='variant'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel className='text-sm'>Sidebar</FormLabel>
                <FormDescription className='text-xs'>
                  Choose inset, floating, or standard sidebar.
                </FormDescription>
                <FormControl>
                  <Radio
                    value={field.value}
                    onValueChange={field.onChange}
                    className='grid w-full max-w-md grid-cols-3 gap-4'
                    aria-label='Select sidebar style'
                    aria-describedby='sidebar-description'
                  >
                    {[
                      {
                        value: 'inset',
                        label: 'Inset',
                        icon: IconSidebarInset,
                      },
                      {
                        value: 'floating',
                        label: 'Floating',
                        icon: IconSidebarFloating,
                      },
                      {
                        value: 'sidebar',
                        label: 'Sidebar',
                        icon: IconSidebarSidebar,
                      },
                    ].map((item) => (
                      <VisualRadioItem key={item.value} item={item} />
                    ))}
                  </Radio>
                </FormControl>
                <div id='sidebar-description' className='sr-only'>
                  Choose between inset, floating, or standard sidebar layout
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Layout with visual figures */}
        <div className='relative rounded-2xl border border-white/30 bg-white/50 p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <FormField
            control={form.control}
            name='layout'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel className='text-sm'>Layout</FormLabel>
                <FormDescription className='text-xs'>
                  Default expanded, compact icon-only, or full layout.
                </FormDescription>
                <FormControl>
                  <Radio
                    value={field.value}
                    onValueChange={field.onChange}
                    className='grid w-full max-w-md grid-cols-3 gap-4'
                    aria-label='Select layout style'
                    aria-describedby='layout-description'
                  >
                    {[
                      {
                        value: 'default' as const,
                        label: 'Default',
                        icon: IconLayoutDefault,
                      },
                      {
                        value: 'icon' as const,
                        label: 'Compact',
                        icon: IconLayoutCompact,
                      },
                      {
                        value: 'offcanvas' as const,
                        label: 'Full layout',
                        icon: IconLayoutFull,
                      },
                    ].map((item) => (
                      <VisualRadioItem key={item.value} item={item} />
                    ))}
                  </Radio>
                </FormControl>
                <div id='layout-description' className='sr-only'>
                  Choose between default expanded, compact icon-only, or full
                  layout mode
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Direction with visual figures */}
        <div className='relative rounded-2xl border border-white/30 bg-white/50 p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <FormField
            control={form.control}
            name='direction'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel className='text-sm'>Direction</FormLabel>
                <FormDescription className='text-xs'>
                  Left-to-right or right-to-left.
                </FormDescription>
                <FormControl>
                  <Radio
                    value={field.value}
                    onValueChange={field.onChange}
                    className='grid w-full max-w-md grid-cols-2 gap-4'
                    aria-label='Select site direction'
                    aria-describedby='direction-description'
                  >
                    {[
                      {
                        value: 'ltr',
                        label: 'Left to Right',
                        icon: (props: SVGProps<SVGSVGElement>) => (
                          <IconDir dir='ltr' {...props} />
                        ),
                      },
                      {
                        value: 'rtl',
                        label: 'Right to Left',
                        icon: (props: SVGProps<SVGSVGElement>) => (
                          <IconDir dir='rtl' {...props} />
                        ),
                      },
                    ].map((item) => (
                      <VisualRadioItem key={item.value} item={item} />
                    ))}
                  </Radio>
                </FormControl>
                <div id='direction-description' className='sr-only'>
                  Choose between left-to-right or right-to-left site direction
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Font */}
        <div className='relative rounded-2xl border border-white/30 bg-white/50 p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/10 backdrop-blur-xl sm:p-5 dark:border-white/20 dark:bg-slate-900/25 dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)] dark:ring-white/10'>
          <FormField
            control={form.control}
            name='font'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel className='text-sm'>Font</FormLabel>
                <div className='relative w-[220px]'>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    isControlled
                    items={fonts.map((f) => ({ label: f, value: f }))}
                    className='w-full rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm ring-1 ring-black/10 backdrop-blur-md dark:border-white/20 dark:bg-slate-900/35 dark:ring-white/10'
                    contentClassName='rounded-xl border border-black/10 dark:border-white/20 bg-white/85 dark:bg-slate-900/80 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_16px_rgba(255,255,255,0.05)]'
                    itemClassName='rounded-md px-3 py-2 text-sm focus:bg-black/10 dark:focus:bg-white/12 focus:text-foreground'
                  />
                </div>
                <FormDescription className='font-manrope text-xs'>
                  Set the font you want to use in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex items-center justify-between gap-3'>
          <Button
            type='button'
            variant='ghost'
            className='rounded-lg'
            onClick={() => {
              // Reset everything to app defaults
              resetTheme()
              resetFont()
              resetLayout()
              setOpen(true)
              setDir(defaultDir)
            }}
          >
            Reset
          </Button>
          <Button type='submit' variant='secondary' className='rounded-lg'>
            Update preferences
          </Button>
        </div>
      </form>
    </Form>
  )
}
