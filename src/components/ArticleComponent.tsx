import { useNavigate } from 'react-router-dom';

const ArticleDropdown: React.FC = () => {
    const navigate = useNavigate();
    const articles = [
        { title: 'Agile Estimating', path: '/agile-estimating' },
        { title: 'Ways of Working', path: '/wow' },
        { title: 'Agile Ceremonies', path: '/agile-ceremonies' },
        { title: 'User Stories', path: '/user-stories' },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(event.target.value);
    };

    return (
        <div>
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>
                    Select an article
                </option>
                {articles.map((article) => (
                    <option key={article.path} value={article.path}>
                        {article.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ArticleDropdown;
