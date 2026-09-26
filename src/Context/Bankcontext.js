import { createContext, useContext, useState } from "react";
const Users = [
  {
    name: "shima",
    user: "sh",
    pin: 7777,
    money: [1000, -2000, -2500, 6800, 1700],
    locale: "en-US",
    currency: "USD",
    total: 0,
    Inventory: function () {
      let totaly = 0;
      for (const i of this.money) {
        totaly += i;
      }
      return totaly;
    },
  },
  {
    name: "meraj",
    user: "me",
    pin: 1010,
    money: [8000, -1000, -2000, 2670, 12700],
    locale: "en-US",
    currency: "USD",
    Inventory: function () {
      let totaly = 0;
      for (const i of this.money) {
        totaly += i;
      }
      return totaly;
    },
  },
  {
    name: "parsa",
    user: "pa",
    pin: 4444,
    money: [87000, 20300, -32500, -38900, -17000],
    locale: "en-US",
    currency: "USD",
    Inventory: function () {
      let totaly = 0;
      for (const i of this.money) {
        totaly += i;
      }
      return totaly;
    },
  },
];
const Bankcontext = createContext();
function BankProvider({ children }) {
  const [datausers, setdatausers] = useState(Users);
  const [dataofacc, setdataofacc] = useState([]);
  const [usertransfer, setusertransfer] = useState("");
  const [moneytransfer, setmoneytransfer] = useState("");
  const [textlog, settextlog] = useState("Log in to get started");
  const [time, settime] = useState();
  const [sort, setsort] = useState(false);
  return (
    <Bankcontext.Provider
      value={{
        dataofacc,
        setdataofacc,
        datausers,
        setdatausers,
        usertransfer,
        setusertransfer,
        moneytransfer,
        setmoneytransfer,
        textlog,
        settextlog,
        time,
        settime,
        sort,
        setsort,
      }}
    >
      {children}
    </Bankcontext.Provider>
  );
}
function useBank() {
  const context = useContext(Bankcontext);
  if (context === undefined) {
    throw new Error("jay eshtebahy estefade shode");
  }
  return context;
}
export { BankProvider, useBank };
