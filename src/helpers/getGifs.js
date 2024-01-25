export const getGifs = async(category)=>{
	const url = `https://api.giphy.com/v1/gifs/search?api_key=E6WIPgg3M75k0PcaxfPeVLSkvja8zl0x&q=${ category }&limit=12`
	const resp = await fetch(url);
	const {data} = await resp.json();

	const gifs = data.map(img=>({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	})) 
   
	return gifs;
}