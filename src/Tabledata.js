//import List from './Listitem';
//import Menu from './Menu';
import './App.css';
import { useEffect } from 'react';

function Tabledata({value,indexval,tableshow}) {

  useEffect(()=>{
    console.log("heelo",{value})
  })

  return (
   
      <tr key={indexval} onClick={((e) => tableshow(e, value))} >
        
                                <td>{value?.id}</td>
                                <td>{value?.name}</td>
                                <td>{value?.mail}</td>
                                <td>{value?.adress}</td>
                              </tr>

  );
}

export default Tabledata;
