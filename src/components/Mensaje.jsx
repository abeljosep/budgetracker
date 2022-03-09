import React from 'react'

const Mensaje = ({children}) => {
  return (
    <div className="alerta error">
        
        {children}
    
    </div>
  )
}

export default Mensaje
