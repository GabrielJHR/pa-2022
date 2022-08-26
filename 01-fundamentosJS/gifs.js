const API_KEY = 'H34PGip1gUHR5Uzn7j9B5hUP30a4qELj';

const api = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const getImage = async () => {
    try {
        const respuesta = await fetch(api);
        const {data} = await respuesta.json();
        const {url} = data.image.original;
    
        const img = document.createElement('url');
        img.src = url;
    
        document.body.append(img);    
    } catch (error) {
        console.error('Se produjo un error')
    }

}

getImage();