import { useTransform, useViewportScroll } from "framer-motion";
import { motion } from 'framer-motion';
import { InputRange } from "framer-motion/types/value/use-transform";
import InitialText from "../components/InitialText";
import Cards from "../components/Cards";
import Scene from "../components/Scene";
import Label3d from "../components/Label3d";
import Form from "../components/Form";
import { useMediaQuery } from "@react-hook/media-query";
import React from "react";

const cardsData = [
  {
    title: "Design unique",
    subtitle:
      "Design tah les trucs de batard que personne ne peut voir tellement c'est insane de ouf.",
  },
  {
    title: "A la pointe de la tehcno",
    subtitle: "sisi la miff, on est trop fort, on a fait un truc de ouf.",
  },
  {
    title: "Des matériaux de qualité",
    subtitle: "Pour une durée de vie de 100 ans minimum.",
  },
  {
    title: "Confortable",
    subtitle: "Confort comme dans une chatte avec cette petite merveille.",
  },
];

export function useAnimation(input: InputRange, output: number[]) {
  const { scrollYProgress } = useViewportScroll();

  return useTransform(scrollYProgress, input, output);
}

function App() {
  const isLessThen1500 = useMediaQuery("(max-width: 1500px)");
  const isLessThen1200 = useMediaQuery("(max-width: 1800px)");
  const opacity = useAnimation(
    [0, 0.2001, 0.2668, 0.9, 1],
    [0, 0, 1, 1, isLessThen1200 ? 0 : 1]
  );

  return (
    <div  style={{overflow: "hidden"}}>
      <motion.div
        style={{
          width: "100%",
          height: "100vh",
          position: "sticky",
          top: 0,
          zIndex: 10,
          opacity,
        }}
      >
        <Scene />
      </motion.div>
      <div
        style={{
          width: "100%",
          height: "800vh",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: isLessThen1500 ? 11 : 0,
          }}
        >
          <InitialText />
          <Cards cards={cardsData} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "end",
          paddingBottom: isLessThen1200 ? 48 : 200,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Form />
        <Label3d />
      </div>
    </div>
  );
}

export default App;
