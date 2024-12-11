'use client'
import { useContext } from 'react'
import ListItems from '../components/listItems'
import SearchBar from '../components/searchBar'
import { MovieContextType } from '../types'
import Description from '../components/description'
import MovieContext from './movieContextProvider'

export default function MovieList() {
    const { loading, listItems, itemSelectHandler, currentMovieSelected } =
        useContext(MovieContext) as MovieContextType

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
