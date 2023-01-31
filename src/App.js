import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Header from "./components/Header";
import Home from "./pages/Home";
import { BlogsLayout } from "./components/BlogsLayout";
import BlogList from "./pages/BlogList";
import Blog from "./components/Blog";
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
          <Route path="/blogs" element={<BlogsLayout />}>
            <Route index element={<BlogList />} />
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
