const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");
describe('Pruebas en GifItem', () => { 
   const title = 'saitama';
   const url = 'https://one-punch.com/saitama.jpg';

   test('Evaluar snapshot', () => {

      const {container} = render(<GifItem title={title} url={url}/>);
      expect(container).toMatchSnapshot();
      // screen.debug();
      // expect(screen.getByRole('img').src).toBe(url);
      const {src, alt} = screen.getByRole('img');
      expect(src).toBe(url)
      expect(alt).toBe(title)
   })

   test('Debe de mstrar el titulo en el componente', () => {
      render(<GifItem title={title} url={url}/>);
      expect(screen.getByText( title )).toBeTruthy();
    })
})


