import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const articles = [
        { title: 'Agile Estimating', path: '/agile-estimating' },
        { title: 'Ways of Working', path: '/wow' },
        { title: 'Agile Ceremonies', path: '/agile-ceremonies' },
        { title: 'User Stories', path: '/user-stories' },
    ];

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            <div>MyPortfolio</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
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

                {/* Blog with Dropdown */}
                <div style={{ position: 'relative', margin: '0 1rem' }}>
                    <button
                        onClick={toggleDropdown}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: isDropdownOpen ? 'bold' : 'normal',
                        }}
                    >
                        Agile Articles ▼
                    </button>
                    {isDropdownOpen && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                                zIndex: 1000,
                                padding: '0.5rem',
                            }}
                        >
                            {articles.map((article) => (
                                <NavLink
                                    key={article.path}
                                    to={article.path}
                                    style={{
                                        display: 'block',
                                        padding: '0.5rem 1rem',
                                        textDecoration: 'none',
                                        color: '#000',
                                    }}
                                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                                >
                                    {article.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>

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
};

export default Navbar;
