import axios from "axios"

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
    }
}

export default UserAPI
