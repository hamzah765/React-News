import React from 'react'

import './App.css'

import Card from './card'

import first from './images/brexit.jpg'

import second from './images/money.jpg'

import third from './images/lorry.jpg'

import forth from './images/mancity.jpeg'

import fifth from './images/rugby.jpg'

import sixth from './images/ng.jpg'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div>
        <h3>News headlines</h3>
        <div>
        <Card pic={first} text="Brexit: Government pauses £100m 31 October ad campaign" topic="UK POLITICS"/>
        <Card pic={second} text="Blowing whistle on dirty money 'wrecked my life'" topic="BUSINESS"/>
        <Card pic={third} text="Essex lorry deaths: Maurice Robinson in court on manslaughter charges" topic="ESSEX"/>
        </div>
      </div>
      <div>
      <div className="sports">
        <h3>Sports headlines</h3>
        <div>
        <Card pic={forth} text="Man City v Southampton: Saints 'incredible professionals'" topic="FOOTBALL"/>
        <Card pic={fifth} text="Rugby World Cup final: England's Eddie Jones responds to Warren Gatland remark'" topic="RUGBY" id='ocean'/>
        <Card pic={sixth} text="Nigel Benn comeback fight off due to shoulder injury" topic="BOXING"/>
        </div>
        </div>
      </div>
    </div>
  );
 }
 }
 export default App;