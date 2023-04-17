import React from 'react';
import '../assets/css/StyleComponents.css'
import menu from '../assets/img/menu.png'
function CompMenu (){
    return (
        <div>
            <nav class="menu fixed-top">
            <input   type="checkbox" id="check" />

            <label for="check" class="checkbtn">
            <img className="ms-3" src={menu}/>
            </label>

            <a href="#" class="enlace">
            <img src="#" alt="" class="logo" />
            </a>
                <ul class="items">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                {/* <li><a href="#">Portafolio</a></li>  */}
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contactos">Contacto</a></li>
                </ul>
            </nav>
        </div>
        
    );
}
export default CompMenu;