import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
    size: '1' | '2' | '3' | '4' | '5' | '6';
    weight: 'thin' | 'normal' | 'bold';
    children: ReactNode;
    asChild?: boolean;
}

export const Heading = ({ size = '2', weight = 'bold', children, asChild }: HeadingProps) => {

    const Component = asChild ? Slot : 'h2';

    return (
        <Component className={
            clsx(
                'text-slate-600 font-sans',
                {
                    'text-6xl mb-4': size === '1',
                    'text-5xl mb-4': size === '2',
                    'text-4xl mb-4': size === '3',
                    'text-3xl mb-3': size === '4',
                    'text-2xl mb-3': size === '5',
                    'text-1xl mb-3': size === '6',
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