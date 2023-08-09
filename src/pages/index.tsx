import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import WindowWrapper from "@/components/WindowWrapper";
import Loading from "@/layouts/Loading";
import styled from "styled-components";
import Home from "@/views/Hero";

interface IndexProps {}

const BlockWrapContent = styled.div``;

const Index: FunctionComponent<IndexProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Promise.all([]).then(() =>
      setTimeout(() => {
        setIsLoading(false);
      }, 0)
    );
  }, []);

  return (
    <Main meta={<Meta title="" description="" image="" />}>
      {isLoading && <Loading />}
      <WindowWrapper>
        <BlockWrapContent>
          <Home />
        </BlockWrapContent>
      </WindowWrapper>
    </Main>
  );
};

export default Index;
