export interface MovieObjectType {
    release_date: string
    director: string
    episode_id: number
    opening_crawl: string
    producer: string
    title: string
    episode_id_numeric: string
    episode_id_roman: string
}

export interface MovieContextType {
    listItems: MovieObjectType[]
    mainListItems: MovieObjectType[]
    loading: boolean
    currentMovieSelected: MovieObjectType | null
    itemSelectHandler: (id: number) => void
    searchInputHandler: (text: string) => void
    sortByHandler: (text: string) => void
    sortByOpen: boolean
    sortByCloseHandler: () => void
    sortByOpenHandler: () => void
}
