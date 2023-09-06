import React  from "react";
import  ReactDOM from "react-dom/client";

// Function Component

function Main(){
    return (
        <h1>Hello World {`This Is A Piece Of JS Code ${1+2}`} 111</h1>
    )
}

// Creating Root & Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);