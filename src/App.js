import React from 'react';

import NavBar from './components/navBar/navBar.js';
import './App.css';
import ImageCard from './components/imageGrid/ImageCard.js';
import CheckBoxDisplay from './checkBoxDisplay/checkBoxDisplay.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        data: null
    }
  }

    handleCallback = (childData) =>{
    this.setState({data: childData})}


  render(){

    const {data} = this.state;
    return (
      <div>
         <NavBar/>
         <div className="main--container">
           <CheckBoxDisplay parentCallback = {this.handleCallback}/>
            <div className='cont'>
              <div className='img-grid'>
                {data}
              </div>
  
         </div>
           </div>
         
      </div>
     
    );

  }
  
}
export default App;

