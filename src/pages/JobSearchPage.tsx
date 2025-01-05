import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Job {
    company: string;
    contactInfo: string;
    phone: string;
    email: string;
    jobLink: string;
    role: string;
    location: string;
    jobType: string;
    mode: string;
    wage: string;
    dateApplied: Date | null;
    status: string;
    disposition: string;
    favorite: boolean;
}

const JobSearchPage: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    // Load jobs from local storage on component mount
    useEffect(() => {
        const storedJobs = localStorage.getItem("jobs");
        if (storedJobs) {
            const parsedJobs = JSON.parse(storedJobs).map((job: Job) => ({
                ...job,
                dateApplied: job.dateApplied ? new Date(job.dateApplied) : null, // Convert to Date
            }));
            setJobs(parsedJobs);
        }
    }, []);

    // Save jobs to local storage manually
    const handleSaveJobs = () => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Jobs saved to local storage!");
    };

    const handleAddJob = () => {
        const newJob: Job = {
            company: "",
            contactInfo: "",
            phone: "",
            email: "",
            jobLink: "",
            role: "Software Eng",
            location: "",
            jobType: "Full-time",
            mode: "Onsite",
            wage: "",
            dateApplied: new Date(),
            status: "Res Sent",
            disposition: "",
            favorite: false,
        };
        setJobs((prevJobs) => [...prevJobs, newJob]);
    };

    const handleClearAll = () => {
        setJobs([]);
        localStorage.removeItem("jobs"); // Clear local storage
    };

    const handleDeleteJob = (index: number) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
    };

    const dropdownOptions = {
        role: ["Software Eng", "QA", "PM", "Other"],
        jobType: ["Full-time", "Part-time", "Contract", "Other"],
        mode: ["Onsite", "Hybrid", "Remote", "Other"],
        status: ["Res Sent", "No Reply", "Waiting", "Not Interested", "Interviewed", "Other"],
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Job Search</h1>
            <div className="mb-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleAddJob}
                >
                    Add Job
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleSaveJobs}
                >
                    Save Jobs
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleClearAll}
                >
                    Clear All
                </button>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 border">Company</th>
                    <th className="p-2 border">Contact Info</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Job Link</th>
                    <th className="p-2 border">Role</th>
                    <th className="p-2 border">Location</th>
                    <th className="p-2 border">Job Type</th>
                    <th className="p-2 border">Mode</th>
                    <th className="p-2 border">Wage</th>
                    <th className="p-2 border">Date Applied</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Disposition</th>
                    <th className="p-2 border">Fave</th>
                    <th className="p-2 border">Actions</th>
                </tr>
                </thead>
                <tbody>
                {jobs.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.company}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].company = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.contactInfo}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].contactInfo = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.phone}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].phone = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.email}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].email = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                            {job.email && (
                                <a
                                    href={`mailto:${job.email}`}
                                    className="block text-blue-500 hover:underline mt-1"
                                >
                                    {job.email}
                                </a>
                            )}
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.jobLink}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].jobLink = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                            {job.jobLink && (
                                <a
                                    href={job.jobLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-blue-500 hover:underline mt-1"
                                >
                                    {job.jobLink}
                                </a>
                            )}
                        </td>
                        <td className="p-2 border">
                            <select
                                value={job.role}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].role = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            >
                                {dropdownOptions.role.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.location}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].location = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <select
                                value={job.jobType}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].jobType = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            >
                                {dropdownOptions.jobType.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="p-2 border">
                            <select
                                value={job.mode}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].mode = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            >
                                {dropdownOptions.mode.map((mode) => (
                                    <option key={mode} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.wage}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].wage = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <DatePicker
                                selected={job.dateApplied}
                                onChange={(date) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].dateApplied = date;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                                dateFormat="MM/dd/yyyy"
                            />
                        </td>
                        <td className="p-2 border">
                            <select
                                value={job.status}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].status = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            >
                                {dropdownOptions.status.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="p-2 border">
                            <input
                                type="text"
                                value={job.disposition}
                                onChange={(e) => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].disposition = e.target.value;
                                    setJobs(updatedJobs);
                                }}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="p-2 border">
                            <input
                                type="checkbox"
                                checked={job.favorite}
                                onChange={() => {
                                    const updatedJobs = [...jobs];
                                    updatedJobs[index].favorite = !job.favorite;
                                    setJobs(updatedJobs);
                                }}
                            />
                        </td>
                        <td className="p-2 border">
                            <button
                                className="text-red-500 hover:underline"
                                onClick={() => handleDeleteJob(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobSearchPage;
