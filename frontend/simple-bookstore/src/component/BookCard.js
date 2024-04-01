import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

function BookCard({ book }) {
  const handleBuyClick = async () => {
    try {
      const isConfirmed = await Swal.fire({
        title: 'Confirm Purchase',
        text: `Are you sure you want to buy "${book.title}"?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Buy',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });

      if (isConfirmed.isConfirmed) {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://localhost:3000/transaction/',
          { book_id: book.id },
          { headers: { token } }
        );
        console.log('Transaction created:', response.data);
        // Show success pop-up
        await Swal.fire({
          title: 'Success',
          text: 'Transaction completed successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      // Show error pop-up
      await Swal.fire({
        title: 'Error',
        text: `Failed to create transaction. `+error.response.data.message ? error.response.data.message : "",
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={book.cover_image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Writer:</strong> {book.writer}<br />
          <strong>Point:</strong> {book.point}<br />
          <strong>Tags:</strong> {book.tag.join(', ')}
        </Card.Text>
        <Button variant="dark" onClick={handleBuyClick}>Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
