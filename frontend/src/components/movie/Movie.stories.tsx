import { Meta, StoryObj } from '@storybook/react';
import { Movie, MovieProps } from './Movie';

export default {
    title: 'Components/Movie',
    component: Movie,
    args: {
        title: 'Spirited Away',
        originalTitle: '千と千尋の神隠し',
        originalTitleRomanised: "Sen to Chihiro no kamikakushi",
        cover: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
        banner: 'https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg',
        description: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
        director: 'Hayao Miyazaki',
        producer: 'Toshio Suzuki',
        year: 2001,
        duration: 124,
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<MovieProps>;

export const Default: StoryObj<MovieProps> = {}