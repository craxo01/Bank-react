import { useEffect, useState } from "react";


import { BankProvider, useBank } from "../Context/Bankcontext.js";
import Headerbank from "./Headerbank.js";
import MainBank from "./MainBank.js";
import Footerbank from "./Footerbank.js";
export default function App() {
  return (
    <BankProvider>
      <Headerbank />
      <MainBank />
      <Footerbank />
    </BankProvider>
  );
}

