import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps, TextInputInputProps } from './TextInput'
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        inputsize: 'medium',
        children: [
            <TextInput.Input placeholder='placeholder' />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        inputsize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}

export const TextInputWithIconLeft: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <MagnifyingGlassIcon className='text-slate-300' />
            </TextInput.Icon>,
            <TextInput.Input placeholder='placeholder' />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as StoryObj<TextInputRootProps>;

export const TextInputWithIconRight: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder='placeholder' />,
            <TextInput.Icon>
                <Cross2Icon className='text-slate-300 hover:text-blue-300' />
            </TextInput.Icon>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as StoryObj<TextInputRootProps>;

export const TextInputWithBothSideIcons: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <MagnifyingGlassIcon className='text-slate-300' />
            </TextInput.Icon>,
            <TextInput.Input placeholder='placeholder' />,
            <TextInput.Icon>
                <Cross2Icon className='text-slate-300 hover:text-blue-300' />
            </TextInput.Icon>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as StoryObj<TextInputRootProps>;