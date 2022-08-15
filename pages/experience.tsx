import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Experience from "../components/Experience";

export default function experience() {
  return (
    //@ts-expect-error
    <ContainerBlock title="Experience - Carson Ricca">
      <Experience />
    </ContainerBlock>
  );
}
