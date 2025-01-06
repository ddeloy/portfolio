import React from 'react';
import lifecycleImage from './deliverables.png';
import image2 from './image-2.png';
import image1 from './image-1.png';

const AgileCeremonies: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Agile Ceremonies</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Ceremony Overview and Meeting Structure</h2>
                <p className="text-gray-600 mb-4">
                    As well as the descriptions below, the following document also breaks down the planning, stand-up, review, and retrospective meetings across all projects:{" "}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1SaEvFVEJD2xGRav6naKOOgi0JBdRp1Fh2eLvdVtQB6A/edit#gid=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Sprints/ Scrum - Terms of reference
                    </a>
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Daily Stand Up</h2>
                <p className="text-gray-600 mb-4">
                    The purpose of the daily stand-up is to provide concise and clear updates on WI in the sprint.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>What was worked on the prior day</li>
                    <li>What you are working on today</li>
                    <li>Any blockers you are facing</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    Updates should be prepared before the call to ensure clarity and progress.
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Processes, Tooling, and Artefacts Supporting Delivery</h2>
                <p className="text-gray-600 mb-4">
                    <a
                        href="https://docs.google.com/drawings/d/1x0Gi8T321o-f0kYKHQqaxH68p9CvNE4rtSJr0YXcb_M/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Audit.ai Deliverable Lifecycle Workflow
                    </a>
                </p>
                <img
                    src={lifecycleImage}
                    alt="Audit.ai Deliverable Lifecycle Workflow"
                    className="featured-img my-4"
                />
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Functional Requirements Document</h3>
                <p className="text-gray-600 mb-4">
                    Used to iteratively define requirements for the Audit.ai product.
                </p>
                <img
                    src={image2}
                    alt="Documentation Standards"
                    className="featured-img my-4"
                />
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Acceptance Criteria</h3>
                <p className="text-gray-600 mb-4">
                    Requirements follow the "Given" - "When" - "Then" format:
                </p>
                <img
                    src={image1}
                    alt="Acceptance Criteria Format"
                    className="featured-img my-4"
                />
            </section>
        </div>
    );
};

export default AgileCeremonies;
