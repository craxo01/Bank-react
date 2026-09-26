import digital from "../img/digital.jpg";
import grow from "../img/grow.jpg";
import card from "../img/card.jpg";
import iconsvg from "../img/icons.svg";



export default function Main1() {
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>
      <div className="features">
        <Main1section>
          {" "}
          <img
            src={digital}
            data-src={digital}
            alt="Computer"
            className="features__img "
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use> {iconsvg}</use>
              </svg>
            </div>
            <h5 className="features__header">100% digital bank</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
        </Main1section>
        <Main1section>
          {" "}
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use> {iconsvg}</use>
              </svg>
            </div>
            <h5 className="features__header">Watch your money grow</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src={grow}
            data-src={grow}
            alt="Computer"
            className="features__img "
          />
        </Main1section>
        <Main1section>
          {" "}
          <img
            src={card}
            data-src={card}
            alt="Computer"
            className="features__img "
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use> {iconsvg}</use>
              </svg>
            </div>
            <h5 className="features__header">Free debit card included</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </Main1section>
      </div>
    </section>
  );
}
function Main1section({ children }) {
  return <> {children}</>;
}
