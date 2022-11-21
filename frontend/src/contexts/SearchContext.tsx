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

type Page = {
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    items: Movie[];
}

type SearchContextType = {
    page: Page;
    time: number;
    total: number;
    searchHandler: (terms: string, page: number, limit: number) => void
}

export const SearchContext = createContext({} as SearchContextType)

export const SearchProvider = (props: Props) => {

    const { children } = props;

    const [page, setPage] = useState<Page>(
        {
            currentPage: 0,
            itemsPerPage: 0,
            totalPages: 0,
            totalItems: 0,
            items: []
        } as Page);
    const [time, setTime] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        searchHandler('');
    }, []);

    const searchHandler = useCallback((terms: string, page: number = 0, limit: number = 0) => {
        const startTime = new Date().getTime();
        fetch(`/api/movies?terms=${terms}&page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setPage(data);
                setTime((new Date().getTime() - startTime) / 1000);
                setTotal(data.items.length);
            })
    }, []);

    const value = {
        page,
        time,
        total,
        searchHandler
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}