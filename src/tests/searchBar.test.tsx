import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../components/searchBar'
import { MovieContextProvider } from '../components/movieContextProvider'

describe('SearchBar', () => {
    test('calls searchInputHandler fn on input change', () => {
        const mockSearchHandler = jest.fn()

        render(
            <MovieContextProvider>
                <SearchBar />
            </MovieContextProvider>
        )
        const searchInput = screen.getByTestId('search-input')
        fireEvent.change(searchInput, { target: { value: 'The' } })

        expect(mockSearchHandler).toHaveBeenCalledTimes(1)
        expect(mockSearchHandler).toHaveBeenCalledWith('The')

        fireEvent.change(searchInput, { target: { value: 'A New' } })

        expect(mockSearchHandler).toHaveBeenCalledTimes(2)
        expect(mockSearchHandler).toHaveBeenCalledWith('A New')
    })
})
