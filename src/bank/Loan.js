import { useState } from "react";
import { useBank } from "../Context/Bankcontext";
export default function Loan() {
  const { dataofacc, datausers, setdataofacc, setdatausers } = useBank();
  const [loan, setloan] = useState("");
  function handlesubmitloan(e) {
    e.preventDefault();
    setloan("");
    if (!loan) return;
    const maxmoney = Math.max(...dataofacc[0].money);
    if (maxmoney < loan / 10) return;

    const plusaccount = datausers.map((item) =>
      item.user === dataofacc[0].user
        ? { ...item, money: [...item.money, loan] }
        : item,
    );
    const newdata = plusaccount.filter(
      (item) => item.user === dataofacc[0].user,
    );
    setdatausers(plusaccount);
    setdataofacc(newdata);
    setloan("");
  }
  return (
    <div className="item3">
      <form onSubmit={handlesubmitloan} className="item21">
        <p className="item2-text-header">Request loan</p>
        <div className="item2-div-input">
          <input
            value={loan}
            onChange={(e) => setloan(Number(e.target.value))}
            className="item3-input"
            type="number"
          />
          <button className="item3-button">→</button>
        </div>
        <div className="item3-text-down">
          <p>Amount</p>
        </div>
      </form>
    </div>
  );
}