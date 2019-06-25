import React from 'react';


const getImageStyle = () => {
  return {
    height: '300px',
    width: '500px'
  }
}

const getContainerStyle = (selected) => {
  return {
    padding: '10px',
    backgroundColor: selected ? 'blue' : 'white',
    margin: '10px 10px',
    border: '2px solid red'
  }
}



const Selection = ({onSelect, src, disabled, selected}) => {
  return (
    <div className="selection" style={getContainerStyle(selected)}>
      <img src={require(`./assets/${src}`)} alt={src} style={getImageStyle()}/>
      <button disabled={disabled || selected} onClick={() => onSelect(src)}>Select</button>
    </div>
  )
}

export default Selection;