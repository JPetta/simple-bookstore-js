import React from 'react';
import BookPage from '../page/BookPage';
import TransactionPage from '../page/TransactionPage';

function MainView({ currentPage }) {
  return (
    <div>
      {currentPage === 'BookPage' ? <BookPage /> : <TransactionPage />}
    </div>
  );
}

export default MainView;
