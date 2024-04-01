import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../component/BookCard';

function BookPage() {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/book?page=${page}&pageSize=10`, {
                    headers: {
                        token: localStorage.getItem('token')
                    }
                });

                setBooks(prevBooks => [...prevBooks, ...response.data.rows]);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
            setLoading(false);
        };

        fetchBooks();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default BookPage;
