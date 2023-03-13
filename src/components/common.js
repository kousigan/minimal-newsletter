import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  height: calc(100vh - 48px);
`;
const LeftPanel = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const RightPanel = styled("div")`
  display: flex;
  flex-direction: column;
  background: lightgray;
  margin: 0 -12px 0 12px;
  padding: 0 12px;
  width: 480px;
`;
const PanelContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 0;
`;

export { Wrapper, LeftPanel, RightPanel, PanelContainer };
