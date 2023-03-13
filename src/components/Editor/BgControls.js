import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import styled from "styled-components";
import newColorGrad from "../../hooks/ColorGen";
import UseEditor from "../../hooks/Editor";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TitleColors from "./colors";

const ColorButton = styled(Button)`
  width: auto;
  height: 24px;
`;

export default function BgControls() {
  const { value, updateVal } = React.useContext(UseEditor);

  const handleChange = (event) => {
    console.log(event.target.dataset.token, event.target.dataset.value);
    updateVal({
      ...value,
      [event.target.dataset.token]: event.target.dataset.value
    });
  };
  let Buttons = [];
  for (let i = 0; i < 10; i++) {
    Buttons.push(newColorGrad(false, 50, 100, 0, i));
  }
  for (let i = 0; i < 10; i++) {
    Buttons.push(newColorGrad(false, 500, 100, 0, i));
  }
  for (let i = 0; i < 10; i++) {
    Buttons.push(newColorGrad(true, 50, 100, 0, i));
  }
  for (let i = 0; i < 10; i++) {
    Buttons.push(newColorGrad(true, 500, 100, 0, i));
  }
  return (
    <>
      <Stack flexDirection="row" gap={1}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="bgColorSelectorLabel">Bg Color</InputLabel>
            <Select
              labelId="bgColorSelectorLabel"
              id="bgColorSelector"
              label="Bg Color"
              defaultValue=""
            >
              {Buttons.map((item, i) => (
                <MenuItem
                  value={item}
                  key={i}
                  data-token={"bgVal"}
                  onClick={handleChange}
                >
                  <ColorButton
                    disabled
                    sx={{ background: item, borderColor: "transparent" }}
                  ></ColorButton>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="titleColorSelectorLabel">Title Color</InputLabel>
            <Select
              labelId="titleColorSelectorLabel"
              id="TitleColorSelector"
              label="Title Color"
              defaultValue=""
            >
              {TitleColors.map((item, i) => (
                <MenuItem
                  value={item.color}
                  key={i}
                  data-token={"titleColor"}
                  onClick={handleChange}
                >
                  <ColorButton
                    disabled
                    sx={{ background: item.color, borderColor: "transparent" }}
                  ></ColorButton>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="subtitleColorSelectorLabel">Sub Title</InputLabel>
            <Select
              labelId="subtitleColorSelectorLabel"
              id="subTitleColorSelector"
              label="Title Color"
              defaultValue=""
            >
              {TitleColors.map((item, i) => (
                <MenuItem
                  value={item.color}
                  key={i}
                  data-token={"subtitleColor"}
                  onClick={handleChange}
                >
                  <ColorButton
                    disabled
                    sx={{ background: item.color, borderColor: "transparent" }}
                  ></ColorButton>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
}
