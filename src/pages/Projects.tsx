import ProjectCard from "../components/ProjectCard";
import featuredImage from "./featured.png"; // Import the featured image

const Projects = () => {
    const featuredProject = {
        title: "Day Trading App",
        description: "Proprietary day trading app built with TypeScript functional programming",
        link: "https://ddeloy.com/d-trade/",
        image: featuredImage, // Use the imported image
    };

    const projectData = [
        {
            title: "NPM Seed App",
            description: "The npm seed app is a blank project created using Angular. The style library is packaged as an npm dependency - so when you update the seed app you get the latest Library style updates, too",
            link: "https://ddeloy.com/npm-seed/",
            category: "Angular",
        },
        {
            title: "Angular MVP",
            description: "Angular 19 rewrite of TypeScript day trading app",
            link: "https://ddeloy.com/angular-mvp/",
            category: "Angular",
        },
        {
            title: "SPA Framework",
            description: "AngularJS Dashboard",
            link: "https://ddeloy.com/angular-spa-framework",
            category: "Angular",
        },
        {
            title: "Hacker News PWA",
            description: "Progressive Web App built with Angular CLI, RxJS, and Webpack (from desktop - Safari works best)",
            link: "https://ddeloy.com/progressive-angular-dist-4/#/newest/1",
            category: "Angular",
        },
        {
            title: "Change Track",
            description: "Change Order Management",
            link: "https://ddeloy.com/change-track",
            category: "REACT",
        },
        {
            title: "TODO App",
            description: "Simple TODO list showcasing CRUD operations in TypeScript",
            link: "https://ddeloy.com/ts-todos/",
            category: "TypeScript",
        },
        {
            title: "Functional Data Processing",
            description: "A tool to build, transform, and filter data purely functionally",
            link: "https://ddeloy.com/data-processing/",
            category: "TypeScript",
        },
        {
            title: "Simple MFE Dashboard",
            description: "Simple Micro-Frontend (MFE) architecture example using Webpack Module Federation",
            link: "https://mfe-dashboard-murex.vercel.app/",
            category: "Microservices",
        },
        {
            title: "Trading Dashboard - Standalone MFE" ,
            description: "A self-contained stock market analysis tool, fetching real-time data from Alpha Vantage API.",
            link: "https://mfe-dashboard-5puy.vercel.app/",
            category: "Microservices",
        },
        {
            title: "Dashboard Template",
            description: "A Skeletal, modular and extensible template using JavaScript",
            link: "https://ddeloy.com/vue/",
            category: "VUE",
        },
        {
            title: "Knowledge Base",
            description: "A knowledge base built in PHP/MySQL with database storage",
            link: "https://ddeloy.com/KnowledgeBuild/preview.php",
            category: "PHP/MySQL",
        },
        {
            title: "d3.js custom plot",
            description: "Visualization of domestic energy consumption",
            link: "https://ddeloy.com/energy-usage/",
            category: "Data Visualization",
        },
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Work Samples and Links</h1>

            {/* Featured Project Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-3">Featured Project</h2>
                <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
                    {/* Featured Image */}
                    {featuredProject.image && (
                        <div className="md:w-1/3">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="featured-img"
                            />
                        </div>
                    )}
                    {/* Featured Details */}
                    <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold mb-2">{featuredProject.title}</h3>
                        <p className="text-gray-600 mb-4">{featuredProject.description}</p>
                        <a
                            href={featuredProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>

            {/* Other Projects Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        category={project.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
