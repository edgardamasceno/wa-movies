import { Meta, StoryObj } from '@storybook/react';
import { SearchBar, SearchBarProps } from './SearchBar';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    args: {
        placeholder: 'Title, director, producer or year of release?',
        buttonLabel: 'Search',
        onSearch: (value: string) => console.log(value),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        onSearch: {
            table: {
                disable: true,
            }
        }

    }
} as Meta<SearchBarProps>;

export const Default: StoryObj<SearchBarProps> = {}