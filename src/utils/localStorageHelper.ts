// Utility functions for localStorage management

export function saveToLocalStorage<T>(key: string, data: T): void {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
    } catch (error) {
        console.error(`Error saving data to localStorage: ${error}`);
    }
}

export function getFromLocalStorage<T>(key: string): T | null {
    try {
        const jsonData = localStorage.getItem(key);
        return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
        console.error(`Error retrieving data from localStorage: ${error}`);
        return null;
    }
}

export function clearLocalStorage(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error clearing data from localStorage: ${error}`);
    }
}
