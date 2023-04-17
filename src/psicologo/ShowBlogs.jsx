import axios from 'axios'  ///Permite hacer peticiones o llamados al contenido de un enlace http
import {useState, useEffect} from 'react'  //hooks(ganchos) 1 funcion q almacena el estado de un componente (acepta el valor inicial de la variable y la funcion para modificarla)   2 
import {Link} from 'react-router-dom' //renderizar
import CompMenu from "../components/Menu.jsx"

const URI = 'http://localhost:8001/psicologo/'  //backend node/express

const CompShowPsicologo = () => {   //fn flecha
    
    const [psicologos, setPsicologo] = useState([]) //fn devuelve un valor conectado(fn con estado,contiene tdos los datos) y una fn para actualizarlo
    // config de hooks(ganchos) api react que gestiona los estados del componente tipo funcion (tambien class) 
    useEffect( ()=>{    ///fn para utilizar efecto para lo que react no controla //para que devuelva psicologia y setpsicologia)
        getPsicologo() 
    },[])

    //procedimiento para mostrar todos los blogs
    const getPsicologo = async () => {
        const res = await axios.get(URI) //peticion con metodo get apuntando a el backend
        setPsicologo(res.data) //responder todos los reg
    }

    //procedimiento para eliminar un blog
    const deletePsicologo = async (id) => {
       await axios.delete(`${URI}${id}`)  /////peticion con metodo delete con uso de uri y id 
       getPsicologo() //mostrar reg
    }

    return(   //vistas
    
        <div className='container container-center'>
              <div className='mt-5'>
                <CompMenu/>
              </div>
            <div className='container-fluid mb-4 pt-4'>
                        <figure className='text-center'>
                            <blockquote className='blockquote'>
                                <p className='titulo10'>Gestor De Paz</p>
                            </blockquote>
                            <figcaption className='blockquote-footer py-3'><cite title="Source Title">Por encima de todo elije tu paz mental</cite></figcaption>
                        </figure>
                    </div>
            <div className='row'>
                <div className='col'>
                    
                    <table className='table table-responsive'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Fecha</th>
                                <th>Cita</th>
                                <th>Opción</th>
                            </tr>
                        </thead>
                        <tbody>
                            { psicologos.map ( (psicologo) => (   //  arreglo completo que va a ser recorrido  ///agrreglo q va ser recorrido individualmente (muestra sus caract/campos)
                                <tr key={ psicologo.id}>
                                    <td className='justify-content-center'>
                                    { psicologo.nombre }
                                        <div>
                                        <Link to={`/histperf/${psicologo.id}`} className='text-secondary font-weight-bold text-xs' data-toggle="tooltip" data-original-title="Edit user">Ver más...</Link>  {/* fila */}
                                        </div>

                                    </td>

                                    <td className='justify-content-center'> { psicologo.apellido } </td> {/*estructura individual*/}
                                    <td className='justify-content-center'> { psicologo.fecha } </td>
                                    <td className='justify-content-center'><strong className='text-dark'> { psicologo.cita }</strong> </td>
                                    <td className='justify-content-center'>
                                        <Link to={`/edit/${psicologo.id}`} className='btn btn-info px-4'><i className="fas fa-edit"></i>Edit</Link>
                                        {/*hace ref/apunta al router /edit/ donde este va a hacer uso de id*/}
                                        {/* <button onClick={ ()=>deletePsicologo(psicologo.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Delete</button> */}
                                        {/* accion onclick llama a deletPsiclogo, ademas este hace uso de id */}
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowPsicologo