import axios from 'axios'  ///Permite hacer peticiones o llamados al contenido de un enlace http
import {useState, useEffect} from 'react'  //hooks(ganchos) 1 funcion q almacena el estado de un componente (acepta el valor inicial de la variable y la funcion para modificarla)   2 
import {Link} from 'react-router-dom' //renderizar
import CompMenu from "../components/Menu.jsx"
import "../psicologo/css.css"

const URI = 'http://localhost:8001/psicologo/'  //backend node/express

const CompShowBlog = () => {   //fn flecha
    
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

    return( 
    <div className='justify-content-center'>
        <div className='mt-5'>
            <CompMenu/>
        </div>
        <div className='container-fluid mb-4 pt-4'>
                        <figure className='text-center'>
                            <blockquote className='blockquote'>
                                <p className='titulo10'>Gestor De Paz</p>
                            </blockquote>
                            <figcaption className='blockquote-footer py-1'><cite title="Source Title">No hay camino para la paz, la paz es el camino</cite></figcaption>
                        </figure>
        </div>

        <div className='container-fluid py-1 w-70'>
        <div className='row'>
            <div className='col-12 container-fluid'>
                <div className='justify-content-center card my-4 '>
                    <div className='container-fluid card-body px-0 pb-2'>
                        <div className='container-fluid table-responsive p-0'>
                            <table className='table align-items-center mb-0'>
                                <thead className='table-primary '>
                                    <tr>
                                        
                                        <th className='text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7'>Nombre</th>
                                        <th className='text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7'>Apellido</th>
                                        <th className='text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7'>Fecha</th>
                                        <th className='text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7'>Cita</th>
                                        <th className='text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7'>Opción</th>
                                    </tr>
                                </thead>
                                
                                <tbody className='justify-content-center'>
                                { psicologos.map ( (psicologo) => (   //  arreglo completo que va a ser recorrido  ///agrreglo q va ser recorrido individualmente (muestra sus caract/campos)
                                        <tr key={ psicologo.id}>
                                            <td className='align-middle text-center'>
                                            <h6 className='mb-0 text-sm text-center'>{ psicologo.nombre }</h6>
                                            <div><Link to={`/histperf/${psicologo.id}`} className='text-secondary font-weight-bold text-xs' data-toggle="tooltip" data-original-title="Edit user">Ver más...</Link> {/* fila */}</div>
                                            </td>
                                            <td className='align-middle text-center'>
                                            <h6 className='mb-0 text-sm text-center'>{ psicologo.apellido }</h6>
                                            </td>
                                            <td className='align-middle text-center'>
                                            <h6 className='mb-0 text-sm text-center'>{ psicologo.fecha }</h6>
                                            </td>
                                            <td className='align-middle text-center'>
                                            <h6 className='mb-0 text-sm text-center'><strong className='text-dark'> { psicologo.cita }</strong></h6>
                                            </td>
                                            <td className='align-middle text-center'>
                                            <Link to={`/edit/${psicologo.id}`} className='btn btn-info px-4 text-center'><i className="fas fa-edit"></i>Edit</Link>
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
    </div>
    
    
   </div>

    </div>
    
    
    
    </div>
    )

}
    
export default CompShowBlog 