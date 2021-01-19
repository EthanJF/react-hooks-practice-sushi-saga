import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoneyForm from './AddMoneyForm';

const API = "http://localhost:3001/sushis"

function App() {

  const [ sushis, setSushis ] = useState([])
  const [ plates, setPlates ] = useState([])
  const [ money, setMoney ] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(resObj => {
      const allSushis = resObj.map(eachSushi => {
        return {...eachSushi, eaten: false}
      })
      setSushis(allSushis)
      console.log(allSushis)
    })
  } , [])

  const eatSushi = (sushi) => {
    if (money >= sushi.price){
      const newSushis = sushis.map(eachSushi => {
        if(eachSushi === sushi){
          return {...eachSushi, eaten: true}
        } else {
          return eachSushi
        }
      })
      setSushis(newSushis)
      setPlates([...plates, sushi])
      setMoney((money) => money - sushi.price)
    } else {
      alert("You're out of money!")
    }
  }

  const addMoney = (newMoney) => {
    setMoney((money) => money + parseInt(newMoney))
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table money={money} plates={plates} />
      <AddMoneyForm addMoney={addMoney}/>
    </div>
  );
}

export default App;
