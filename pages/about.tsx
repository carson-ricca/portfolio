import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    //@ts-expect-error
    <ContainerBlock title="About Me - Carson Ricca">
      <AboutMe />
    </ContainerBlock>
  );
}
