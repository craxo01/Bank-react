import { useState } from "react";
import Header from "./header";
import Button from "./button";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Slide from "./Slide";
import Footer from "./Footer";
import App2 from "../bank/App2";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [modalactive, setmodalactive] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                modalactive={modalactive}
                setmodalactive={setmodalactive}
              />
              <Main1 />
              <Main2 />
              <Slide />
              <BeforeFooter
                modalactive={modalactive}
                setmodalactive={setmodalactive}
              />
              <Footer />
              <Modal
                modalactive={modalactive}
                setmodalactive={setmodalactive}
              />
            </>
          }
        />
        <Route path="/bank" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  );
}
function BeforeFooter({ setmodalactive, modalactive }) {
  return (
    <section className="section section--sign-up">
      <div className="section__title">
        <h3 className="section__header">
          The best day to join Bankist was one year ago. The second best is
          today!
        </h3>
      </div>
      <Button
        className="btn btn--show-modal"
        onClick={() => setmodalactive(!modalactive)}
      >
        Open your free account today!
      </Button>
    </section>
  );
}

function Modal({ modalactive, setmodalactive }) {
  return (
    <>
      <div className={`modal ${!modalactive && "hidden"}`}>
        <button
          className="btn--close-modal"
          onClick={() => setmodalactive(!modalactive)}
        >
          &times;
        </button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className="btn">Next step &rarr;</button>
        </form>
      </div>
      <div
        className={`overlay ${!modalactive && "hidden"}`}
        onClick={() => setmodalactive(!modalactive)}
      ></div>
    </>
  );
}
