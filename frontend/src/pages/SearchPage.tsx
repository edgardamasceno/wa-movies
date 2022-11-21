import { UpdateIcon, ColumnsIcon, RowsIcon, TrashIcon } from '@radix-ui/react-icons'
import { useContext, useState } from 'react';
import { clsx } from 'clsx';
import { Movie } from "../components/movie/Movie";
import { Pagination } from "../components/pagination/Pagination";
import { SearchBar } from "../components/searchbar/SearchBar";
import { Text } from "../components/text/Text";
import { SearchContext } from '../contexts/SearchContext';

export const SearchPage = () => {

    const [view, setView] = useState<'list' | 'grid'>('list');

    const { page, time, total, searchHandler } = useContext(SearchContext);
    console.log(page);

    const [terms, setTerms] = useState<string>('');

    const handleSearch = (terms: string) => {
        if (terms !== terms) {
            setTerms(terms);
        }
        searchHandler(terms, 1, 10);
    }

    const handlePagination = (page: number) => {
        searchHandler(terms, page, 10);
    }

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="lg:w-[960px] w-full flex flex-col align-middle justify-center px-4 pt-4 pb-[4px] gap-[4px] ">
                    <SearchBar onSearch={handleSearch} buttonLabel="Search" placeholder="Enter the title of a movie, director or producer..."></SearchBar>
                    <Text size="xs" weight="thin">{total} in {time} seconds. <Text size="xs" weight="normal">Showing {page.items.length} movies.</Text></Text>

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
                                        { 'bg-slate-300 border-[2px]': view === 'list' },
                                    )}
                                onClick={() => setView('list')}
                            >
                                <RowsIcon />
                            </span>
                            <span
                                className={clsx(
                                    'flex gap-2 rounded bg-slate-100 py-[10px] px-[13px] cursor-pointer hover:bg-slate-200 items-center',
                                    { 'bg-slate-300 border-[2px]': view === 'grid' },
                                )}
                                onClick={() => setView('grid')}
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
            <div className={
                clsx(
                    "lg:w-[960px] w-full grid gap-3 items-center my-4",
                    {
                        "grid-cols-1": view === 'list',
                        "grid-cols-2 lg:grid-cols-1": view === 'grid',
                    },
                )
            }>
                {
                    page.items.map((movie) => {
                        return <Movie {...movie} key={movie.id} />
                    })
                }
            </div>
            <div className="w-full p-4 bg-gray-50 flex align-middle justify-center">
                <Pagination page={page.currentPage} totalPages={page.totalPages} onPageChange={handlePagination} />
            </div>
        </div>
    )
}