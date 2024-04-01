import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/transaction/', {
        headers: {
          'token': token
        }
      });
      setTransactions(response.data.transaction);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      const token = localStorage.getItem('token');
      // Show confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this transaction!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
        reverseButtons: true
      });
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        const response = await axios.delete(`http://localhost:3000/transaction/${id}`, {
          headers: {
            'token': token
          }
        });
        if (response.status === 200) {
          // Show success message
          Swal.fire('Success', 'Transaction deleted successfully', 'success');
          // Refetch transactions
          fetchTransactions();
        } else {
          // Show error message
          Swal.fire('Error', 'Failed to delete transaction', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User cancelled, do nothing
        Swal.fire('Cancelled', 'Transaction deletion cancelled', 'info');
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
      // Show error message
      Swal.fire('Error', 'Failed to delete transaction', 'error');
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h1>Transactions</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Point</th>
            <th>Customer</th>
            <th>Date Bought</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.Book.title}</td>
              <td>{transaction.Book.point}</td>
              <td>{transaction.User.username}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteTransaction(transaction.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionPage;
