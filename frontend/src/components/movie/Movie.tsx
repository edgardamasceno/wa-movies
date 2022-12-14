import { clsx } from 'clsx';
import { Card } from '../card/Card';
import { Heading } from '../heading/Heading';
import { Text } from '../text/Text';

export interface MovieProps {
    title: string;
    originalTitle: string;
    originalTitleRomanised: string;
    cover: string;
    banner: string;
    description: string;
    year: number;
    duration: number;
    producer: string;
    director: string;
}

export const Movie = ({ title, originalTitle, originalTitleRomanised, cover, banner, description, year, duration, producer, director }: MovieProps) => {
    return (
        <Card>
            <div className='flex-grow'>
                <div
                    className={
                        clsx('w-full h-max-[350px] mt-[3px] rounded h-[350px]')
                    }
                    style={{
                        background: `linear-gradient(to top, rgba(249, 250, 251, 1) 10%, rgba(249, 250, 251, 0) 100%), url(${banner}) no-repeat center center`,
                        backgroundSize: 'cover',
                    }}
                >
                </div>
                <div className='w-full mt-[-200px] pl-[20px] flex gap-4'>
                    <div className=' bg-white rounded shadow-lg p-[8px] hover:scale-105 transition duration-300 ease-in-out max-h-[196px] min-w-[136px]'>
                        <img src={cover} alt={`movie ${title} cover`} className='w-[120px]' />
                    </div>
                    <div className='flex flex-col items-botton justify-end'>
                        <Heading size={'5'} weight={'bold'} >{title}</Heading>
                        <div className='flex gap-2 mb-[8px]'>
                            <Heading size={'6'} weight={'bold'} >{originalTitleRomanised}</Heading>
                        </div>
                        <div className='flex gap-2 mb-[8px]'>
                            <Heading size={'6'} weight={'thin'} >{`( ${originalTitle} )`}</Heading>
                        </div>
                        <div>
                            <Text size={'sm'} weight={'bold'} >Director: </Text>
                            <Text size={'sm'} weight={'normal'} >{director}:</Text>
                        </div>
                        <div>
                            <Text size={'sm'} weight={'bold'} >Producer: </Text>
                            <Text size={'sm'} weight={'normal'} >{producer}</Text>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-[12px] px-[16px] flex-1'>
                    <Heading asChild weight='bold' size='6'><h3>Description:</h3></Heading>
                    <Text size='md' weight='thin'>
                        <p className='text'>{description}</p>
                    </Text>
                </div>
            </div>
            <div className="flex-1"></div>
            <div className='flex justify-between mt-[12px] px-[20px]'>
                <span>
                    <Text size='sm' weight='bold'>Year:</Text>
                    <Text size='sm' weight='normal'>{` ${year}`}</Text>
                </span>
                <span>
                    <Text size='sm' weight='bold'>Duration:</Text>
                    <Text size='sm' weight='normal'>{` ${duration} minutes`}</Text>
                </span>
            </div>
        </Card>
    )
}