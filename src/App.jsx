
import { Cabecera } from './componentes/Cabecera';
import Formulario from './componentes/Formulario';
import Pie  from './componentes/Pie';
import React from 'react';


//import Contenedor from './componentes/Contenedor';

//import { Cabecera } from './componentes/Cabecera';



 function App() {
  
    return (

       <div className="App">
         <Cabecera/>
           <div className="container mt-5">
                <Formulario/>
           </div>      

             <Pie/>     
       </div>


         
   


            )
 }

export default App;

