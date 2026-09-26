export default function HeaderMain({ total }) {
  return (
    <section className="header-main">
      <div className="header-main-left">
        <p className="header-main-text-left">Current balance</p>
        <p className="header-main-text-left-2">As of 04/07/2026, 14:04</p>
      </div>
      <p className="header-main-text-right">{total} €</p>
    </section>
  );
}