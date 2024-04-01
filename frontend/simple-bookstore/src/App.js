import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import LoginView from './view/LoginView';
import MainView from './view/MainView';

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('BookPage');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>Simple Bookstore</Navbar.Brand>
                <Button variant="dark" style={{ marginRight: "5px" }} onClick={() => handlePageChange('BookPage')}>Books</Button>
                <Button variant="dark" style={{ marginRight: "5px" }} onClick={() => handlePageChange('TransactionPage')}>Transaction</Button>
                <Button variant="dark" onClick={handleLogout}>Logout</Button>
              </Container>
            </Navbar>
            <MainView currentPage={currentPage} />
          </>
        ) : (
          <LoginView setLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
