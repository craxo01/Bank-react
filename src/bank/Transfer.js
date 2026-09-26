import { useBank } from "../Context/Bankcontext";
export default function Transfer({ total }) {
  const {
    usertransfer,
    setusertransfer,
    moneytransfer,
    setmoneytransfer,
    dataofacc,
    datausers,
    setdatausers,
    setdataofacc,
  } = useBank();
  function handlesubmit_transfer(e) {
    e.preventDefault();
    setusertransfer("");
    setmoneytransfer("");
    if (!usertransfer || !moneytransfer) return;
    if (moneytransfer > total) return;
    if (usertransfer === dataofacc[0].user) return;
    let available = datausers.some((item) => item.user === usertransfer);
    if (!available) return;

    const plusaccount = datausers.map((item) =>
      item.user === usertransfer
        ? { ...item, money: [...item.money, moneytransfer] }
        : item,
    );
    const negaccount = plusaccount.map((item) =>
      item.user === dataofacc[0].user
        ? { ...item, money: [...item.money, -moneytransfer] }
        : item,
    );

    const newdata = negaccount.filter(
      (item) => item.user === dataofacc[0].user,
    );

    setdatausers(negaccount);
    setdataofacc(newdata);
  }
  return (
    <div className="item2">
      <div className="item21">
        <p className="item2-text-header">Transfer money</p>
        <form onSubmit={handlesubmit_transfer} className="item2-div-input">
          <input
            value={usertransfer}
            onChange={(e) => setusertransfer(e.target.value)}
            className="item2-input"
            type="text"
          />
          <input
            value={moneytransfer}
            onChange={(e) => setmoneytransfer(Number(e.target.value))}
            className="item2-input"
            type="number"
          />
          <button className="item2-button">→</button>
        </form>
        <div className="item2-text-down">
          <p>Transfer to</p>
          <p>Amount</p>
        </div>
      </div>
    </div>
  );
}