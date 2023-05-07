import axios from "axios"

const ArticleAPI = {
    Articles: async (offset, tag) => {
        try {
            let res
            if (tag) {
                res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/articles?tag=${tag}&limit=10&offset=${offset}`
                )
            } else {
                res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/articles?limit=10&offset=${offset}`
                )
            }
            return res
        } catch (error) {
            return error.response
        }
    },
    Article: async (slug) => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${slug}`
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    getTags: async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/tags`
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    getFavoriteArticles: async (username) => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/articles?favorited=${username}`
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    addFavoriteArticle: async (slug, token) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${slug}/favorite`,
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            )
            return res
        } catch (error) {
            return error.response
        }
    },
    removeFavoriteArticle: async (slug, token) => {
        try {
            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${slug}/favorite`,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            )
            return res
        } catch (error) {
            return error.response
        }
    },
}

export default ArticleAPI
