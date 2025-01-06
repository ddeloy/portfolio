import React from 'react';
import bucketsImage from './image-buckets.png'; // Importing the image directly

const AgileEstimating: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Agile Estimating</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Information Resources</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Personal experience</li>
                    <li>Various online resources:
                        <ul className="list-disc list-inside ml-6">
                            <li><a href="https://www.atlassian.com/agile/project-management/estimation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">What are story points and how do you estimate them - Atlassian</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Fibonacci_scale_(agile)" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Fibonacci scale (agile) and other estimation scales</a></li>
                            <li><a href="https://www.berteig.com/how-to-apply-agile/9-agile-estimation-techniques/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">9 AGILE ESTIMATION TECHNIQUES</a></li>
                            <li><a href="https://www.udemy.com/course/agile-fundamentals-scrum-kanban/#instructor-1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Agile Fundamentals: Including Scrum and Kanban - 2019</a></li>
                            <li><a href="https://www.udemy.com/course/agile-scrum-mastery/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Agile Scrum Mastery: Full Project Simulation + Certification</a></li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Story Point Range</h3>
                <p className="text-gray-600">Common range: 1, 2, 3, 5, 8, 13, 21.</p>
                <img
                    src={bucketsImage} // Use imported image variable
                    alt="Story Point Buckets"
                    className="featured-img my-4"
                />
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Atlassian Online Guide</h3>
                <p className="text-gray-600 mb-4">
                    Estimation is essential for planning and requires collaboration between the product owner and team. Read more:
                </p>
                <a
                    href="https://www.atlassian.com/agile/project-management/estimation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Complete Article - Atlassian Guide
                </a>
            </section>
        </div>
    );
};

export default AgileEstimating;
