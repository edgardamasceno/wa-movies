import { UpdateIcon, ColumnsIcon, RowsIcon, TrashIcon } from '@radix-ui/react-icons'
import { useState } from 'react';
import { clsx } from 'clsx';
import { Movie } from "../components/movie/Movie";
import { Pagination } from "../components/pagination/Pagination";
import { SearchBar } from "../components/searchbar/SearchBar";
import { Text } from "../components/text/Text";

type pageSettingsType = {
    page: number;
    totalPages: number;
    totalResults: number;
    resultsPerPage: number;
    searchResponseTime: number;
    viewResultsAs: 'column' | 'row';
}

export const SearchPage = () => {

    const [pageSettings, setPageSettings] = useState<pageSettingsType>(
        {
            page: 0,
            totalPages: 0,
            totalResults: 0,
            resultsPerPage: 0,
            searchResponseTime: 0,
            viewResultsAs: 'row',
        }
    );

    const handleViewResults = (viewResultsAs: "column" | "row") => {
        if (pageSettings.viewResultsAs !== viewResultsAs) {
            setPageSettings({ ...pageSettings, viewResultsAs: viewResultsAs });
        }
    }

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full flex flex-col items-center">
                <div className="lg:w-[960px] w-full flex flex-col align-middle justify-center px-4 pt-4 pb-[4px] gap-[4px] ">
                    <SearchBar onSearch={console.log} buttonLabel="Search" placeholder="Enter the title of a movie, director or producer..."></SearchBar>
                    <Text size="xs" weight="thin">13 results in 1.013 seconds</Text>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-2">
                <div className="lg:w-[960px] w-full flex flex-col gap-4">
                    <div className="flex justify-between px-4 gap-3">
                        <div className="gap-2 hidden lg:flex">
                            <span
                                className={
                                    clsx(
                                        'flex gap-2 rounded bg-slate-100  py-[10px] px-[13px] cursor-pointer hover:bg-slate-200 items-center',
                                        { 'bg-slate-300 border-[2px]': pageSettings.viewResultsAs === 'row' },
                                    )}
                                onClick={() => handleViewResults('row')}
                            >
                                <RowsIcon />
                            </span>
                            <span
                                className={clsx(
                                    'flex gap-2 rounded bg-slate-100 py-[10px] px-[13px] cursor-pointer hover:bg-slate-200 items-center',
                                    { 'bg-slate-300 border-[2px]': pageSettings.viewResultsAs === 'column' },
                                )}
                                onClick={() => handleViewResults('column')}
                            >
                                <ColumnsIcon />
                            </span>
                        </div>
                        <div className="flex-1" />
                        <span className='flex gap-2 rounded bg-slate-100 py-[10px] px-[13px] cursor-pointer hover:bg-slate-200 items-center'>
                            <UpdateIcon className='hover:animate-spin' />
                            <Text size="sm" weight="normal">Update Database</Text>
                        </span>
                        <span className='flex gap-2 rounded bg-red-300 py-[10px] px-[16px] cursor-pointer hover:bg-red-400 items-center'>
                            <TrashIcon className='hover:animate-bounce' />
                            <Text size="sm" weight="normal">Wipe Database</Text>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-white py-4 items-center">
                <div className={
                    clsx(
                        "lg:w-[960px] w-full flex gap-4 flex-col",
                        {
                            "flex-row": pageSettings.viewResultsAs === 'row',
                            "flex-col lg:flex-row": pageSettings.viewResultsAs === 'column',
                        },
                    )
                }>
                    <Movie
                        title={"Spirited Away"}
                        originalTitle={"千と千尋の神隠し"}
                        originalTitleRomanised={"Sen to Chihiro no kamikakushi"}
                        cover={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"}
                        banner={"https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg"}
                        description={"Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?"}
                        year={2001}
                        duration={124}
                        producer={"Toshio Suzuki"}
                        director={"Hayao Miyazaki"}
                    />

                    <Movie
                        title={"The Cat Returns"}
                        originalTitle={"猫の恩返し"}
                        originalTitleRomanised={"Neko no ongaeshi"}
                        cover={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg"}
                        banner={"https://image.tmdb.org/t/p/original/d4BTZvckFTthyhGX27LZnWxl0tl.jpg"}
                        description={"Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world."}
                        year={2002}
                        duration={75}
                        producer={"Toshio Suzuki"}
                        director={"Hiroyuki Morita"}
                    />
                </div>
            </div>
            <div className="w-full p-4 bg-gray-50 flex align-middle justify-center">
                <Pagination page={1} totalPages={12} onPageChange={console.log} />
            </div>
        </div>
    )
}