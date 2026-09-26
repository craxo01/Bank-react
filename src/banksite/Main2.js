import { useState } from "react";
import Button from "./button";
import iconsvg from "../img/icons.svg";
const activebutton = [
  {
    shorttext: "Tranfser money to anyone, instantly! No fees, no BS.",
    longtext:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    text: "Transfers",
    id: 1,
  },
  {
    shorttext: " Buy a home or make your dreams come true, with instant loans.",
    longtext:
      "  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    text: "Loans",
    id: 2,
  },
  {
    shorttext: " No longer need your account? No problem! Close it instantly.",
    longtext:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.",
    text: "Close",
    id: 3,
  },
];
export default function Main2() {
  const [select, setselect] = useState(1);

  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          {activebutton.map((item) => (
            <Button
              key={item.id}
              onClick={() => setselect(select === item.id ? item.id : item.id)}
              className={`btn operations__tab operations__tab--${item.id} ${select === item.id ? "operations__tab--active" : ""}
            `}
              data-tab="1"
            >
              <span>0{item.id}</span>Instant {item.text}
            </Button>
          ))}
        </div>
        {activebutton.map((item,i) => (
          <div
            className={`operations__content operations__content--${item.id} ${select === item.id && "operations__content--active"}`}
            
          >
            <div className={`operations__icon operations__icon--${item.id}`}>
              <svg>
                <use> {iconsvg}</use>
              </svg>
            </div>
            <h5 className="operations__header">{item.shorttext}</h5>
            <p>{item.longtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}