import { MovieDatabaseProvider } from './contexts/MovieDatabaseContext';
import { SearchProvider } from './contexts/SearchContext';
import { SearchPage } from './pages/SearchPage';
import './styles/global.css';

export const App = () => {
  return (
    <SearchProvider>
      <MovieDatabaseProvider>
        <SearchPage />
      </MovieDatabaseProvider>
    </SearchProvider>
  )
}