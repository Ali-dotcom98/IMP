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


function NewCard() {
    const container = useRef();
    useGSAP(() => {
    const stickyCards = document.querySelectorAll(".sticky-card");
    console.log(stickyCards);
    

    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length ) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
     

    });
  }, []);
  return (
    <div ref={container} className="relative w-full bg-gray-100 text-gray-900 flex flex-col gap-4  items-center justify-center">
      {stickyCardsData.map((card, i) => (
        <div
          key={i}
          className="sticky-card sticky w-[70%] h-screen md:w-[60%] border my-4 top-0  flex flex-col md:flex-row gap-8 p-6 md:p-12 items-center justify-center bg-white shadow-md transition-transform duration-300"
        > 
            
            <div>
                <div className="flex-1 text-6xl md:text-8xl font-bold text-gray-300 select-none">
            {card.index}
          </div>


          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              {card.title}
            </h1>



            <p className="text-gray-600 leading-relaxed">{card.description}</p>
          </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default NewCard;


