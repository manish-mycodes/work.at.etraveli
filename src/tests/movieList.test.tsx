import { render, screen } from '@testing-library/react'
import MovieList from '../components/movieList'

describe('MovieList', () => {
    test('renders MovieList Component until list render it will render Loading...', () => {
        render(<MovieList />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})
