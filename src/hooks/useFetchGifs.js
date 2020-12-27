import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(gifs => setState({
            images: gifs,
            loading: false
        }));
        
    }, [category])

    return state;
}
