import React from "react";
import styled from "styled-components";
import { PanelContainer } from "../../components/common";
import BgControls from "./BgControls";
const EditorComp = () => {
  return (
    <PanelContainer>
      <BgControls />
    </PanelContainer>
  );
};

const Editor = styled(EditorComp)``;

export default Editor;
