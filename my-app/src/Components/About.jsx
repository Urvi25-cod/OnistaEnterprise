import React from "react";
import leaf  from "../image/leaf.svg"; // Make sure to replace this with your actual path
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Decorative Leaf Image */}
      <img
        src={leaf}
        alt="Decorative Leaf"
        className="hidden md:block absolute top-20 right-0 w-50 md:w-50 lg:w-60 opacity-100"
      />

      {/* Breadcrumb */}
      <div className="mb-6 text-sm max-w-7xl mx-auto">
              <Link to={'/'}><span
                style={{ fontFamily: "Times New Roman" }}
                className="text-gray-800 hover:underline"
              >
                Home
              </span></Link>
              /{" "}
              <span
                style={{ fontFamily: "Times New Roman" }}
                className="text-gray-800"
              >
                About
              </span>
            </div>
      

      {/* Our Story */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide">
          Our Story
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Delivering elegant, story-rich, culturally inspired wall art to modern homes since 2018.
        </p>
      </section>

      {/* Our Mission */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">
          Our Mission
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
          At Oriana Wall Art, our mission is to bridge the gap between traditional craftsmanship and contemporary design, creating wall art that not only beautifies spaces but also tells stories and preserves cultural heritage.
        </p>
        <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mt-4">
          We are committed to supporting artisan communities, using sustainable materials, and bringing the rich artistic traditions of India to homes around the world.
        </p>
      </section>

      {/* Our Vision */}
      <section className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">
          Our Vision
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We envision a world where homes are not just filled with mass-produced decor, but with pieces that have soul, story, and significance. Where the ancient meets the modern, and where artisanal craftsmanship is valued and preserved.
        </p>
        <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mt-4">
          Our goal is to be the global leader in culturally inspired wall art, known for our commitment to quality, sustainability, and the preservation of artistic traditions.
        </p>
      </section>

      {/* Our Commitment to Sustainability */}
      <section className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">
          Our Commitment to Sustainability
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
          At Oriana, we believe that beautiful art shouldn’t come at the expense of our planet. Our commitment to sustainability guides every aspect of our business:
        </p>
        <ul className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto list-disc list-inside space-y-2 text-left">
          <li>We source wood only from certified sustainable forests and reclaimed materials</li>
          <li>Our packaging is plastic-free and made from recycled materials</li>
          <li>We use natural, non-toxic finishes and dyes wherever possible</li>
          <li>Our workshop operates on solar power, reducing our carbon footprint</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
