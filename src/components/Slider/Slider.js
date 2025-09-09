import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  Slide,
  SlideImage,
  Dots,
  Dot
} from '../Slider/SliderStyles';

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "/images/rim.png",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "/images/net 1.png",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    image: "/images/ject 1.png",
  },
  {
    title: "Project Four",
    description: "Description for project four.",
    image: "/images/ject2.png",
  },
  {
    title: "Project Five",
    description: "Description for project five.",
    image: "/images/ject3.png",
  },
  {
    title: "Project Six",
    description: "Description for project six.",
    image: "/images/pro1.png",
  },
  {
    title: "Project Seven",
    description: "Description for project seven.",
    image: "/images/pro2.png",
  },
  {
    title: "Project Eight",
    description: "Description for project eight.",
    image: "/images/pro3.png",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <SliderContainer>
      <h2 style={{ textAlign: "center", margin: "24px 0 8px", fontWeight: 700 , color: "#23336eff"}}>
        Recent Workflow
      </h2>
      <Slide>
        <SlideImage
          src={projects[current].image}
          alt={projects[current].title}
        />
        <div style={{ marginLeft: "24px" }}>
          <h3>{projects[current].title}</h3>
          <p>{projects[current].description}</p>
        </div>
      </Slide>
      <Dots>
        {projects.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === current}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
}

export default Slider;