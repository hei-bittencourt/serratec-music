import React from "react";

class Titulo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gostei: "" };
  }

  render() {
    const handleClick = (evento) => alert(evento.target.innerText);
    return (      
        <div className="titulo">
          Titulo: {this.props.titulo}
        </div>
    );
  }
}

export default Titulo;
