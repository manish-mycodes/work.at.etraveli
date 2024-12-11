import { MovieContextProvider } from './components/movieContextProvider'
import MovieList from './components/movieList'

function App() {
    return (
        <MovieContextProvider>
            <MovieList />
        </MovieContextProvider>
    )
}

export default App
