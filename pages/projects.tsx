import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

export default function projects() {
  return (
    //@ts-expect-error
    <ContainerBlock title="Projects - Carson Ricca">
      <Projects />
    </ContainerBlock>
  );
}
