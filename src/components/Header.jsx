
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";


const Header = ({presupuesto, gastos, setGastos, setPresupuesto, validBudget, setValidBudget, setFiltro, setGastosFiltrados }) => {

 
  
  return (
  <header>
    <h1>Planificador de Gastos</h1>
    {validBudget ?(
    <ControlPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
        setValidBudget={setValidBudget}
        setFiltro={setFiltro} 
        setGastosFiltrados={setGastosFiltrados}
        
    />
    ):
    (<NuevoPresupuesto 
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        setValidBudget={setValidBudget}
    />)
    }
      
  </header>);
};

export default Header;
