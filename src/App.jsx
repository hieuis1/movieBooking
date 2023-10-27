import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import data from "./data.json";
import Chair from "./component/Chair";
import Book from "./component/Book";
function App() {
  return (
    <>
      <h2 className="mt-3 text-center">MOVIE SEAT SELECTION</h2>
      <Container>
        <div className="book">
          <div className="left">
            {data.map((item, index) => {
              return (
                <div
                  style={{ marginTop: 10 }}
                  key={index}
                  className="hangGhe d-flex"
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.hang}
                  </div>
                  <div className="d-flex gap-3">
                    {item.danhSachGhe.map((ghe) => {
                      return <Chair chair={ghe} key={ghe.soGhe}></Chair>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right">
            <Book></Book>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
