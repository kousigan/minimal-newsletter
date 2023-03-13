import React from "react";
import { Preview, ControlPanel, Editor } from "../components";
import styled from "@emotion/styled";
import { Wrapper, RightPanel, LeftPanel } from "../components/common";

const CreateLetter = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <Preview />
      </LeftPanel>
      <RightPanel>
        <ControlPanel />
        <Editor />
      </RightPanel>
    </Wrapper>
  );
};

export default CreateLetter;
