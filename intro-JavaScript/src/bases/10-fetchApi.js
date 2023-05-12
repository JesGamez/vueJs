
const apiKey = 'Ow6lv73KtSy8fwIjhCeBAGIsaa6R2y0v'
// Endpoint
// https://api.giphy.com/v1/gifs/random?apikey=Ow6lv73KtSy8fwIjhCeBAGIsaa6R2y0v

fetch( `https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }` )
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original
        console.log( url )

        const img = document.createElement( 'img' )
        img.src = url

        document.body.append( img )

    })