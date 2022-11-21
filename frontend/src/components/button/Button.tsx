import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonRootProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    btnsize: 'small' | 'medium' | 'large';
}

export interface ButtonIconProps {
    children: ReactNode;
}

export interface ButtonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const ButtonRoot = (props: ButtonRootProps) => {

    const classes = clsx(
        'bg-blue-500 border-none rounded py-2 px-4 text-white',
        'w-full outline-none focus-within:border-none focus-within:ring-2 focus-within:ring-blue-300',
        'hover:border-none active-within:ring-blue-300 hover:brightness-110 ',
        'transition duration-300 ease-in-out flex items-center gap-3 font-semibold',
        { 'h-12 text-md': props.btnsize === 'large' },
        { 'h-10 text-sm': props.btnsize === 'medium' },
        { 'h-8 text-xs font-medium': props.btnsize === 'small' },
    );

    return (
        <div className={classes} {...props}>
            {props.children}
        </div>
    );
}

const ButtonIcon = ({ children }: ButtonIconProps) => {

    const classes = clsx(
        'w-6 h-6',
    );

    return (
        <Slot className={classes}>
            {children}
        </Slot>
    );
}

const ButtonButton = (props: ButtonButtonProps) => {

    const classes = clsx(
        'font-sans font-[inherit] text-[inherit]',
        'flex-1 outline-none bg-transparent',
    );

    return (
        <button className={classes} {...props} >
            {props.children}
        </button>
    )
}

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon,
    Button: ButtonButton,
}