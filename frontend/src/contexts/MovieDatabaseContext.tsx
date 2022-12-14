import { createContext, useEffect } from 'react'
import { useCallback, useState } from 'react'

interface Props {
    children: React.ReactNode
}

type MovieDatabaseContextType = {
    message: string,
    updateHandler: () => void,
    wipeHandler: () => void,
}

export const MovieDatabaseContext = createContext({} as MovieDatabaseContextType)

export const MovieDatabaseProvider = (props: Props) => {

    const { children } = props;
    const [message, setMessage] = useState<string>('');

    const updateHandler = useCallback(() => {
        fetch(`/api/database/update`)
            .then(response => response.json())
            .then(data => {
                setMessage(`${data.updated} movies have been updated.`)
            })
    }, []);

    const wipeHandler = useCallback(() => {
        fetch(`/api/database/wipe`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                setMessage(`${data.deleted} movies have been deleted.`)
            })
    }, []);

    const value = {
        message,
        updateHandler,
        wipeHandler
    }

    return (
        <MovieDatabaseContext.Provider value={value}>
            {children}
        </MovieDatabaseContext.Provider>
    )
}