import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from "./pages/Blog.tsx";
import GitHubRepos from "./pages/GitHubRepos";
import AgileEstimating from "./components/Articles/AgileEstimating.tsx";
import WaysOfWorking from "./components/Articles/WaysOfWorking.tsx";
import AgileCeremonies from "./components/Articles/AgileCeremonies.tsx";
import UserStories from "./components/Articles/UserStories.tsx";
import JobSearchPage from "./pages/JobSearchPage.tsx";
import About from "./pages/About.tsx";

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
                        <Route path="/agile-estimating" element={<AgileEstimating />} />
                        <Route path="/wow" element={<WaysOfWorking />} />
                        <Route path="/agile-ceremonies" element={<AgileCeremonies />} />
                        <Route path="/user-stories" element={<UserStories />} />
                        <Route path="/github" element={<GitHubRepos />} />
                        <Route path="/jobs" element={<JobSearchPage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
