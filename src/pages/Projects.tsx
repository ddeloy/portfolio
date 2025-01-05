import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const featuredProject = {
        title: "Day Trading App",
        description: "Proprietary day trading app built with TypeScript functional programming.",
        link: "https://ddeloy.com/d-trade/",
        image: "/images/featured.png", // Optional: Replace with the image path
    };

    const projectData = [
        {
            title: "NPM Seed App",
            description: "The npm seed app is a blank project created using Angular. The style library is packaged as an npm dependency - so when you update the seed app you get the latest Library style updates, too",
            link: "https://ddeloy.com/npm-seed/",
            category: "Angular",
        },
        {
            title: "Hacker News PWA",
            description: "Progressive Web App built with Angular CLI, RxJS, and Webpack.",
            link: "https://ddeloy.com/progressive-angular-dist-4/#/newest/1",
            category: "Angular",
        },
        {
            title: "TODO App",
            description: "A simple TODO list app showcasing CRUD operations in TypeScript.",
            link: "https://example.com/todo-app",
            category: "TypeScript",
        },
        {
            title: "Functional Data Processing",
            description: "A tool to build, transform, and filter data purely functionally.",
            link: "https://ddeloy.com/data-processing/",
            category: "TypeScript",
        },
        {
            title: "Dashboard Template",
            description: "A Skeletal, modular and extensible template using JavaScript.",
            link: "https://ddeloy.com/vue/",
            category: "VUE",
        },
        {
            title: "Portfolio Site",
            description: "Authored in a modern, responsive, and dynamic format .",
            link: "https://ddeloy.com/portfolio",
            category: "REACT",
        },
        {
            title: "Knowledge Base",
            description: "A knowledge base built in PHP/MySQL with database storage.",
            link: "https://ddeloy.com/KnowledgeBuild/preview.php",
            category: "PHP/MySQL",
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
