import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loren Ipsum',
        size: 'md',
        weight: 'normal',
        asChild: false,
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
        },
        weight: {
            control: {
                type: 'select',
            },
            options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: <p>Text inside a paragraph</p>
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        }
    }
}