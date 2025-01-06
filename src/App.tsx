import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import GitHubRepos from "./pages/GitHubRepos";
import JobSearchPage from "./pages/JobSearchPage";
import About from "./pages/About";

// Lazy-loaded articles
const AgileEstimating = React.lazy(() => import("./components/Articles/AgileEstimating"));
const WaysOfWorking = React.lazy(() => import("./components/Articles/WaysOfWorking"));
const AgileCeremonies = React.lazy(() => import("./components/Articles/AgileCeremonies"));
const UserStories = React.lazy(() => import("./components/Articles/UserStories"));

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
                        <Route path="/jobs" element={<JobSearchPage />} />
                        <Route path="/about" element={<About />} />

                        {/* Lazy-loaded article routes */}
                        <Route
                            path="/articles/agile-estimating"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <AgileEstimating />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/articles/wow"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <WaysOfWorking />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/articles/agile-ceremonies"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <AgileCeremonies />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/articles/user-stories"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <UserStories />
                                </Suspense>
                            }
                        />

                        {/* Fallback Route */}
                        <Route path="*" element={<div>404 - Page Not Found</div>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
