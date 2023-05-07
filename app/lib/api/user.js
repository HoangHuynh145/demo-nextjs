import axios from "axios"
import { headers } from "next/dist/client/components/headers"

const UserAPI = {
    login: async (loginInfo) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
                {
                    user: {
                        email: loginInfo.email,
                        password: loginInfo.password
                    }
                }
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    register: async (registerInfo) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
                {
                    user: {
                        username: registerInfo.username,
                        email: registerInfo.email,
                        password: registerInfo.password
                    }
                }
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    getProfile: async (username) => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/profiles/${username}`,
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    updateProfile: async (user, token) => {
        try {
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
                { user },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            return res
        } catch (error) {
            return error.response
        }
    }
}

export default UserAPI
