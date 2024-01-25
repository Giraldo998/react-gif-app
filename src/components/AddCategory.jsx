import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const OnInputChange = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    // creamos una validacion para que no reciba menos de dos caracteres
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    // establecemos un input vacio cada vez que agregemos un nuevo elemnto a nestra lista
    setInputValue('');
  }

  return (
    <form onSubmit={(event)=> onSubmit(event)}>
      <input 
        type="text"
        placeholder="Buscar gifs" 
        onChange={OnInputChange}
        value={inputValue}
      />
    </form>
  )
}
