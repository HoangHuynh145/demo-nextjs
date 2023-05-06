import axios from "axios"

const ArticleAPI = {
    Articles: async () => {
        try {
            console.log('before API call')
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/articles?limit=10&offset=0`
            )
            return res
        } catch (error) {
            return error.response
        }
    }
}

export default ArticleAPI
