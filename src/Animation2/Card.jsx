import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const stickyCardsData = [

  {
    index: "01",
    title: "Modularity",
    image: "/sticky-cards/card_1.jpg",
    description:
      "Every element is built to snap into place. We design modular systems where clarity, structure, and reuse come first—no clutter, no excess.",
  },
  {
    index: "02",
    title: "Scalability",
    image: "/sticky-cards/card_2.jpg",
    description:
      "Our architecture is designed to scale seamlessly as your project grows. Add new components or features without disrupting the existing structure.",
  },

];


function StickyCards() {
    const container = useRef();
    useGSAP(() => {
    const stickyCards = document.querySelectorAll(".sticky-card");
    console.log(stickyCards);
    

    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
      if (index < stickyCards.length - 1) {
            ScrollTrigger.create({
                trigger: stickyCards[index + 1],
                start: "top 100%",
                end: "top center",
                scrub: 3,
                markers: true,
                onUpdate: (self) => {
                const progress = self.progress; // Scroll progress (0 → 1)
                const scale = 1 - progress * 0.15; // Card shrinks up to 25%
                const rotation = (index % 2 === 0 ? -5 : 5) * progress; // Rotates left or right
                const afterOpacity = progress; // Darkens overlay gradually

                gsap.set(card, {
                    scale: scale,
                    rotation: rotation,
                    "--after-opacity": afterOpacity,
                });
                },
            });
        }

    });
  }, []);
  return (
    <div ref={container} className="relative w-full bg-gray-100 text-gray-900 flex flex-col  items-center justify-center">
      {stickyCardsData.map((card, i) => (
        <div
          key={i}
          className={`${i===1 ? "bg-green-400": "bg-white"} sticky-card sticky  border top-0 h-screen flex flex-col md:flex-row gap-8 w-full items-center justify-center  shadow-md transition-transform duration-300`}
        >
      
          <div className="flex-1 text-6xl md:text-8xl font-bold text-gray-300 select-none">
            {card.index}
          </div>


          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              {card.title}
            </h1>

            <div className="w-full rounded-xl overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>

            <p className="text-gray-600 leading-relaxed">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StickyCards;


