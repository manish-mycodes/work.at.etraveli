'use client'
import { useState } from 'react'
import SortOptionsList from './sortOptionsList'

export default function SearchBar({
    searchInputHandler,
    sortByHandler,
}: {
    searchInputHandler: (text: string) => void
    sortByHandler: (text: string) => void
}) {
    const [sortByOpen, setSortByOpen] = useState(false)
    const sortByCloseHandler = () => setSortByOpen(false)
    const [searchText, setSearchText] = useState('')
    const onChangeHandler = (e: any) => {
        setSearchText(e.target.value)
        searchInputHandler(e.target.value)
    }

    return (
        <div className="flex gap-4  h-16 border  bg-gray-100 items-center px-4 border-b border-gray-200">
            <div className="relative">
                <button
                    className={`border border-gray-300  p-2 rounded-md w-20 bg-gray-50 text-xs font-bold ${sortByOpen ? 'text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setSortByOpen((prev) => !prev)}
                >
                    Sort by...
                </button>
                {sortByOpen && (
                    <SortOptionsList
                        sortByCloseHandler={sortByCloseHandler}
                        sortByHandler={sortByHandler}
                    />
                )}
            </div>
            <div className="flex flex-1 ">
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        onChange={onChangeHandler}
                        data-testid="search-input"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 text-sm"
                    />
                    <div className="absolute bottom-[6px] inset-y-0 left-0 flex items-center pl-3 pt-1 ">
                        <i className="fa fa-search text-gray-500 "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
