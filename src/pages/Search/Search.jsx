import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Search = () => {

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Search;