import React, { useState, useEffect} from 'react'
import cerrarBtn from "../img/cerrar.svg"
import Mensaje from './Mensaje'

const Modal = ({setModal, modalAnimation, setModalAnimation, nuevoGasto, editGasto, setEditGasto}) => {
    const[mensaje, setMensaje] = useState("")

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [fecha, setfecha] = useState("")
    
    useEffect(() => {
        if(Object.keys(editGasto).length>0){
            setNombre(editGasto.nombre)
            setCantidad(editGasto.cantidad)
            setCategoria(editGasto.categoria)
            setId(editGasto.id)
            setfecha(editGasto.fecha)
        }
    }, []);
    
    const handleClose =()=>{
        
        setModalAnimation(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
        setEditGasto({})
    }

    const handleGasto = (e) =>{
        e.preventDefault()
        setEditGasto({})
        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Todos los campos son obligatorios");
            setTimeout(() => {
                setMensaje("")
            }, 3000);
        }else{
            nuevoGasto({nombre, cantidad, categoria, id, fecha})
        }
    }
return (
    <div className='modal'>
             <div className='cerrar-modal'>
                <img 
                    src={cerrarBtn} 
                    alt="Boton Cerrar"
                    onClick={handleClose}
                />
            </div>
        <form 
        onSubmit={handleGasto}
        className={`formulario ${modalAnimation ? "animar": "cerrar"}`}
        >
       
            <legend>{editGasto.nombre ? "Editando" : "Nuevo Gasto"}</legend>
            {mensaje && <Mensaje>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre del Gasto</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder='Nombre del gasto: ej. Transporte' 
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />
            </div>
            
            <div className='campo'>
                <label htmlFor="cantidad">Monto del Gasto</label>
                <input 
                    id="cantidad"
                    type="number"
                    placeholder='A??ade la cantidad del gasto: ej: 300' 
                    value={cantidad}
                    onChange={e=>setCantidad(Number(e.target.value))}
                    />
            </div>
            
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={e=>setCategoria(e.target.value)}
                >
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="gastos">Otros</option>
                </select>

                <input type="submit" 
                    value={editGasto.nombre ? "Editar Gasto" : "A??adir Gasto"}
                />

            </div>
        </form>
    </div>
)
}

export default Modal
