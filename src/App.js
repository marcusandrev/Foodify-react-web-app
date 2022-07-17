import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

//pages
import Landing from './pages/landing';
import Login from './pages/login';
import Gallery from './pages/gallery';
import BreadcrumbsOne from './pages/breadcrumbsOne';
import BreadcrumbsTwo from './pages/breadcrumbsTwo';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/breadcrumbsone' element={<BreadcrumbsOne />} />
            <Route path='/breadcrumbstwo' element={<BreadcrumbsTwo />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
