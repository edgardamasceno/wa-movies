import { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    args: {
        page: 3,
        totalPages: 4,
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<PaginationProps>;

export const Default: StoryObj<PaginationProps> = {}