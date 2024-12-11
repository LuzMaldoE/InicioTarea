function Saludar({nombre,x,y,z,direccion}){
    return <div>
            <h1>Hola {nombre}</h1> 
            <h2>otra palabra: {x}</h2> 
            <h2>buliano: {z ? 'Casado' : 'Soltero'}</h2> 
            <h2>numero: {y}</h2> 
            <ul>Dirección:
                <li>Calle: {direccion.calle}</li>   
                <li>Cuidad: {direccion.ciudad}</li>   
            </ul>
            </div>
}

export default Saludar

export function Otro(){
    return <h2>Otro Componente</h2>
}