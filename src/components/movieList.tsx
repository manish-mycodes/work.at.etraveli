'use client'
import { useEffect, useState } from 'react'
import ListItems from '../components/listItems'
import SearchBar from '../components/searchBar'
import { MovieObjectType } from '../types'
import Description from '../components/description'
import { intToRoman } from '../utility/numberFormatter'

export default function MovieList() {
    const [currentMovieSelected, setCurrentMovieSelected] =
        useState<MovieObjectType | null>(null)
    const [loading, setLoading] = useState(true)
    const [listItems, setListItems] = useState<MovieObjectType[]>([])
    const [mainListItems, setMainListItems] = useState<MovieObjectType[]>([])

    const setItems = (listItems: MovieObjectType[]) => {
        setMainListItems(listItems)
        setListItems(listItems)
    }

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

    return (
        <div className="flex flex-col">
            <SearchBar
                searchInputHandler={searchInputHandler}
                sortByHandler={sortByHandler}
            />
            <div className="flex flex-row h-[calc(100vh-64px)] ">
                <div className="flex-1 border-r border-gray-300">
                    {!loading ? (
                        <ListItems
                            items={listItems}
                            itemSelectHandler={itemSelectHandler}
                        />
                    ) : (
                        <div className="flex justify-center items-center h-[100%] ">
                            Loading...
                        </div>
                    )}
                </div>

                <div className="flex-1 p-4">
                    {currentMovieSelected ? (
                        <Description
                            episodeIdRoman={
                                currentMovieSelected.episode_id_roman
                            }
                            title={currentMovieSelected.title}
                            description={currentMovieSelected.opening_crawl}
                        />
                    ) : (
                        <div className="flex justify-center items-center h-[100%] ">
                            No Movie Selected
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
