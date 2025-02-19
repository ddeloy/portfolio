import { useEffect, useState, useMemo } from 'react';

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
};

const GitHubRepos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    // List of repositories to fetch
    const repoNames = useMemo(() => ['analytic', 'angular-dashboard-framework', 'angular-mvp', 'change-track','d-trade', 'global-qa', 'itn-md-library', 'npm-seed','portfolio'], []); // Adjust repo names as needed

    useEffect(() => {
        const fetchRepoByName = async (repoName: string): Promise<Repo | null> => {
            try {
                const response = await fetch(`https://api.github.com/repos/ddeloy/${repoName}`);
                if (!response.ok) {
                    console.error(`Failed to fetch repo: ${repoName}`);
                    return null;
                }
                return await response.json();
            } catch (error) {
                console.error(`Error fetching repo: ${repoName}`, error);
                return null;
            }
        };

        const fetchRepos = async () => {
            try {
                setLoading(true);
                const fetchedRepos = await Promise.all(
                    repoNames.map((repoName) => fetchRepoByName(repoName))
                );
                setRepos(fetchedRepos.filter((repo): repo is Repo => repo !== null)); // Filter out null results
            } catch (error) {
                console.error('Error fetching repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [repoNames]);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (repos.length === 0) {
        return <p className="text-center">No repositories found.</p>;
    }

    return (
        <div className="p-4 space-x-2">
            <h1 className="text-2xl font-bold mb-3">Fetching several public GitHub Repos</h1>
            <ul className="list-disc space-y-2">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {repo.name}
                        </a>
                        <p className="text-sm text-gray-600">
                            {repo.description || 'No description provided'}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
