import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect } from 'react';
import Post from './Post';
import Home from './Home';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import './App.css';
import './custom-styles.css';
import './styles/theme.css';

import { postSlugs as posts } from './posts';

const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

const AppContent = () => {
  const { theme } = useTheme();
  
  const getEffectiveTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };
  
  const effectiveTheme = getEffectiveTheme();
  
  return (
    <div className={`theme-${effectiveTheme}`}>
      <Router>
        <Navbar 
          bg={effectiveTheme} 
          variant={effectiveTheme} 
          className="shadow-sm"
          data-bs-theme={effectiveTheme}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">My Blog</Navbar.Brand>
            <Nav className="ms-auto">
              <ThemeToggler />
            </Nav>
          </Container>
        </Navbar>
        <Container className="py-4 py-md-5">
          <RedirectHandler />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:slug" element={<Post />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;