import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    inputsize: 'small' | 'medium' | 'large';
}

export interface TextInputIconProps extends InputHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }


const TextInputRoot = (props: TextInputRootProps) => {
    const classes = clsx(
        'bg-white border-slate-300 border rounded py-2 px-4',
        'w-full outline-none focus-within:ring-2 focus-within:ring-blue-300',
        'hover:ring-2 hover:ring-blue-300',
        'transition duration-300 ease-in-out',
        'flex items-center gap-3',
        {
            'h-12 text-lg': props.inputsize === 'large',
            'h-10 text-md px-2': props.inputsize === 'medium',
            'h-8 text-sm px-[8px]': props.inputsize === 'small',
        },
    );

    return (
        <div className={classes} {...props}>
            {props.children}
        </div>
    );
}

const TextInputIcon = ({ children }: TextInputIconProps) => {

    const classes = clsx(
        'w-6 h-6',
    );

    return (
        <Slot className={classes}>
            {children}
        </Slot>
    );
}

const TextInputInput = (props: TextInputInputProps) => {

    const classes = clsx(
        'text-slate-600 font-sans',
        'text-md placeholder:text-slate-300',
        'flex-1 outline-none bg-transparent',
    );

    return (
        <input className={classes} {...props} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput,
}