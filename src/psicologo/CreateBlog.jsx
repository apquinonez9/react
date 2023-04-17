import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../psicologo/css.css"
import {Link} from 'react-router-dom'
import CompMenu from "../components/Menu.jsx"


const URI = 'http://localhost:8001/psicologo/'

const CompCreatePsicologo = () => {
    const [nombre, setNombre] = useState('') //fn con estado y fn para actualizar los datos 
    const [apellido, setApellido] = useState('')
    const [ficha, setFicha] = useState('')
    const [teléfono, setTeléfono] = useState('')
    const [fecha, setFecha] = useState('')
    const navigate = useNavigate()    //
    
    //procedimiento guardar
    const store = async (e) => {   //almacenar
        e.preventDefault() //evita que se cargen textos que no cumplen con los datos requeridos
        await axios.post(URI, {nombre: nombre, apellido:apellido,ficha:ficha,teléfono:teléfono,fecha:fecha}) 
        navigate('/')
    }   

    return (
        <div>
            <div className='mt-4'>
                <CompMenu/>
              </div>
            <div class="container-fluid mb-4 pt-4">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p class="titulo10">Acompañamiento Psicologico</p>
                            </blockquote>
                            <figcaption class="blockquote-footer py-3"><cite title="Source Title">Por encima de todo elije tu paz mental</cite></figcaption>
                        </figure>
                    </div>
           <h3 className='mt-3'>Create POST</h3>
           <form onSubmit={store}>
            
                <div className='mb-3 tabla'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                    </div>   
                 <div className='mb-3 tabla'>
                    <label className='form-label'>Apellido</label>
                    <input
                        value={apellido}
                        onChange={ (e)=> setApellido(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3 tabla'>
                     <label className='form-label'>Ficha</label>
                    <textarea
                        value={ficha}
                        onChange={ (e)=> setFicha(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <div className='mb-3 tabla'>
                     <label className='form-label'>Teléfono</label>
                    <input
                        value={teléfono}
                        onChange={ (e)=> setTeléfono(e.target.value)} 
                        type="phone"
                        className='form-control'
                    />                 
                 </div> 
                 <div className='mb-3 tabla '>
                     <label className='form-label'>Fecha</label>
                    <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)} 
                        type="date"
                        className='form-control'
                    />                 
                 </div>
                 <div className='pt-2'>
                    <Link to={`/`}><button className='btn-solid-lg'>Cancelar</button></Link>
                    <button type='submit' className='btn-solid-lg mt-2 mx-4'>Siguiente</button>                  
                </div>
           </form>
        </div>
    )
}

export default CompCreatePsicologo