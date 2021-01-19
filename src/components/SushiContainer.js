import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, eatSushi}) {

  const [ startIndex, setStartIndex ] = useState(0)
  const [ endIndex, setEndIndex ] = useState(4)

  const renderedSushi = sushis.map((eachSushi) => {
    return <Sushi key={eachSushi.id} eatSushi={eatSushi} sushi={eachSushi}/>
  }).slice(startIndex, endIndex)

  const handleMoreButtonClick = () => {
    if(endIndex < sushis.length - 1){
      setStartIndex((startIndex) => startIndex + 4)
      setEndIndex((endIndex) => endIndex + 4)
    } else {
      setStartIndex(0)
      setEndIndex(4)
    }
  
  }

  return (
    <div className="belt">
      {renderedSushi}
      <MoreButton handleMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
