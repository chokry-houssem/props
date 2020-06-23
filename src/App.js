import React , {Component} from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Cars from './component/MyCars'; 

const Catalogue = 
  [
    {Mark:"Ford" , color:"blue", model:"2020" , price:"$73,900"},
    {Mark:"BMW" ,color:"black" , model:"2019", price:"$43,900"},
    {Mark:"Marcedes" ,color:"green" , model:"2018" , price:"$26,900"},
    {Mark:"Audi" ,color:"white", model:"2017" , price:"$34,900"}
]


class App extends Component {
 

  render() {
    return (
        <div className="App">
          <h1>My Catalogue Cars</h1>
          <Cars x={Catalogue}/>
        </div>
      );
  }
 
}

export default App;
