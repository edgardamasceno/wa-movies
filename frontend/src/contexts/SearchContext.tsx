import { createContext, useEffect } from 'react'
import { useCallback, useState } from 'react'

interface Props {
    children: React.ReactNode
}

type Movie = {
    id: string;
    title: string;
    description: string;
    originalTitle: string;
    originalTitleRomanised: string;
    director: string;
    producer: string;
    cover: string;
    banner: string;
    year: number;
    duration: number;
}

type SearchContextType = {
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    items: Movie[];
    time: number;
    searchHandler: (terms: string, page: number, limit: number) => void
}

export const SearchContext = createContext({} as SearchContextType)

export const SearchProvider = (props: Props) => {

    const { children } = props;
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(0);
    const [items, setItems] = useState<Array<Movie>>([]);
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        searchHandler('');
    }, []);

    const searchHandler = useCallback((terms: string, page: number = 1, limit: number = 10) => {
        const startTime = new Date().getTime();
        fetch(`/api/movies?terms=${terms}&page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setItems(data.items);
                setCurrentPage(data.page);
                setItemsPerPage(data.itemsPerPage);
                setTotalItems(data.totalItems);
                setTotalPages(data.totalPages);
                setTime((new Date().getTime() - startTime) / 1000);
            })
    }, []);

    const value = {
        totalPages,
        totalItems,
        currentPage,
        itemsPerPage,
        items,
        time,
        searchHandler
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}