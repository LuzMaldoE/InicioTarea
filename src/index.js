// importar 
import React from 'react' 
import ReactDom from 'react-dom/client'
import Saludar, {Otro} from './saludar.jsx'
import {Boton} from './boton.js'
import { Tarea } from './Tarea.jsx'

//crear una constante
const root = ReactDom.createRoot(document.getElementById('root'))

/*function Saludar(){
    const nombre = 'Luz'
    return <div>
            <h1>Hola React!!</h1> 
            <p>Nombre {nombre}</p>
            </div>
}*/


//llamar los componentes creados
root.render(
    <> {/*etiqueta fragmen - vacia como etiqueta raiz*/}
        <Tarea tar={false}/>
        <Saludar nombre='Luz'
                    x ='Chao'
                    y = {30}
                    z = {false}
                    direccion={ {
                    calle: 'mapocho',
                    cuidad: 'Santiago'
                    }
                }
        /> 
        <Otro/> 
        <Boton text = 'otro boton'/>
        <Boton text='click'/>
        <input onChange={ (evento) => {
            console.log(evento.target.value)
        }}/>
    </>
)
