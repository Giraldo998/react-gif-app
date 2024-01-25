import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

   const [images, setImages] = useState([]);
	// estado que indica que estoy cargando imagenes por primera vez en mi componente 
   const [isLoading, setIsLoading] = useState(true)

	const getImages = async()=>{
		const newImages = await getGifs(category);
		setImages(newImages)
		//xcambiamos de estado cuando ya se han cargado
      setIsLoading(false)
	}
   /*
 	 * useEffect es un hook de react que sirve para disparar efectos secundario (algun proceso que se quiere ejecutar cuando algo suceda)
 	 * useEffect hace un callback que en este caso el primer valor ejecutara nuestra funcion getGifs 
	 * y el segundo valor ejecutará nuestras dependencias las cuales definimos dentro de llaves, si dejamos las dependencias vacias indicamos que este hook solo se ejecutara la primera vez que se crea y se construye mi componente 
	 */
   useEffect(()=>{
		getImages();
	}, [])
   return {
      images,
      isLoading
   }
}
