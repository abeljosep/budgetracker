

export const generateId = () =>{
    const random = Math.random().toString(36).substr(2);
    const newDate = Date.now().toString(36);

    return random+newDate;

}

export function dateFormatter(fecha){
    const today = new Date(fecha);
    const options ={
        month: "long",
        year: "numeric",
        day: "2-digit"
    }
    return today.toLocaleDateString("es-Es", options)
}