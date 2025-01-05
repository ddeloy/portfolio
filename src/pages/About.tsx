const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About This Portfolio</h1>
            <p className="text-gray-600 mb-6">
                This portfolio app is designed to showcase my technical skills, projects, and authored content in a modern, responsive, and dynamic format. It is built using cutting-edge web technologies and adheres to best practices in web development.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Core App Structure</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
                <li><strong>Framework & Tooling:</strong> Scaffolded with Vite for fast builds and efficient development.</li>
                <li><strong>Technologies Used:</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>React</strong> + <strong>TypeScript:</strong> Provides a robust and scalable structure for building dynamic components.</li>
                        <li><strong>Tailwind CSS:</strong> Ensures clean, responsive styling with utility-first design principles.</li>
                    </ul>
                </li>
                <li><strong>Deployment:</strong> Leveraging Vite’s optimized production builds for seamless deployment.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
                <li>
                    <strong>Projects:</strong>
                    A section dedicated to showcasing links to my past projects and apps. This is where I highlight my work, including live demos and repository links, giving visitors an insight into my technical capabilities.
                </li>
                <li>
                    <strong>Agile Articles ▼:</strong>
                    A dropdown menu that features project management articles I’ve authored, presented as markdown files. These articles cover best practices, methodologies, and lessons learned from my experiences.
                </li>
                <li>
                    <strong>GitHub Integration:</strong>
                    Links to and dynamically fetches a sampling of my public repositories using the GitHub API. This demonstrates my proficiency in code sharing and collaboration.
                </li>
                <li>
                    <strong>Job Search:</strong>
                    A section designed to help manage job search efforts with basic CRUD functionality. This page showcases key development features such as dropdown menus and dynamic interactions, all locally stored for quick access.
                </li>
            </ul>
        </div>
    );
};

export default About;
