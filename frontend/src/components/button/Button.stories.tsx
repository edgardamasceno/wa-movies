import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonRootProps, ButtonButtonProps } from './Button'
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

export default {
    title: 'Components/Button',
    component: Button.Root,
    args: {
        children: [
            <Button.Button>Button</Button.Button>,
        ],
        btnSize: 'medium'
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        btnSize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }

    }
} as Meta<ButtonRootProps>;

export const Default: StoryObj<ButtonRootProps> = {}

export const ButtonWithIconLeft: StoryObj<ButtonRootProps> = {
    args: {
        children: [
            <Button.Icon>
                <MagnifyingGlassIcon className='text-gray-100' />
            </Button.Icon>,
            <Button.Button>Button with icon left</Button.Button>]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as StoryObj<ButtonRootProps>;

export const ButtonWithIconRight: StoryObj<ButtonRootProps> = {
    args: {
        children: [
            <Button.Button>Button with icon rigth</Button.Button>,
            <Button.Icon>
                <MagnifyingGlassIcon className='text-gray-100' />
            </Button.Icon>,
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as StoryObj<ButtonRootProps>;

