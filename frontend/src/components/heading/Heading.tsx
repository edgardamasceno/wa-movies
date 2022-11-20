import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
    size: '1' | '2' | '3' | '4' | '5' | '6';
    weight: 'thin' | 'normal' | 'bold';
    children: ReactNode;
    asChild?: boolean;
}

export const Heading = ({ size = 'sm', weight = 'bold', children, asChild }: HeadingProps) => {

    const Component = asChild ? Slot : 'h2';

    return (
        <Component className={
            clsx(
                'text-slate-600 font-sans',
                {
                    'text-6xl': size === '1',
                    'text-5xl': size === '2',
                    'text-4xl': size === '3',
                    'text-3xl': size === '4',
                    'text-2xl': size === '5',
                    'text-1xl': size === '6',
                    'font-thin': weight === 'thin',
                    'font-normal': weight === 'normal',
                    'font-bold': weight === 'bold',
                }
            )
        }
        >
            {children}
        </Component>
    )
}