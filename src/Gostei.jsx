import React from "react";

class Gostei extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valor: "👍", data: new Date() };
  }

  render() {
    console.log("render ", this.props.titulo)
    return(
        <div>
      <button onClick={() => this.setState({valor: "⭐"})}>🎵</button> {this.state.valor}
    </div>
    ); 
  }
}

export default Gostei;