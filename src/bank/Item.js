
import { useBank } from "../Context/Bankcontext";
export default function Item() {
  const { dataofacc, sort } = useBank();

  return (
    <div className="item1">
      {!sort
        ? dataofacc[0]?.money
            .slice()
            .reverse()
            .map((item, i) => (
              <ItemName item={item} i={dataofacc[0].money.length - i} key={i} />
            ))
        : [...dataofacc[0]?.money]
            .sort((a, b) => b - a)
            .map((item, i) => (
              <ItemName item={item} i={dataofacc[0].money.length - i} key={i} />
            ))}
    </div>
  );
}

function ItemName({ item, i }) {
  return (
    <div className="item12">
      <div
        className={`item1-number item1-number-${item > 0 ? "positive" : "negative"}`}
      >
        {i} {item > 0 ? `desposit` : `withdrawal`}
      </div>
      <div className="item1-date">Today</div>
      <div className="item1-money">{item} €</div>
    </div>
  );
}
////////////
