import React from "react"

const Footer =()=>{
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>Surfing-right ⓒ {currentYear}</p>
      </footer>
    );
}

export default Footer