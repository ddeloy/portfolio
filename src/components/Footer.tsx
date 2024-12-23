const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
            <p>© 2024 My Portfolio. All rights reserved.</p>
            <p>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    GitHub
                </a>{" "}
                |{" "}
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
