import react from 'react'

function Card({ title, description, buttonText }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      marginLeft: "420px",
      backgroundColor: "white"
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  )
}

export default Card