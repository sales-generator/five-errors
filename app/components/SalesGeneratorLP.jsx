import React from 'react';
import Header from './Header.jsx';
import ModalForm from './ModalForm';
import MobileModalForm from  './MobileModalForm';
import  { configureAnchors} from 'react-scrollable-anchor';

class App extends React.Component{
   constructor() {
       super();
       configureAnchors({offset: 0, scrollDuration: 1000});
   }
    render() {
       return(
           <div>
               {screen.width < 1024 ? <MobileModalForm/> : <ModalForm/>}
               <Header/>
           </div>
       )
   }
}

export default App;