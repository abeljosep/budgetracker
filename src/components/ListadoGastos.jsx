import React from 'react';
import Gasto from './Gasto';


const ListadoGastos = ({gastos, setEditGasto, deleteGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
        

      {filtro ? 
      <>
        <h2>{gastosFiltrados.length ? "Control de gastos" : "No hay gastos en esta categoría"}</h2>
        {gastosFiltrados.map(gasto=>(
          <Gasto
              key={gasto.id}
              gasto={gasto}
              setEditGasto={setEditGasto}
              deleteGasto={deleteGasto}
          />
        ))}
      </>
      : 
      <>
        <h2>{gastos.length ? "Control de gastos" : "No hay gastos que mostar"}</h2>
        {gastos.map(gasto=>(
          <Gasto
              key={gasto.id}
              gasto={gasto}
              setEditGasto={setEditGasto}
              deleteGasto={deleteGasto}
          />
        ))}
      </>
    }

        {}
    </div>
  )
}

export default ListadoGastos
