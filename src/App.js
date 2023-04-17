
import './App.css';

///Importamos Los Componentes.
import CompShowBlogs from './psicologo/ShowBlogs';
import CompCreateBlog from './psicologo/CreateBlog';
import CompEditBlog from './psicologo/EditBlog';
import HistoPerfil from './psicologo/Historial_Perfil';
import CompShowBlog from './psicologo/ShowBlog';
import CompIdk  from './psicologo/oij'

///Importamos El Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //componentes de Route

function App() {
  return (
    <div className="App">
         <BrowserRouter> {/* estrctura de enrutador */}
        <Routes>
            <Route path='/' element={ <CompShowBlogs />} />  {/*ruta tiene dos partes 1 path y 2 element (hace ref al componente) */}
            <Route path='/create' element={ <CompCreateBlog />}/>
            <Route path='/edit/:id' element={ <CompEditBlog />} />
            <Route path='/histperf/:id' element={<HistoPerfil />}/>
            <Route path='/show' element={ <CompShowBlog/>}/>
            <Route path='/idk' element={ <CompIdk />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
