import axios from 'axios'

const apiKey = 'Ow6lv73KtSy8fwIjhCeBAGIsaa6R2y0v'
// Endpoint
// `https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then( resp => {
//         const { data } = resp.data
//         const { url } = data.images.original

//         console.log ( url )

//          const img = document.createElement( 'img' )
//          img.src = url

//          document.body.append( img )
        
//         // const { url } = resp.data.data.images.original

//         // const img = document.createElement( 'img' )
//         // img.src = url

//         // document.body.append( img )
//     })