import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from "./pages/Blog.tsx";
import GitHubRepos from "./pages/GitHubRepos";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/github" element={<GitHubRepos />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
