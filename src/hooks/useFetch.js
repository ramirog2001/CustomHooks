import { useEffect, useState } from "react"
export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return

        try {
            const options = {
                method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: bodyData ? JSON.stringify(bodyData) : null
            }

            const res = await fetch(url, options)
            const data = await res.json()
            setState({
                data,
                isLoading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                error
            })
        }
    }


    return {
        ...state,
        fetchData
    }
}
