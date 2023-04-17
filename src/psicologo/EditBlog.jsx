import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../psicologo/css.css"
import CompMenu from "../components/Menu.jsx"

const URI = 'http://localhost:8001/psicologo/'

const CompEditPsicologo = () => {
    const [cita, setCita] = useState('')
    const navigate = useNavigate() 
    const {id} = useParams()

    
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
             cita:cita
        })
        navigate('/')
    }

    useEffect( ()=>{
        getPsicologoById()
    },[])

    const getPsicologoById = async () => {
        const res = await axios.get(URI+id)
        setCita(res.data.cita)
    }

    return (
        <div>
            <CompMenu/>

        <div class="container-fluid mb-4 pt-4 my-5">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p class="titulo10">Acompañamiento Psicologico</p>
                            </blockquote>
                            <figcaption class="blockquote-footer py-3"><cite title="Source Title">Por encima de todo elije tu paz mental</cite></figcaption>
                        </figure>
                    </div> 
        <h3 className='my-3'>Edit POST</h3>
        <form onSubmit={update} className>
        <div className='mb-3'>            
                 <div className='mb-3 tabla text-center'>
                     <label className='form-label'>Cita</label>
                    <textarea
                        value={cita}
                        onChange={ (e)=> setCita(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>    
                 </div>     
            <button type="submit" className="btn-solid-lg">Siguiente</button>
        </form>
    </div>

    )

}

export default CompEditPsicologo