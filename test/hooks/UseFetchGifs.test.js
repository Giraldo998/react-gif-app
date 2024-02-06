const {renderHook, waitFor} = require('@testing-library/react');
const {useFetchGifs} = require('../../src/hooks/useFetchGifs');

describe('Pruebas en el hook UseFetchGifs', () => {
	test('Debe regresar el estado inicial', () => {
		/* 
       ' debemos llamar a los hooks dentro de un componente debido a que estos necesitan parete del ciclo de vida del componente, los hooks no se pueden evaluar de manera aislada
       ' debemos utilizar la importacion de renderHook para poder utilizar nuestro hook en el test sin necesidad de crear un componente
       ' renderHook recibe un callback donde llamamos nuestro hook y le entregamos el parametro que recibe 'category'
       */
		const {result} = renderHook(() => useFetchGifs('One Punch'));
		// console.log(result);

		const {images, isLoading} = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
		const {result} = renderHook(() => useFetchGifs('One Punch'));
		
      //' usamos la import de waitFor que nos recibirá un callback
		await waitFor(
         
         //' usamos una expresion de jest para que le este pendiente de cuando suceda el cambio
         //' esta expresion indica que espera que resutado de images sea mayor a 0 
         ()=> expect(result.current.images.length).toBeGreaterThan(0)

         //' si la expresion nunca se ejecuta o es muy lento podemos enviar como segundo argumento un objeto con un timeout
         // ,{
         //    timeout: 1000
         // }
      );
      

      const {images, isLoading} = result.current;
      
      // evaluamos que images sea mayor a 0 y el isloadong sea falso, en caso tal de no usar el awaitFor estas pruebas nos darían un error
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
