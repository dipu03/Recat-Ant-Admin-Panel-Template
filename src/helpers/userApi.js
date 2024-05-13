import apiService from "./apiServices";

export async function GetUser() {
    try {
        const data = await apiService.callApi("endpoint", "get");
        return data;
    } catch (error) {
        throw error;
    }
}

export async function PostUser(userData) {
    try {
        const data = await apiService.callApi("endpoint", "post", userData);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function UpdateUser(userId, updatedUserData) {
    try {
        const data = await apiService.callApi(`endpoint/${userId}`, "put", updatedUserData);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function DeleteUser(userId) {
    try {
        const data = await apiService.callApi(`endpoint/${userId}`, "delete");
        return data;
    } catch (error) {
        throw error;
    }
}
