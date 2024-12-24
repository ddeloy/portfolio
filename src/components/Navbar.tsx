import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <div>MyPortfolio</div>
        <div>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                Home
            </NavLink>
            <NavLink
                to="/projects"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                Projects
            </NavLink>
            <NavLink
                to="/blog"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                Blog
            </NavLink>
            <NavLink
                to="/agile-estimating"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                Agile Estimating
            </NavLink>
            <NavLink
                to="/github"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                GitHub
            </NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) => ({
                    margin: '0 1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                })}
            >
                Contact
            </NavLink>
        </div>
    </nav>
);

export default Navbar;
