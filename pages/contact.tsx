import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

export default function contact() {
  return (
    //@ts-expect-error
    <ContainerBlock title="Contact - Carson Ricca">
      <Contact />
    </ContainerBlock>
  );
}
