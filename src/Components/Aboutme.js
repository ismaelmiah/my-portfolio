import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Ismael Miah</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          This is Ismail Hosen. Now i'm a final year student of BSC in Software
          Engineering Department at Daffodil International University. I liked
          to solve a new real world problem by coding. I have been very
          passionate about computers and programming since my university life. I
          dream to be an expert software engineer so that I can build
          professional and useful software that has business value.
        </p>
      </div>
    );
  }
}

export default Aboutme;
