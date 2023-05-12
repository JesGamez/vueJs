
const app = Vue.createApp({

    data(){
        return {
            quote: 'i hate you',
            author: 'anakin xd'
        }
    },

    methods: {
        changeQuote(){
            console.log( 'Hola mundo' )
            this.author = 'Jesus Gamez'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }



    // template: `
    // <h1> Hola Mundo </h1>
    // <p> desde app.js </p>
    // `

    //option API
    // method:{},
    // watch: {},

    //composition API
    // setup() {}
})

app.mount( ' #myApp ')

