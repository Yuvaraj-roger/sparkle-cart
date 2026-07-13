import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Slide {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  cta: string;
  to: string;
  bg: string;
}

const slides: Slide[] = [
  {
    eyebrow: "New Season",
    title: <>Shop Local, <span>Love Local</span> Fashion</>,
    text: "Top quality shirts, trousers, and shoes at prices that make sense. Discover the SparkleCart edit.",
    cta: "Shop Now",
    to: "/category/shirts",
    bg: "https://picsum.photos/seed/sparkle-hero-1/900/600"
  },
  {
    eyebrow: "Flash Deals",
    title: <>Up to <span>40% Off</span> Sneakers</>,
    text: "Real-time stock. Real-time prices. Grab today's flash deals before the timer runs out.",
    cta: "View Deals",
    to: "/deals",
    bg: "https://picsum.photos/seed/sparkle-hero-2/900/600"
  },
  {
    eyebrow: "Wardrobe Essentials",
    title: <>Sharp <span>Trousers</span> For Every Day</>,
    text: "Tailored fits, breathable fabrics, and colors that go with everything you own.",
    cta: "Explore Trousers",
    to: "/category/trousers",
    bg: "https://picsum.photos/seed/sparkle-hero-3/900/600"
  }
];

const HeroBanner: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <div className="sc-hero">
      <div className="sc-hero-bg" style={{ backgroundImage: `url(${slide.bg})` }} />
      <div className="sc-hero-content">
        <span className="sc-hero-eyebrow">{slide.eyebrow}</span>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <Link to={slide.to} className="btn btn-sc-primary">
          {slide.cta} <i className="fa-solid fa-arrow-right ms-1" />
        </Link>
      </div>
      <div className="sc-hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
