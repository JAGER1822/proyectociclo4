const Formulario = ( ) => {
    const handleInputChange = () =>
    {}
    return(
        <>
        <div class="row">        
            <div className="col"> 1ra C  </div>
                        
              <div class="col"> 2da C  <h5>Formulario </h5> 
              <form>
                <div className="col-md-3">
                    <input 
                    placeholder= "Ingrese Nombre"
                    className="Form-control"
                    name= "nombre"
                    onChange={handleInputChange}
                    Type= "text" />  
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder= "Ingrese Apellido"
                    className="Form-control"
                    name= "apellido"
                    onChange={handleInputChange}
                    Type= "text"/>  
                </div>
                
                <div className="col-md-3">
                    <button className= "btn btn-info" type= "submit"> ENVIAR </button>  
                </div>


              </form>
            
            
            
              </div>
        </div>  
        
        </>
    )
}

export default Formulario