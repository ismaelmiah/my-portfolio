import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Ismael Miah</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          This is Ismail Hosen.  I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines. I liked
          to solve a new real world problem by coding.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.I
          dream to be an expert software engineer so that I can build
          professional and useful software that has business value.
        </p>
      </div>
    );
  }
}

export default Aboutme;
