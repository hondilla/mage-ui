'use client'

import { panda } from '@mage/ui-lib/jsx'
import { button, type ButtonVariantProps } from '@mage/ui-lib/recipes'
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

export type ButtonBaseProps = ComponentPropsWithRef<'button'> &
  ButtonVariantProps & {
    children: ReactNode
    className?: string
  }

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, className, color, variant, ...props }, ref) => {
    return (
      <panda.button
        className={className ?? button({ color, variant })}
        {...props}
        ref={ref}
      >
        {children}
      </panda.button>
    )
  }
)
