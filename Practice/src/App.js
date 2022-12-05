import React from 'react';
import ReactDOM from 'react-dom/client';
import ChildComp from './comp/ChildComp'
import ClickCounter from './comp/ClickCounter';
import ClickEvent from './comp/ClickEvent';
import Form from './comp/Form';
import Frag from './comp/Frag';
import HoverCounter from './comp/HoverCounter';
import Message from './comp/Message';
import NameList from './comp/NameList';
import WithCounter from './comp/WithCounter';
function App() {
  return(
    <div align="center" className='forms'> 
    <ClickEvent/>
    </div>
  )
  
 
}

export default App;
