import { apiAuth } from "./api/authRequest";
import { API_PATH } from "./api/constant";
import { ILogin, ILoginResponse } from "../types/auth"; // Ensure both interfaces are imported

export function signupRequest(params: ILogin) {
    return apiAuth.post<ILoginResponse>(API_PATH.SIGNUP, params);
}

// New loginRequest function for user login
export async function loginRequest(email: string, password: string) {
    const response = await apiAuth.get<ILoginResponse>(`${API_PATH.LOGIN}?email=${email}`);
    const users = response.data;
    const user = users[0]
    // console.log(user);
    if (user && user.password === password) {
        return { success: true, user };
    } else {
        throw new Error(`${user}`);
    }

}
