const { render, screen, fireEvent, getByRole } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Pruebas en <GifExpertApp/>', () => { 
   
   test('evaluamos nuevo elemento h3 agregado ', () => { 
      const inputValue = 'Valorant';

      render(<GifExpertApp/>)
      

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      const titles = screen.getAllByRole('heading',{level: 3});
      
      fireEvent.input(input, {target:{ value: inputValue}})
      fireEvent.submit(form)
      // screen.debug() 

      expect(titles.length).toBeGreaterThan(0)

   });
 });