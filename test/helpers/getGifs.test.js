const { any } = require("prop-types")
const { getGifs } = require("../../src/helpers/getGifs")

describe('Pruebas en getGifs', () => {  
   
   test('Debe retornar un arreglo de gifs', async() => { 

      const gifs = await getGifs('One Punch')
      // console.log(gifs);

      expect(gifs.length).toBeGreaterThan(0)//podemos evaluar que nuestra funcion contenga valores
      expect(gifs[0]).toEqual({
         /*
          ' como no sabemos que valor vendaré en cada porpiedad indicaremos que recibimos cualquier string, 
          ' lo que evaluamos es que si vengan estos valores en mi consulta con el tipo de dato correcto
          */
         id: expect.any(String),//espera cualquier string
		   title: expect.any(String),
		   url: expect.any(String)
      })
   })
})