export function Boton({text}){
    return <button onClick = { () => {
        console.log('Hola Mundo')
    }} >
        <h3>{text}</h3>
    </button>
}