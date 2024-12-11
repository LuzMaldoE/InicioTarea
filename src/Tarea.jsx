import './tarea.css'

export function Tarea({tar}){
    //const estilo = {background:'blue', color:'white'}
    return <div className="estilo"> 
        <h1>Primera Tarea</h1>
        <nav className={tar ? 'bg-verde' : 'bg-rojo'}>
            {tar ? 'Tarea Realizada' : 'Tarea Pendiente'}

        </nav>
    </div>
}