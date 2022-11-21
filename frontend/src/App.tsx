import { SearchProvider } from './contexts/SearchContext';
import { SearchPage } from './pages/SearchPage';
import './styles/global.css';

export const App = () => {
  return (
    <SearchProvider>
      <SearchPage />
    </SearchProvider>
  )
}