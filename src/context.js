import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("harry potter");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    try {
                        const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                        // Validate required fields
                        if (!key || !title) {
                            return null;
                        }

                        return {
                            id: key,
                            author: author_name || ["Unknown Author"],
                            cover_id: cover_i || 0,
                            edition_count: edition_count || 0,
                            first_publish_year: first_publish_year || "Unknown",
                            title: title
                        }
                    } catch (err) {
                        console.error('Error processing book:', err);
                        return null;
                    }
                }).filter(book => book !== null); // Remove any null entries

                setBooks(newBooks);
                setResultTitle(newBooks.length > 0 ? "Your Search Result જ⁀➴" : "No Search Result Found!");
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
        } catch(error){
            console.error('Fetch error:', error);
            setBooks([]);
            setResultTitle("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};