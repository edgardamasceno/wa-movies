import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    weight: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    children: ReactNode;
    asChild?: boolean;
}

export const Text = ({ size = 'md', weight = 'normal', children, asChild }: TextProps) => {

    const Component = asChild ? Slot : 'span';

    return (
        <Component className={
            clsx(
                `text-slate-700 font-sans`,
                {
                    'text-xs': size === 'xs',
                    'text-sm': size === 'sm',
                    'text-base': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                    'text-3xl': size === '3xl',
                    'text-4xl': size === '4xl',
                    'text-5xl': size === '5xl',
                    'text-6xl': size === '6xl',
                    'font-thin': weight === 'thin',
                    'font-extralight': weight === 'extralight',
                    'font-light': weight === 'light',
                    'font-normal': weight === 'normal',
                    'font-medium': weight === 'medium',
                    'font-semibold': weight === 'semibold',
                    'font-bold': weight === 'bold',
                    'font-extrabold': weight === 'extrabold',
                    'font-black': weight === 'black',
                },
            )
        }
        >
            {children}
        </Component>
    )
}