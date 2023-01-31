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
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default App;
