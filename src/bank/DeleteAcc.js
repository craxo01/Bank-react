import { useState } from "react";
import { useBank } from "../Context/Bankcontext";

export default function DeleteAcc() {
  const [userdelet, setuserdelet] = useState("");
  const [pindelet, setpindelet] = useState("");
  const { dataofacc, datausers, setdatausers, setdataofacc ,settextlog} = useBank();
  function handlesubmitdelet(e) {
    e.preventDefault();
    setpindelet("");
    setuserdelet("");
    if (!userdelet || !pindelet) return;
    if (userdelet !== dataofacc[0].user || pindelet !== dataofacc[0].pin)
      return;
    const delacc = datausers.map((item) =>
      item.user !== dataofacc[0].user ? item : "",
    );
    setdatausers(delacc);
    setdataofacc([]);
    settextlog("Log in to get started")
  }
  return (
    <div className="item4">
      <form onSubmit={handlesubmitdelet} className="item21">
        <p className="item2-text-header">Close account</p>
        <div className="item2-div-input">
          <input
            value={userdelet}
            onChange={(e) => setuserdelet(e.target.value)}
            className="item4-input1"
            type="text"
          />
          <input
            value={pindelet}
            onChange={(e) => setpindelet(Number(e.target.value))}
            className="item4-input2"
            type="text"
            maxlength="4"
          />
          <button className="item4-button">→</button>
        </div>
        <div className="item4-text-down">
          <p>Confirm user</p>
          <p>Confirm PIN</p>
        </div>
      </form>
    </div>
  );
}