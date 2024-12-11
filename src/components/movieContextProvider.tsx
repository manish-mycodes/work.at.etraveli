import { createContext, useEffect, useState } from 'react'
import { MovieContextType, MovieObjectType } from '../types'
import { intToRoman } from '../utility/numberFormatter'

const MovieContext = createContext<MovieContextType | null>(null)

export default MovieContext

export function MovieContextProvider({ children }: any) {
    const [listItems, setListItems] = useState<MovieObjectType[]>([])
    const [mainListItems, setMainListItems] = useState<MovieObjectType[]>([])
    const [loading, setLoading] = useState(true)
    const [currentMovieSelected, setCurrentMovieSelected] =
        useState<MovieObjectType | null>(null)
    const [sortByOpen, setSortByOpen] = useState(false)

    const sortByCloseHandler = () => setSortByOpen(false)
    const setItems = (listItems: MovieObjectType[]) => {
        setMainListItems(listItems)
        setListItems(listItems)
    }

    const itemSelectHandler = (episode_id: number) => {
        const item = listItems.filter(
            (item: MovieObjectType) => item.episode_id === episode_id
        )
        setCurrentMovieSelected(item[0])
    }

    const searchInputHandler = (text: string) => {
        const searchResult = mainListItems.filter((item: MovieObjectType) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        )
        setListItems(searchResult)
        setCurrentMovieSelected(null)
    }

    const sortByHandler = (option: string) => {
        let items = [...listItems]
        if (option === 'Episode') {
            items = items.sort((a, b) => a.episode_id - b.episode_id)
        } else if (option === 'Year') {
            items = items.sort(
                (a, b) =>
                    new Date(a.release_date).valueOf() -
                    new Date(b.release_date).valueOf()
            )
        }

        setItems(items)
    }

    const sortByOpenHandler = () => setSortByOpen((prev) => !prev)

    useEffect(() => {
        ;(async function () {
            const response = await fetch(
                'https://swapi.dev/api/films/?format=json'
            )
            const data = await response.json()
            const listItems = data.results.map((item: MovieObjectType) => {
                return {
                    title: item.title,
                    episode_id: item.episode_id,
                    episode_id_numeric: `EPISODE ${item.episode_id}`,
                    episode_id_roman: `EPISODE ${intToRoman(item.episode_id)}`,
                    opening_crawl: item.opening_crawl,
                    release_date: item.release_date,
                }
            })
            setItems(listItems)
            setLoading(false)
        })()
    }, [])

    const movieProviderValue = {
        listItems,
        mainListItems,
        loading,
        currentMovieSelected,
        itemSelectHandler,
        searchInputHandler,
        sortByHandler,
        sortByOpen,
        sortByCloseHandler,
        sortByOpenHandler,
    }
    return (
        <MovieContext.Provider value={movieProviderValue}>
            {children}
        </MovieContext.Provider>
    )
}
