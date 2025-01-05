export interface Job {
    id: string | number; // Update to accept both types
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
    dateApplied: string;
    status: string;
    disposition: string;
    favorite: boolean;
}
