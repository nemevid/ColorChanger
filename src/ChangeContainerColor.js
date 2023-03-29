import React from 'react'
import colorNames from 'colornames'
const Button = 'styled.button'

const ChangeContainerColor = ({newItem,setNewItem, handleSubmit,hexValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={handleSubmit}>

      <div className="container" style={{backgroundColor:newItem,
      color: isDarkText ? "#000" : "#FFF"}} >  
      
      <p>{newItem ? newItem : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p> </div>
      
 <input
      type="text"
      placeholder="What is your fav color?"
      value={newItem}
      onChange={(e) =>{setNewItem(e.target.value); setHexValue(colorNames(e.target.value)) }}>

      </input>

      <Button
                className="button"
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </Button>

</form>



  )
}

export default ChangeContainerColor
