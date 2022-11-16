import React, { Component, useState, useEffect } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
   
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>componente Clase</h1>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
        <hr />
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}

/* ********************************************** */

export const ClockHook = () => {
  const initialState = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [data, setData] = useState(initialState);

  const tick = () => {
    setData((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  };

  useEffect(() => {
    // equivalente componentDidMount()
    const timerID = setInterval(() => tick(), 1000);
   

    // equivalente componentWillUnmount()
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>componente Hook</h1>
      <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {data.nombre} {data.apellidos}
      </h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  );
};
