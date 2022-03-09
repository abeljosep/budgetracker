import React from 'react';
import {dateFormatter} from "../helpers"
import IconoAhorro from "../img/icono_ahorro.svg"
import Iconocasa from "../img/icono_casa.svg"
import Iconocomida from "../img/icono_comida.svg"
import Iconogastos from "../img/icono_gastos.svg"
import Iconoocio from "../img/icono_ocio.svg"
import Iconosalud from "../img/icono_salud.svg"
import Iconosuscripciones from "../img/icono_suscripciones.svg"
import iconeswipe from "../img/iconeswipe.png"
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

const Gasto = ({gasto, setEditGasto, deleteGasto}) => {
    const {categoria, nombre, cantidad, fecha, id} = gasto

    const iconesDictionary = {
        ahorro: IconoAhorro,
        casa: Iconocasa,
        comida: Iconocomida,
        gastos: Iconogastos,
        ocio: Iconoocio,
        salud: Iconosalud,
        suscripciones: Iconosuscripciones
    }

    const leadingActions = () => {
         return <LeadingActions>
          <SwipeAction onClick={() => setEditGasto(gasto)}>
            Editar
          </SwipeAction>
        </LeadingActions>
      };

      const trailingActions = () => {
        return <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => deleteGasto(id)}
          >
            Delete
          </SwipeAction>
        </TrailingActions>
      };
    return( 
        <SwipeableList>    
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    
                    <div className='contenido-gasto'>
                        <img 
                        src={iconesDictionary[categoria]} 
                        alt="Iconos Categoria" 
                        />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>Agregado el: <span>{dateFormatter(fecha)}</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>{cantidad}</p>
                    <div className='icone-swipe'><img className='iconImg' src={iconeswipe} alt="swipeable icon" /></div>

                </div>
            </SwipeableListItem>
        </SwipeableList>    
        
    );
};

export default Gasto;
