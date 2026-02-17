import axios from "axios"
export class AuthService {

    async createAccount({ username, password }) {
        try {
            const response = await axios.post("http://localhost:8080/auth/signup",
                {
                    username,
                    password
                }
            )
            return response.data
        }
        catch (error) {
            if (!error.response) {
                throw new Error("Server is not running")
            }
            throw new Error(error.response.data.error)
        }
    }
    async login({ username, password }) {
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                { username, password }
            )
            return response.data
        } catch (error) {
            if (!error.response) {
                throw new Error("Server is not running")
            }
            throw new Error(error.response.data.error)
        }
    }

}
const authService = new AuthService();
export default authService