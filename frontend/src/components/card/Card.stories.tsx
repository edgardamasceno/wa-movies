import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../heading/Heading';
import { Text } from '../text/Text';
import { Card, CardProps } from './Card'

export default {
    title: 'Components/Card',
    component: Card,
    args: {
        children: <>
            <Heading size={'2'} weight={'normal'} asChild>
                <h1>Heading</h1>
            </Heading>
            <Text size='md' weight='thin' asChild >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lorem nec quam vestibulum imperdiet cursus ut nunc. Integer elit leo, sagittis eu facilisis vel, pharetra quis mauris. Quisque eget nisl vitae odio vestibulum tempor nec non orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus purus ut lacus tempus laoreet. Nam ac tristique arcu. Fusce ac turpis tincidunt, auctor mauris at, tempor ex. Nunc quis tortor ac augue vestibulum pretium eget euismod lectus. Vivamus viverra ipsum a bibendum ornare. Aenean rhoncus malesuada tristique. Aenean tincidunt sagittis felis, eu viverra neque euismod a. Proin tortor mi, pellentesque ut magna eget, blandit egestas tellus. Nulla eget nulla aliquet, vulputate arcu sed, lacinia tortor. Pellentesque ac volutpat tortor. Proin gravida lacus neque, nec semper metus consequat sed.</p>
            </Text>
        </>
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {}