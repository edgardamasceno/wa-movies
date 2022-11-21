import { UpdateIcon, ColumnsIcon, RowsIcon, TrashIcon } from '@radix-ui/react-icons'
import { useContext, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Movie } from "../components/movie/Movie";
import { Pagination } from "../components/pagination/Pagination";
import { SearchBar } from "../components/searchbar/SearchBar";
import { Text } from "../components/text/Text";
import { SearchContext } from '../contexts/SearchContext';
import { MovieDatabaseContext } from '../contexts/MovieDatabaseContext';

export const SearchPage = () => {

    const [view, setView] = useState<'list' | 'grid'>('list');

    const { items, totalItems, totalPages, currentPage, itemsPerPage, time, searchHandler } = useContext(SearchContext);

    const { message, updateHandler, wipeHandler } = useContext(MovieDatabaseContext)

    const [terms, setTerms] = useState<string>('');
    const [page, setPage] = useState<number>(currentPage | 1);
    const [updating, setUpdating] = useState<boolean>(false);
    const [wiping, setWiping] = useState<boolean>(false);

    useEffect(() => {
        setUpdating(false);
        setWiping(false);
    }, [message]);

    const handleSearch = (terms: string) => {
        setTerms(terms);
        setPage(1);
        searchHandler(terms, 1, 10);
    }

    const handlePagination = (page: number) => {
        setPage(page);
        searchHandler(terms, page, 10);
        window.scrollTo(0, 0)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="lg:w-[960px] w-full flex flex-col align-middle justify-center pt-4 pb-[4px] gap-[4px] ">
                    <Text size="xs" weight="thin">{totalItems} movies in {time} seconds. <Text size="xs" weight="normal">Showing {items.length} movies.</Text></Text>
                    <SearchBar onSearch={handleSearch} buttonLabel="Search" placeholder="Enter the title of a movie, director, producer or year..."></SearchBar>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-3">
                <div className="lg:w-[960px] w-full flex flex-col gap-4">
                    <div className="flex justify-between gap-3">
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
                        <span onClick={() => { updateHandler(); setUpdating(true); }} className='flex gap-2 rounded bg-slate-100 py-[10px] px-[13px] cursor-pointer hover:bg-slate-200 items-center'>
                            <UpdateIcon className={clsx(
                                'hover:animate-spin',
                                { 'animate-spin': updating }
                            )} />
                            <Text size="sm" weight="normal">Update Database</Text>
                        </span>
                        <span className='flex gap-2 rounded bg-red-300 py-[10px] px-[17px] cursor-pointer hover:bg-red-400 items-center'>
                            <TrashIcon className='hover:animate-bounce' />
                            <Text size="sm" weight="normal">Wipe Database</Text>
                        </span>
                    </div>
                </div>
            </div>

            <div className={
                clsx(
                    "w-full flex flex-col items-center pt-4",
                    {
                        "hidden": message === '',
                    }
                )
            }>
                <div className={clsx(
                    "lg:w-[960px] w-full flex flex-col align-middle justify-center",
                    "border border-yellow-300 bg-yellow-50 text-yellow-700",
                    "rounded px-4 py-2"
                )}>
                    {message}
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
                    items.map((movie) => {
                        return <Movie {...movie} key={movie.id} />
                    })
                }
            </div>
            <div className="w-full p-4 bg-gray-50 flex align-middle justify-center">
                <Pagination page={page} totalPages={totalPages} onPageChange={handlePagination} />
            </div>
        </div>
    )
}