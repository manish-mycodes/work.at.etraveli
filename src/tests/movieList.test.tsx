import { render, screen } from '@testing-library/react'
import MovieList from '../components/movieList'
import { MovieContextProvider } from '../components/movieContextProvider'

describe('MovieList', () => {
    test('renders MovieList Component until list render, it will render Loading...', () => {
        render(
            <MovieContextProvider>
                <MovieList />
            </MovieContextProvider>
        )
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})
