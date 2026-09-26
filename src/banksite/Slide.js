import { useEffect, useState } from "react";
import Button from "./button.js";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg";
import user3 from "../img/user-3.jpg";

let id = crypto.randomUUID();
const slideList = [
  {
    shorttext: "Best financial decision ever!",
    longtext:
      "     Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusantium quas quisquam non? Quas voluptate nulla minimadeleniti optio ullam nesciunt, numquam corporis et asperioreslaboriosam sunt, praesentium suscipit blanditiis. Necessitatibusid alias reiciendis, perferendis facere pariatur dolore veniamautem esse non voluptatem saepe provident nihil molestiae.",
    id: id,
    img: user1,
    name: "Aarav Lynn",
    country: "San Francisco, USA",
  },
  {
    shorttext: "The last step to becoming a complete minimalist",
    longtext:
      "Quisquam itaque deserunt ullam, quia ea repellendus provident,ducimus neque ipsam modi voluptatibus doloremque, corruptilaborum. Incidunt numquam perferendis veritatis neque repellendus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illodeserunt exercitationem deleniti.",
    id: id,
    img: user2,
    name: "Miyah Miles",
    country: "London, UK",
  },
  {
    shorttext: "Finally free from old-school banks",
    longtext:
      "    Debitis, nihil sit minus suscipit magni aperiam vel teneturincidunt commodi architecto numquam omnis nulla autem,necessitatibus blanditiis modi similique quidem. Odio aliquamculpa dicta beatae quod maiores ipsa minus consequatur error sunt,deleniti saepe aliquid quos inventore sequi. Necessitatibus idalias reiciendis, perferendis facere.",
    id: id,
    img: user3,
    name: "Francisco Gomes",
    country: "Lisbon, Portugal",
  },
];
export default function Slide() {
  const [slide, setslide] = useState(0);
  const [active, setactive] = useState(0);
  const [time, settime] = useState(4);

  function handleactive(i) {
    setslide(100 * i);
    setactive(i);
  }
  function handleright(i) {
    setslide(slide + 100);
    setactive(active === slideList.length - 1 ? 0 : (slide + 100) / 100);
    settime(4)
    if (slide >= 200) setslide(0);
  }

  function handleleft(i) {
    setslide(slide - 100);
    setactive(active === 0 ? 2 : (slide - 100) / 100);
    settime(4)
    if (slide <= 0) setslide(200);
  }
  useEffect(function () {
    const id = setInterval(function () {
      settime((time) => time - 1);
    }, 1000);
    if (time===0) {
     handleright()
    }
    return () => clearInterval(id);
  }, [time,handleright]);
  return (
    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>
      <div className="slider">
        {slideList.map((item, i) => (
          <div
            className={`slide slide--${i + 1}`}
            style={{ transform: `translateX(${-slide + 100 * i}%)` }}
          >
            <div className="testimonial">
              <h5 className="testimonial__header">{item.shorttext}</h5>
              <blockquote className="testimonial__text">
                {item.longtext}
              </blockquote>
              <address className="testimonial__author">
                <img
                  src={item.img}
                  alt="user-3"
                  className="testimonial__photo"
                />
                <h6 className="testimonial__name">{item.name}</h6>
                <p className="testimonial__location">{item.country}</p>
              </address>
            </div>
          </div>
        ))}
        <Button className="slider__btn slider__btn--left" onClick={handleleft}>
          &larr;
        </Button>
        <Button
          className="slider__btn slider__btn--right "
          onClick={handleright}
        >
          &rarr;
        </Button>
        <div className="dots">
          {slideList.map((_, i) => (
            <Button
              className={`dots__dot ${active === i ? "dots__dot--active" : ""}`}
              onClick={() => handleactive(i)}
              key={i}
            ></Button>
          ))}
        </div>
      </div>
    </section>
  );
}
