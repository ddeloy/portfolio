interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, category }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    View Project
                </a>
            </div>
            <div className="bg-gray-100 px-4 py-2 text-xs text-gray-700 font-medium">{category}</div>
        </div>
    );
};

export default ProjectCard;
