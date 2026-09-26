import { useBank } from "../Context/Bankcontext";
import DeleteAcc from "./DeleteAcc";
import HeaderMain from "./HeaderMain";
import Item from "./Item";
import Loan from "./Loan";
import Transfer from "./Transfer";

export default function MainBank() {
  const { dataofacc } = useBank();
  let total = 0;
  const Inventory = dataofacc[0]?.money.map((item) => (total += item));
  if (!dataofacc.length) return;
  return (
    <main className="container2">
      <HeaderMain total={total} />
      <section className="grid-section-2">
        <Item />
        <Transfer total={total} />
        <Loan />
        <DeleteAcc />
      </section>
    </main>
  );
}