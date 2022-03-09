import React, { useEffect, useState } from 'react'
import {CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto, setGastos, setValidBudget, setFiltro, setGastosFiltrados }) => {
    
    const [gastado, setGastado] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [porcentajeGastado, setPorcentajeGastado] = useState(0);

    const porcentaje = ((gastado*100)/presupuesto).toFixed(2);
    setTimeout(() => {
        setPorcentajeGastado(porcentaje)
    }, 500);

    useEffect(() => {
    
    const totalGastado = gastos.reduce((total, gasto)=> total+gasto.cantidad, 0);
    setGastado(totalGastado)
    
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    
    }, [gastos]);

    const formatMoney = (presupuesto)=>{
        
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',})
        return formatter.format(presupuesto)
    }

    const handleReset=()=>{
        const confirmation = confirm("Desea Reinicia El Presupuesto")
        if(confirmation){
            setPresupuesto("")
            setGastos([])
            setValidBudget(false)
            setFiltro("")
            setGastosFiltrados([])
            
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            value={porcentajeGastado}
            text={`${porcentajeGastado}% gastado`}
            styles={buildStyles({
                trailColor: "#f5f5f5",
                pathColor: porcentaje>100 ? "#DC2626" : "#3b82f6",
                textColor: "#3b82f6"
            })}
            />
        </div>
      
        <div className='contenido-presupuesto'>
            <button
                className='reset-app'
                type='button'
                onClick={handleReset}
            >
                Reset App
            </button>
            <p >
                <span>Presupuesto</span> {formatMoney(presupuesto)}
            </p>  
            <p className={porcentajeGastado>100 ? "negativo" : ""}>
                <span>Disponible</span> {formatMoney(disponible)}
            </p> 
            <p>
                <span>Gastado</span> {formatMoney(gastado)}
            </p>   
        </div>
      
    </div>
  )
}

export default ControlPresupuesto
