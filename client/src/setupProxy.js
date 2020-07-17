const proxy = require('http-proxy-middleware')

 export default function(app){

    app.use(proxy("/api/**", {
        target : 'http://localhost:3000',
        secure: false

    }))
}