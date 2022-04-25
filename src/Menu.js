//import List from './Listitem';
//import './App.css';
import React, { useState, useEffect } from 'react';
import './List.css';

function Menu ({value,ondisplay,oneditItem})  {
    return(
    <p><section className='text'>
         <section><button  className="add-btn" onClick={ () =>ondisplay(value?.id)} >{value && value.name}</button></section>
        <section> <button className="Editbtn" onClick={() => oneditItem(value?.id)} >Edit</button><br></br></section> 
    </section></p>  
    );
}

export default Menu;
