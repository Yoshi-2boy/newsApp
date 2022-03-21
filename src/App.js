import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';

class NotFound extends Component {
  render() {
    return <h2>404 NOT FOUND</h2>;
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/newsApp" element={<Home />} />
          <Route path="/newsApp/news" element={<News />} />
          <Route path="/newsApp/about" element={<About />} />
          <Route element={<NotFound />} />{/* ←pathを指定しない */}
        </Routes>
      </BrowserRouter>
    );
  }
}