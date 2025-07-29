import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Post from './Post';
import Home from './Home';
import './App.css';
import './custom-styles.css';

const posts = [
  'anothers-thoughts',
  'aristotle-gold-oil',
  'gold-trail',
  'oil-gold-and-lclospr',
  'war-and-commodity-encumbrance',
];

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">My Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {posts.map((post) => (
                <Nav.Link as={Link} to={`/posts/${post}`} key={post}>
                  {post.replace(/-/g, ' ')}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:slug" element={<Post />} />
          </Routes>
        </main>
      </Container>
    </Router>
  );
}

export default App;