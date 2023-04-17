import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import "../psicologo/css.css"
import CompMenu from "../components/Menu.jsx"


const URI = 'http://localhost:8001/psicologo/'
// const imagenp='https://i.ytimg.com/vi/IhUVuiaxlTE/maxresdefault.jpg'

const CompShowPsicologo = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [ficha, setFicha] = useState('')
    const [teléfono, setTeléfono] = useState('')
    const [fecha, setFecha] = useState('')
    const [cita, setCita] = useState('')
    // const navigate = useNavigate() 
    const {id} = useParams()

    useEffect( ()=>{
        getPsicologoById()
    },[])

    const getPsicologoById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setFicha(res.data.ficha)
        setTeléfono(res.data.teléfono)
        setFecha(res.data.fecha)
        setCita(res.data.cita)
    }
    return(
        <div className='container-fluid px-2 px-md-4 mb-4 p-4 datos'>

            <div className='mt-4'>
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

<center>
            <div className='page-header min-height-300 min-width-0 border-radius-xl'>
                {/* <img></img> */}<span className='mask bg-gradient-primary opacity-6'></span>
            </div>
            <div className='card card-body mx-3 mx-md-4 mt-n6 '>

              <div className='row'>
                  <div className='col-12 col-xl-12'>
                      <div className='card h-100 w-70'>
                          <div className='card-header pb-0 p-0'>
                              
                              <div className='row'>
                                  <div className='col-md-8 d-flex'>
                                      <h5 className='mx-5 px-5 text-dark tipology pt-5 pb-0 text-align-center'><i className='fa-regular fa-memo-circle-info'></i>Perfil Información</h5>
                                  </div>
                                </div>

                               <div className='card-body p-0 justify-content-center'>
                                <hr className='horizontal gray-light p-0 m-0'/>

                                <ul className='text-justify list-group pb-4'>

                                <h6 className='mb-0 text-sm'>
                                  <li className='list-group-item border-0 ps-0 pt-4 text-sm tipology'><strong className='text-dark'>Nombre:</strong> &nbsp; {nombre}</li>
                                  <li className='list-group-item border-0 ps-0 text-sm tipology'><strong className='text-dark'>Apellido:</strong> &nbsp;{apellido}</li>
                                  <li className='list-group-item border-0 ps-0 text-sm tipology'><strong className='text-dark'>Ficha:</strong> &nbsp;{ficha}</li>
                                  <li className='list-group-item border-0 ps-0 text-sm tipology'><strong className='text-dark'>Teléfono:</strong> &nbsp;{teléfono}</li>
                                  <li className='list-group-item border-0 ps-0 text-sm tipology'><strong className='text-dark'>Fecha:</strong> &nbsp;{fecha}</li>
                                  <li className='list-group-item border-0 ps-0 pb-3 text-sm tipology'><strong className='text-dark'>Cita:</strong> &nbsp;{cita}</li>
                                </h6>

                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4'><Link to={`/`} className='text-secondary font-weight-bold text-xs px-4' data-toggle="tooltip" data-original-title="Edit user"><button className='btn-solid-lg'data-bs-toggle="modal">Atrás</button></Link>
                <Link to={`/create`} className='text-secondary font-weight-bold text-xs' data-toggle="tooltip" data-original-title="Edit user"><button className='btn-solid-lg'data-bs-toggle="modal">Crear Nueva Cita</button></Link>
            </div>

        </div>
    </center>

</div>
)}

export default CompShowPsicologo