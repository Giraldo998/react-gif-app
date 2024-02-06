import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
   /*
    ' cuando queremos almacenar informacion y esa informacion tiene que cambiar el html podremos usar algun hook de react para mantener el estado
    ' almacenaremos la informacion en useState y lo inicializaremos como un arreglo
    */
   const [Categories, setCategories] = useState(['One Punch'])

   const onAddCategory = (newCategory) =>{
      /*
       ! evitaremos usar push hasta que comprendamos el funcionamiento de react
       ^ setCategories(Categories.push('valorant'))
       */
      /* 
       * validamos que el valor que se agregará no exista en nuestro arreglo, de ser así nos salimos de la funcion
       */ 
      if (Categories.includes(newCategory)) return;
      /*
       * para agregar un nuevo item generaremos un nuevo estado(arreglo) y nos apoyaremos del operador spread(...) de las Categorias y agregamos el nuevo valor
       * esto lo que hará es una copia de todas las categorias y seguido adicionamos el item(valor) que queremos
       */
      setCategories([newCategory, ...Categories])
      // console.log(newCategory);
      /*
       * otra manera de hacer el mismo procedimiento mediante un callback donde cat hace referencia a Categories
         setCategories(cat=>[...cat, 'valorant'])
      */
      
   }


   return (
   <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      {/* eviamos la funcion onNewCategry como property a nuestro AddCategory */}
      <AddCategory onNewCategory={(event)=>onAddCategory(event)}/>

      {/* listado de gifs */}
      {/* renderizamos un listado basado en las categorias, para esto utlizamos el metodo map el cual se enecarga de barrer todo el arreglo y devuelve otro valor que indiquemos*/}
         { 
            Categories.map((category) =>(
               /*
                * siempre que hagamos este tipo de construccion dinamica basado en un map debemos proporcionar obligatoriamente una key cada valor de esta llave debe ser unico
                */ 
               <GifGrid 
                  key={category} 
                  category={category}
               />  
            ))
         }
   </>
  )
}
