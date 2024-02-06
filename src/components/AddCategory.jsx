import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const OnInputChange = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    // creamos una validacion para que no reciba menos de dos caracteres o un string vacio, si esto pasa nos detendrá el codigo y nuestra funcion no será llamada
    if(inputValue.trim().length <= 1) return;

    // establecemos un input vacio cada vez que agregemos un nuevo elemnto a nestra lista
    setInputValue('');

    // llamamos nuestra funcion la cual se encarga de enviar el valor de input que recibe como argumento
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={(event)=> onSubmit(event)} aria-label="form">
      <input 
        type="text"
        placeholder="Buscar gifs" 
        onChange={OnInputChange}
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}