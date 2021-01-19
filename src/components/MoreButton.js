import React from "react";

function MoreButton({handleMoreButtonClick}) {

  const handleClick = () => {
    handleMoreButtonClick()
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
