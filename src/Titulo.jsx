import React from "react";

class Titulo extends React.Component {
    render() {
        const handleClick = (evento) => alert(evento.target.innerText);
        return (<div>
        <div className="titulo" onClick={handleClick}>
            Titulo: {this.props.titulo}
        </div>
        <button onMouseEnter = {(e) => console.log(e.clientX)}>🎵</button>
        </div>
        );
    }
}

export default Titulo;