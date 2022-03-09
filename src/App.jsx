import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generateId} from "./helpers"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Filtros from "./components/Filtros"


function App() {
    
  const [presupuesto, setPresupuesto] = useState(localStorage.getItem("presupuesto")?? "")
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false);
    
  const [gastos, setGastos] = useState(localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : [] )

  const [editGasto, setEditGasto] = useState({})
 
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  

  useEffect(()=>{
    if(filtro){
      const gastosFil = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFil)
  }}, [filtro])
  useEffect(() => {
    
    if(Object.keys(editGasto).length>0){
      setModal(true);
      setTimeout(() => {
        setModalAnimation(true)
      }, 500);
    }
    
  }, [editGasto]);
  
  useEffect(()=>{
    localStorage.setItem("presupuesto", presupuesto)
  }, [presupuesto])
  
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0
    if(presupuestoLS>0){
      setValidBudget(true)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("gastos", JSON.stringify(gastos))
  },[gastos])
  
  const nuevoGasto = gasto =>{

    if (gasto.id){
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)

      setGastos(gastoActualizado);
      
    }else{
      gasto.id = generateId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
    setModalAnimation(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setModalAnimation(true)
    }, 500);
    
  }

  const deleteGasto = (id)=>{
   const gastoActualizado = gastos.filter(gastoState => gastoState.id !== id);
   setGastos(gastoActualizado)
  }
  return (
    <div className={modal ? "fijar" : ""}>
      <Header 
        gastos = {gastos}
        setGastos = {setGastos}
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        setFiltro={setFiltro} 
        setGastosFiltrados={setGastosFiltrados}
      />
     
        {validBudget &&  
        <>
          <main>
            <Filtros
              filtro={filtro} 
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setEditGasto={setEditGasto}
              deleteGasto={deleteGasto}
              filtro={filtro} 
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto} 
            alt="Icono Nuevo Gasto"
            onClick={handleNuevoGasto}/>
          </div>
        </>}
        {modal  && <Modal
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    nuevoGasto={nuevoGasto}
                    editGasto={editGasto}
                    setEditGasto={setEditGasto}
                  />}
    </div>
  )
}

export default App
