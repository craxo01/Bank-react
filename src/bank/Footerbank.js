import { useEffect } from "react";
import { useBank } from "../Context/Bankcontext";

export default function Footerbank() {
  const { dataofacc, setdataofacc, time, settime, settextlog, setsort } =
    useBank();
  const min = Math.floor(time / 60);
  const secound = time % 60;

  useEffect(
    function () {
      const id = setInterval(() => settime((time) => time - 1), 1000);
      if (time === 0) {
        settextlog("Log in to get started");
        setdataofacc([]);
      }
      return () => clearInterval(id);
    },
    [time, settime, setdataofacc, settextlog],
  );
  if (!dataofacc.length) return;
  const In = dataofacc[0].money.reduce(
    (acc, mov) => (mov > 0 ? acc + mov : acc),
    0,
  );
  const out = Math.abs(
    dataofacc[0].money.reduce((acc, mov) => (mov < 0 ? acc + mov : acc), 0),
  );
  const interest = In / 100;

  return (
    <footer className="container3">
      <div className="footer-div-item">
        <p className="footer-text">IN</p>
        <p className="footer-in-money">{In} €</p>
      </div>
      <div className="footer-div-item">
        <p className="footer-text">OUt</p>
        <p className="footer-out-money">{out} €</p>
      </div>
      <div className="footer-div-item">
        <p className="footer-text">INTEREST</p>
        <p className="footer-interest-money">{interest} €</p>
      </div>
      <button className="footer-sort" onClick={() => setsort((sort) => !sort)}>
        ↓ SORT
      </button>
      <div className="time">
        <p>
          You will be logged out in {min < 10 ? "0" : ""}
          {min}:{secound < 10 ? "0" : ""}
          {secound}
        </p>
      </div>
    </footer>
  );
}