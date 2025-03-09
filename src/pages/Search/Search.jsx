import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Search = () => {
  useEffect(() => {
    document.title = "PawFolio";
  }, []);

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Search;