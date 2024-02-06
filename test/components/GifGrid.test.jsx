const { render, screen } = require("@testing-library/react")
const { GifGrid } = require("../../src/components");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 

   const category = 'One Punch';

   test('Debe de mostrar el loading inicialmente', () => { 

      //' le digo a mi test-suite como funcionara mi hook (implemnetacion) y simulo lo que regresa la funcion
      useFetchGifs.mockReturnValue({
         images: [], //se que las imagenes vienen como un arreglo vacio
         isLoading: true //se que el indicador de carga inicia en true (Cargando...)
      })

      render( <GifGrid category={category} /> );
      
      //' evaluamos que en nuestra app contengamos un Cargando... y el nombre de categoria
      expect( screen.getByText('Cargando...'));     
      expect( screen.getByText(category));     
   })

   test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

      //' se crea una data ficticia que simula un arreglo de gifs y que irá en images
      const gifs = [
         {
            id:'abc',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
         },
         {
            id:'123',
            title: 'Goku',
            url: 'https://localhost/Goku.jpg'
         },
      ]

      //' se setea el hook con la data creada y se establece isLoading en false para simular que ya tenemos contenido cargado
      useFetchGifs.mockReturnValue({
         images: gifs, 
         isLoading: false    
      })
      
      
      render( <GifGrid category={category} /> );
      // screen.debug()

      //' se evalua que hayan dos magenes en el screen
      expect(screen.getAllByRole('img').length).toBe(2);
   })

})
