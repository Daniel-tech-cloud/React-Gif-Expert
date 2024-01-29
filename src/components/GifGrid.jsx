import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
        <h3> { category }</h3>

        {
          isLoading && (<h2> cargando... </h2>)
          
        }

        <div className="card-grid">
        {
            images.map((images) => (
              <GifItem key={ images.id } { ...images} />
            ))
        }
        </div>
    </>
  )
}

export default GifGrid
