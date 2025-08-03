import React from 'react';
import { books } from './books';

function BookDetails() {
    return (
        <div>
            <h1>Book Details</h1>
            {books.map((book) => (
                <div key={book.id}>
                    <h3>{book.bname}</h3>
                    <p>{book.price}</p>
                </div>
            ))}
        </div>
    );
}

export default BookDetails;