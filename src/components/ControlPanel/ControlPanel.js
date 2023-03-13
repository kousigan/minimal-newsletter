import React from "react";
import styled from "styled-components";
import { PanelContainer } from "../../components/common";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import UseEditor from "../../hooks/Editor";
const ControlPanelComp = () => {
  const { value, updateVal } = React.useContext(UseEditor);
  const primaryLogoRef = React.useRef();
  const secLogoRef = React.useRef();
  const handleChange = (event) => {
    updateVal({ ...value, [event.target.id]: event.target.value });
  };
  let newValGroup = {};
  const handleLogo1Change = (event) => {
    let temp = primaryLogoRef.current.childNodes[0].attributes["id"].value;
    newValGroup[temp] = primaryLogoRef.current.childNodes[0].files[0];
    updateVal({ ...value, newValGroup });
  };
  const handleLogo2Change = (event) => {
    // let newValName =inputRef.current.childNodes[0].attributes["id"].value.toString();
    // let newValObj={newValName:inputRef.current.childNodes[0].value}

    let temp = secLogoRef.current.childNodes[0].attributes["id"].value;
    newValGroup[temp] = secLogoRef.current.childNodes[0].files[0];
    updateVal({ ...value, newValGroup });
  };
  return (
    <PanelContainer>
      <h4>Template</h4>
      <Stack spacing={2} direction="row">
        <Button variant="text">Reset</Button>
        <Button variant="text">Save JSON</Button>
      </Stack>
      <div></div>
      <h4>Header</h4>
      <Stack spacing={2} direction="column">
        <div>
          <label htmlFor="primaryLogo">Primary Logo</label>
          <br />
          <Input
            ref={primaryLogoRef}
            type="file"
            id="primaryLogo"
            onChange={handleLogo1Change}
          />
        </div>
        <div>
          <label htmlFor="secLogo">Secondary Logo</label>
          <br />
          <Input
            type="file"
            id="secLogo"
            ref={secLogoRef}
            onChange={handleLogo2Change}
          />
        </div>
        <div>
          <TextField
            type="text"
            id="articleType"
            label="Article Type"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            style={{ height: "100px", width: "240px" }}
            id="title"
            label="Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            style={{ height: "100px", width: "240px" }}
            id="subtitle"
            label="Sub Title"
            onChange={handleChange}
          />
        </div>
      </Stack>
    </PanelContainer>
  );
};

const ControlPanel = styled(ControlPanelComp)``;

export default ControlPanel;
