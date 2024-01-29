import { useEffect, useState  } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook es una función que retorna algo

export const useFetchGifs = (category) => {
      
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
        
    }

    useEffect(() => {
        getImages();
    },[])

    return {
        // También puede ser así: images [], 
        images,
        isLoading
    }
}

