import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <div>MyPortfolio</div>
        <div>
            <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
            <Link to="/projects" style={{ margin: '0 1rem' }}>Projects</Link>
            <Link to="/blog" style={{ margin: '0 1rem' }}>Blog</Link>
            <Link to="/github" style={{ margin: '0 1rem' }}>GitHub</Link>
            <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
        </div>
    </nav>
);

export default Navbar;
