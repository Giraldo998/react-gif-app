const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components")

describe('Pruebas en <AddCategory/>', () => { 
   
   test('debe cambiar el valor de la caja de texto', () => {  

      //' nuestro sujeto de prueba exige enviar una funcion como proptype para esto enviamos una funcion dentro de las llaves 
      render(<AddCategory onNewCategory={ () => {} }/>);
      
      //' hacemos referencia al sujeto a evaluar, se extrae el input
      const input = screen.getByRole('textbox');
      
      //' simulamos el evento donde escribimos dentro del input la palabra Saitama
      fireEvent.input(input, {target:{ value: 'Saitama'}})
      
      //' evaluamos
      expect(input.value).toBe('Saitama')
      // screen.debug();
   })

   test('debe de llamar onNewCategory si el input tiene un valor', () => { 

      const inputValue = 'saitama';
      
      //' creamos una funcion ficticia para evaluar el entorno de pruebas
      const onNewCategory = jest.fn();
      
      //' inicializamos sujeto de pruebas
      render(<AddCategory onNewCategory={ onNewCategory }/>);
      
      //' extraemos las referencias
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      
      //* si no logramos encontrar la linea del elemento form, para solucionar esto nos dirigimos al comoponente donde se aloja nuestra etiqueta form y le damos el atributo aria-label
      
      //' simulamos escribir dentro del input y el envio del formulario (oprimimos tecla enter)
      fireEvent.input(input, {target:{ value: inputValue}})
      fireEvent.submit(form)
      // screen.debug()
     
      //' evaluamos que nuestro input quede vacio despues de hacer la busqueda
      expect(input.value).toBe('')

      //' evaluamos que nuestra funcion haya sido llamada correctamente
      expect(onNewCategory).toHaveBeenCalled();
      
      //' evaluamos que nuestra funcion haya sido llamada correctamente una vez
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      
      //' evaluamos que nuestra funcion haya sido llamada correctamente con el valor de la caja de texto (saitama)
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);
   })

   test('no debe llamar el onNewCategory si el input está vacio', () => { 
      
      //° TAREA

      const onNewCategory = jest.fn();

      //° nuestro sujeto de pruebas siempre se inicializa copn un valor de input vacio
      render(<AddCategory onNewCategory = { onNewCategory }/>);

      //° extraemos el formulario
      const form = screen.getByRole('form');

      //° simulamos el submit, si nuestro input esta vacio sin diligenciar este detendrá el codigo y no se llamará a la funcion onNewCategory
      fireEvent.submit(form)

      //° evaluamos que nuestra funcion no sea llamada
      expect(onNewCategory).toHaveBeenCalledTimes(0);
      expect(onNewCategory).not.toHaveBeenCalled(); // otra manera de evaluar que no haya sido llamada      
   })
})