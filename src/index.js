import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';
import Search from './pages/Search/Search';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FavoritesProvider>
      <BrowserRouter basename="/paw-folio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />}>     
            <Route path = "book" element = {<BookList />} />
            <Route path = "book/:id" element = {<BookDetails />} />
          </Route>
          <Route path = "about" element = {<About />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  </AppProvider>
);

