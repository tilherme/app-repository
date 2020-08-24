import React, { useState, useEffect } from "react";
import api from './services/api'
import "./styles.css";




function App() {
  const[reposit, setReposit] = useState([]);
  
  useEffect(()=>{
    api.get('repositories').then(response =>{
   setReposit(response.data);
    })
  },[])
  async function handleAddRepository() {
 const response = await api.post('repositories',{
       title: `novo reposit ${Date.now()}`,
        url: "hhtp//git.com",
        techs: "oii cokm",
        
    })
    const reposits = response.data;
    setReposit([...reposit, reposits])
   
  }

  async function handleRemoveRepository(id) {
    
  }
  

  return (
    <div>
      
      <ul data-testid="repository-list">
        {reposit.map(reposits => <li key={reposits.id}>{reposits.title}
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
         </li>    

       
        )} </ul>
        <button type="button" onClick= {handleAddRepository}>adicionar</button>

    </div>
  );
  }


export default App;
