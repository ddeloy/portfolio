const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
            <p>© 2024  Doug's Portfolio. All rights reserved.</p>
            <p>
                <a href="https://github.com/ddeloy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    GitHub
                </a>{" "}
                |{" "}
                <a href="https://www.linkedin.com/in/doug-deloy-64050a53/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
