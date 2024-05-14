import apiService from "./apiServices";
  export async function LoginApi(userData) {
    try {
        const data = await apiService.callApi("user/login", "post", userData);
        return data;
    } catch (error) {
        throw error;
    }
}
