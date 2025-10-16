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
  {
    index: "03",
    title: "Performance",
    image: "/sticky-cards/card_3.jpg",
    description:
      "Optimized for speed and efficiency, our system ensures smooth user experiences with minimal loading times and maximum responsiveness.",
  },
  {
    index: "04",
    title: "Accessibility",
    image: "/sticky-cards/card_4.jpg",
    description:
      "Built with inclusivity in mind, our designs are accessible to everyone, ensuring usability across devices, abilities, and environments.",
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
                start: "top bottom",
                end: "top top",
                onUpdate: (self) => {
                const progress = self.progress; // Scroll progress (0 → 1)
                const scale = 1 - progress * 0.25; // Card shrinks up to 25%
                const rotation = (index % 2 === 0 ? 5 : -5) * progress; // Rotates left or right
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
    <div ref={container} className="relative w-full bg-gray-100 text-gray-900 flex flex-col gap-4  items-center justify-center">
      {stickyCardsData.map((card, i) => (
         <div
          key={i}
          className={`sticky-card sticky top-0 w-[80%] md:w-[50%] h-screen flex flex-col md:flex-row gap-8 p-6 md:p-12 items-center justify-center shadow-md transition-transform duration-300 rounded-2xl ${
            i === 0 ? "bg-green-400" : "bg-white"
          }`}
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


