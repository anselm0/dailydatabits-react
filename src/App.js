import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Header from "./components/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
    <Container>
    <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
