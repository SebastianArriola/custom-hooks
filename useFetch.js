import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [data, setdata] = useState({ data: null, loading: true, error: false });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setdata({ data: null, loading: true });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {

                    setdata({

                        data: data,
                        loading: false,
                        error: false

                    })

                }

            })

    }, [url])

    return data;

}

