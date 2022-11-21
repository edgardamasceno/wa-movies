import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className={
            clsx(
                ' bg-gray-50 border-gray-100 border rounded py-3 px-4 h-full',
                'flex flex-col'
            )
        }
        >
            {children}
        </div>
    )
}