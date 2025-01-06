import React from 'react';
import bucketsImage from './image-buckets.png'; // Importing the image directly

const AgileEstimating: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Agile Estimating</h1>

            {/* Information Resources */}
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

            {/* What is Estimating */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">What is Estimating?</h2>
                <p className="text-gray-600 mb-4">Estimating involves roughly calibrating how long it will take to complete an issue or user story.</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Estimation is not a calculation—it’s an "educated guess".</li>
                    <li>Uses available information to come up with the best guess from start to completion.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">An Educated Guess Based On:</h3>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Elicited information</li>
                    <li>Past experience with similar issues</li>
                    <li>Available documentation</li>
                </ul>
            </section>

            {/* Relative Estimating */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Relative Estimating</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Compares issues relative to others, not based on absolute time.</li>
                    <li>Sizes tasks based on relativity to already estimated tasks.</li>
                    <li>Groups similar items into buckets rather than detailing each step.</li>
                </ul>
            </section>

            {/* Why Estimate */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Why Estimate?</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Provides estimated duration to plan accordingly.</li>
                    <li>Encourages thorough understanding of requirements and acceptance criteria.</li>
                    <li>Highlights complex or high-risk tasks.</li>
                    <li>Helps measure team velocity.</li>
                </ul>
            </section>

            {/* Fibonacci Sequence */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Fibonacci Sequence</h2>
                <p className="text-gray-600 mb-4">
                    Abstract values to represent the size of a user story. Each value is the sum of the previous two:
                </p>
                <p className="text-gray-800 font-semibold">0, 1, 2, 3, 5, 8, 13, 21</p>
                <p className="text-gray-600 mb-4">Alternative sequences may include: 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100.</p>
            </section>

            {/* Story Points */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Story Points</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Abstract values represent the relative size of tasks.</li>
                    <li>Each story is assigned points relative to other project stories.</li>
                    <li>Break down larger tasks into smaller ones.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Group Into Buckets:</h3>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Pull together user stories of approximately the same size.</li>
                    <li>Smallest effort → Largest effort.</li>
                    <li>The use of numbers is simply a mechanism to name the buckets.</li>
                </ul>
                <img
                    src={bucketsImage} // Use imported image variable
                    alt="Story Point Buckets"
                    className="featured-img my-4"
                />
            </section>

            {/* Atlassian Online Guide */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Atlassian Online Guide</h2>
                <p className="text-gray-600 mb-4">
                    Estimation is essential for planning and requires collaboration between the product owner and team.
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
