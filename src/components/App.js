import React from "react";
import styled from "styled-components";

import { TweetProvider } from "./TweetContext";
import Tweet from "./Tweet";

const App = () => {
  return (
    <TweetProvider>
      <Wrapper>
        <Tweet />
      </Wrapper>
    </TweetProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
