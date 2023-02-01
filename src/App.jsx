import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);
  const anotar = (numero) => {
    setCount([numero, ...count]);
    console.log(count);
  };
  function Boton({ numero, color, cajas, fila }) {
    return (
      <div className={`boton ${color} ${cajas}`} onClick={() => anotar(numero)}>
        <span className={`${fila} morado`}>{numero}</span>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="containerNumerParrilla">
        <div className="contenedorParrilla">
          <Boton
            numero="3"
            color={"rojo"}
            cajas={"cajaAzul"}
            fila={"naranja"}
          />
          <Boton numero="6" cajas={"cajaAzul"} />
          <Boton numero="9" color={"rojo"} cajas={"cajaAzul"} />
          <Boton numero="12" color={"rojo"} cajas={"cajaAzul"} />
          <Boton numero="15" cajas={"cajaAmarrilla"} />
          <Boton numero="18" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="21" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="24" cajas={"cajaAmarrilla"} />
          <Boton numero="27" color={"rojo"} cajas={"cajaRosa"} />
          <Boton numero="30" cajas={"cajaRosa"} color={"rojo"} />
          <Boton numero="33" cajas={"cajaRosa"} />
          <Boton numero="36" cajas={"cajaRosa"} color={"rojo"} />
          <Boton numero="2" cajas={"cajaAzul"} />
          <Boton numero="5" color={"rojo"} cajas={"cajaAzul"} />
          <Boton numero="8" cajas={"cajaAzul"} />
          <Boton numero="11" cajas={"cajaAzul"} />
          <Boton numero="14" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="17" cajas={"cajaAmarrilla"} />
          <Boton numero="20" cajas={"cajaAmarrilla"} />
          <Boton numero="23" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="26" cajas={"cajaRosa"} />
          <Boton numero="29" cajas={"cajaRosa"} />
          <Boton numero="32" cajas={"cajaRosa"} color={"rojo"} />
          <Boton numero="35" cajas={"cajaRosa"} />
          <Boton numero="1" color={"rojo"} cajas={"cajaAzul"} />
          <Boton numero="4" cajas={"cajaAzul"} />
          <Boton numero="7" color={"rojo"} cajas={"cajaAzul"} />
          <Boton numero="10" cajas={"cajaAzul"} />
          <Boton numero="13" cajas={"cajaAmarrilla"} />
          <Boton numero="16" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="19" color={"rojo"} cajas={"cajaAmarrilla"} />
          <Boton numero="22" cajas={"cajaAmarrilla"} />
          <Boton numero="25" cajas={"cajaRosa"} color={"rojo"} />
          <Boton numero="28" cajas={"cajaRosa"} />
          <Boton numero="31" cajas={"cajaRosa"} />
          <Boton numero="34" cajas={"cajaRosa"} color={"rojo"} />
        </div>
        <div className="lastNumberContainer">
          {count.slice(0, 11).map((numero) => (
            <span className="ultimoNumer">{numero}</span>
          ))}
        </div>
      </div>
      <div className="solutionContainer">
        <div className="cajasSolutionContainer">
          {count.slice(0, 11).map((numero, index) => {
            let caja;
            switch (numero) {
              case "1":
                caja = "azul";
                break;
              case "2":
                caja = "azul";
                break;
              case "3":
                caja = "azul";
                break;
              case "4":
                caja = "azul";
                break;
              case "5":
                caja = "azul";
                break;
              case "6":
                caja = "azul";
                break;
              case "7":
                caja = "azul";
                break;
              case "8":
                caja = "azul";
                break;
              case "9":
                caja = "azul";
                break;
              case "10":
                caja = "azul";
                break;
              case "11":
                caja = "azul";
                break;
              case "12":
                caja = "azul";
                break;
              case "13":
                caja = "amarillo";
                break;
              case "14":
                caja = "amarillo";
                break;
              case "15":
                caja = "amarillo";
                break;
              case "16":
                caja = "amarillo";
                break;
              case "17":
                caja = "amarillo";
                break;
              case "18":
                caja = "amarillo";
                break;
              case "19":
                caja = "amarillo";
                break;
              case "20":
                caja = "amarillo";
                break;
              case "21":
                caja = "amarillo";
                break;
              case "22":
                caja = "amarillo";
                break;
              case "23":
                caja = "amarillo";
                break;
              case "24":
                caja = "amarillo";
                break;
            }

            if (caja == "azul") {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div> <CajaAzul />{" "}
                  {numero}
                </div>
              );
            } else if (caja == "amarillo") {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div>
                  <CajaAmarrila /> <div>{numero}</div>
                </div>
              );
            } else {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div>
                  <CajaRosa /> {numero}
                </div>
              );
            }
          })}
        </div>
        <div className="filasContainer">
          {count.slice(0, 11).map((numero, index) => {
            let caja;
            switch (numero) {
              case "3":
                caja = "azul";
                break;
              case "6":
                caja = "azul";
                break;
              case "9":
                caja = "azul";
                break;
              case "12":
                caja = "azul";
                break;
              case "15":
                caja = "azul";
                break;
              case "18":
                caja = "azul";
                break;
              case "21":
                caja = "azul";
                break;
              case "24":
                caja = "azul";
                break;
              case "27":
                caja = "azul";
                break;
              case "30":
                caja = "azul";
                break;
              case "33":
                caja = "azul";
                break;
              case "36":
                caja = "azul";
                break;
              case "2":
                caja = "amarillo";
                break;
              case "5":
                caja = "amarillo";
                break;
              case "8":
                caja = "amarillo";
                break;
              case "11":
                caja = "amarillo";
                break;
              case "14":
                caja = "amarillo";
                break;
              case "17":
                caja = "amarillo";
                break;
              case "20":
                caja = "amarillo";
                break;
              case "23":
                caja = "amarillo";
                break;
              case "26":
                caja = "amarillo";
                break;
              case "29":
                caja = "amarillo";
                break;
              case "32":
                caja = "amarillo";
                break;
              case "35":
                caja = "amarillo";
                break;
            }

            if (caja == "azul") {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div>
                  <FilaMorada />
                  {numero}
                </div>
              );
            } else if (caja == "amarillo") {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div>
                  <FilaVerde /> <div>{numero}</div>
                </div>
              );
            } else {
              return (
                <div className="contenedorCaja">
                  <div className="ranking">#{index + 1}</div>
                  <FilaRoja /> {numero}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

function CajaAzul() {
  return <div className="cajaContainerAzul">Caja Azul</div>;
}

function CajaAmarrila() {
  return <div className="cajaContainerAmarilla">Caja Amarrila</div>;
}

function CajaRosa() {
  return <div className="cajaContainerRosa">Caja Rosa</div>;
}

function FilaMorada() {
  return (
    <div className="FilaContainerMorada">3 6 9 12 15 18 21 24 27 30 33 36</div>
  );
}

function FilaVerde() {
  return (
    <div className="FilaContainerVerde">2 5 8 11 14 17 20 23 26 29 32 35</div>
  );
}

function FilaRoja() {
  return (
    <div className="FilaContainerRoja">1 4 7 10 13 16 19 22 25 28 31 34</div>
  );
}

export default App;
