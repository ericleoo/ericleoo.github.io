import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Post from './Post';
import Home from './Home';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import './App.css';
import './custom-styles.css';
import './styles/theme.css';

import { postSlugs as posts } from './posts';

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
          expand="lg" 
          className="shadow-sm"
          data-bs-theme={effectiveTheme}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">My Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {posts.map((post) => (
                  <Nav.Link as={Link} to={`/posts/${post}`} key={post}>
                    {post.replace(/-/g, ' ')}
                  </Nav.Link>
                ))}
                <ThemeToggler />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="py-4 py-md-5">
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