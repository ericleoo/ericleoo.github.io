import { useTheme } from './ThemeContext';
import { NavDropdown } from 'react-bootstrap';
import { Sun, Moon, Circle } from 'react-feather';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <NavDropdown title={theme === 'light' ? <Sun /> : theme === 'dark' ? <Moon /> : <Circle />} id="basic-nav-dropdown" className="theme-toggler">
      <NavDropdown.Item onClick={() => setTheme('light')}><Sun className="me-2" /> Light</NavDropdown.Item>
      <NavDropdown.Item onClick={() => setTheme('dark')}><Moon className="me-2" /> Dark</NavDropdown.Item>
      <NavDropdown.Item onClick={() => setTheme('system')}><Circle className="me-2" /> System</NavDropdown.Item>
    </NavDropdown>
  );
};

export default ThemeToggler;
