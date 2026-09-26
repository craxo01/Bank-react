import { useBank } from "../Context/Bankcontext";
import { useState } from "react";
import logo from "../img/logo.png";
import Button from "../banksite/button.js";
export default function Headerbank() {
  const [pin, setpin] = useState("");
  const [user, setuser] = useState("");
  const {
    settextlog,
    datausers,
    setdataofacc,
    settime,
    setmoneytransfer,
    setusertransfer,
    textlog,
  } = useBank();
  function handleonsubmit(e) {
    e.preventDefault();
    if (!user && !pin) return;
    if (!user) settextlog("Enter your user");
    if (!pin) settextlog("Enter your pass");

    const account = datausers.filter(
      (item) => item.user === user && item.pin === pin,
    );
    setdataofacc(account);
    settime(120);
    if (user && pin)
      settextlog(
        account.length === 0
          ? "Wrong your user or pass"
          : `Welcome back, ${account[0].name}`,
      );
    setpin("");
    setuser("");
    setmoneytransfer("");
    setusertransfer("");
  }

  return (
    <header className="container1 header-style">
      <p>{textlog}</p>
      <img src={logo} alt="" />
      <form onSubmit={handleonsubmit}>
        <input
          value={user}
          onChange={(e) => setuser(e.target.value)}
          className="input-header1"
          type="text"
          placeholder="user"
        />
        <input
          value={pin}
          onChange={(e) => setpin(Number(e.target.value))}
          className="input-header2"
          type="text"
          placeholder="PIN"
          maxlength="4"
        />
        <Button className="button-header">→</Button>
      </form>
    </header>
  );
}