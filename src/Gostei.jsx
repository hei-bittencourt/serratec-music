import React from "react";

class Gostei extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valor: "👍", votou: false };
  }

  render() {
    console.log("render ", this.props.titulo)
    console.log("valor ", this.state.valor)

    const handleVoto = () => {
        this.setState({valor: "⭐", votou: true})
    };

    return(
        <div>
      <button disabled={this.state.votou} onClick={handleVoto}>🎵</button> {this.state.valor}
    </div>
    ); 
  }
}

export default Gostei;