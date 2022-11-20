import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Loren Ipsum',
        size: '1',
        weight: 'bold',
        asChild: false,
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['1', '2', '3', '4', '5', '6'],
        },
        weight: {
            control: {
                type: 'select',
            },
            options: ['thin', 'normal', 'bold'],
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: <h1>Heading as H1</h1>
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}
