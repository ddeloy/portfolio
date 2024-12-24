const Home = () => {
    return (
        <div className="bg-gray-100 text-center p-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">
                Welcome to My Portfolio
            </h1>
            <p className="text-lg text-gray-700">
                I'm a software engineer specializing in building amazing web applications.
            </p>

            <div className="mt-8 text-left mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
                <p className="text-lg text-gray-700 mb-6">
                    20+ years of web and web application development experience and a very diverse, unique set of skills.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frontend Development</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Focus on the user interface and typically work with JavaScript, TypeScript, Angular, REACT, Vue, CSS/SAAS.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project and Program Management</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Oversee enterprise application development and facilitate collaboration across remote, geographically distributed teams: Azure DevOps (ADO); Agile methodologies (including Scaled Agile—SAFe®).
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Release Management / QA</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Lead automated and manual integration testing – certify deployment of AI/machine learning platform releases across various clouds (AWS, Azure, GCP).
                </p>
            </div>
        </div>
    );
};

export default Home;
