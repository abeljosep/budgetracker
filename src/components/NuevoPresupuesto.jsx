import { useState } from "react"
import Mensaje from "./Mensaje"



const NuevoPresupuesto = ({presupuesto, setPresupuesto, setValidBudget}) => {
    
    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) =>{
        e.preventDefault()
        if(presupuesto<=0){
            setMensaje(`${presupuesto} No es un presupuesto válido`)
            setTimeout(() => {
                setMensaje("")
            }, 3000);
            return;
        }
        setMensaje("")
        setValidBudget(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form 
                className="formulario"
                onSubmit={handlePresupuesto}    
            >
                
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        value={presupuesto}
                        placeholder="0"
                        onChange={e=> setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input 
                    type="submit"
                    value="Añadir"
                />
                {mensaje && <Mensaje>{`${mensaje}`}</Mensaje> }
            </form>
        </div>
  )
}

export default NuevoPresupuesto
