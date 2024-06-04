import React from "react";

class Gostei extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valor: "👍" };
  }

  render() {
    return(
        <>
      <button>🎵</button> {this.state.valor}
    </>
    ); 
  }
}

export default Gostei;