'use client'
import { useEffect, useState } from 'react'
import ListItems from '../components/movieListItems/listItems'
import SearchBar from '../components/searchBar'
import { MovieObjectType } from '../types'
import Description from '../components/description'

export default function MovieList() {
    const [currentMovieSelected, setCurrentMovieSelected] =
        useState<MovieObjectType | null>(null)
    const [loading, setLoading] = useState(true)
    const [listItems, setListItems] = useState<MovieObjectType[]>([])

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
                    opening_crawl: item.opening_crawl,
                    release_date: item.release_date,
                }
            })
            setListItems(listItems)
            setLoading(false)
        })()
    }, [])

    const itemSelectHandler = (episode_id: number) => {
        const item = listItems.filter(
            (item: MovieObjectType) => item.episode_id === episode_id
        )
        setCurrentMovieSelected(item[0])
    }

    return (
        <div className="flex flex-col">
            <SearchBar />
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
                            episodeId={currentMovieSelected.episode_id}
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
