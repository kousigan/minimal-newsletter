import React from "react";
import styled from "styled-components";
import { Button, Box, Stack, Typography } from "@mui/material";
import UseEditor from "../../hooks/Editor";
import * as htmlToImage from "html-to-image";
import newColorGrad from "../../hooks/ColorGen";
const PreviewComp = () => {
  const { value } = React.useContext(UseEditor);
  const domEl = React.useRef(null);
  const [imageRef, setImageRef] = React.useState({
    primaryLogo: "",
    secLogo: ""
  });

  React.useEffect(() => {
    if (value.newValGroup) {
      const file = value.newValGroup.primaryLogo;
      let temp = Object.keys(value.newValGroup);
      temp.forEach((item) => loadFile(value.newValGroup[item], item));
    }
  }, [value.newValGroup]);

  const loadFile = (file, item) => {
    console.log(file, item);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageRef({ ...imageRef, [item]: reader.result });
    });
    reader.readAsDataURL(file);
  };

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ height: "40px", margin: "16px 0" }}
      >
        <h2>Preview</h2>
        <Button variant="contained" onClick={downloadImage}>
          Download image
        </Button>
      </Stack>

      <Box
        component="div"
        id="domEl"
        ref={domEl}
        sx={{ maxWidth: "840px", margin: "0 auto" }}
      >
        <PreviewContainer
          primaryLogo={imageRef.primaryLogo}
          secLogo={imageRef.secLogo}
          articleType={value.articleType}
        />
        <HeroSection
          title={value.title}
          subtitle={value.subtitle}
          bgVal={value.bgVal}
          titleColor={value.titleColor}
          subtitleColor={value.subtitleColor}
        />
      </Box>
    </div>
  );
};

const Preview = styled(PreviewComp)``;

export default Preview;

const PreviewContainer = ({ primaryLogo, secLogo, articleType }) => (
  <Stack
    justifyContent="space-between"
    flexDirection={"row"}
    alignItems={"end"}
  >
    <Box sx={{ color: "white" }}>
      {primaryLogo ? (
        <img src={primaryLogo} alt="Preview" height="64px" />
      ) : (
        "logo1"
      )}
      {secLogo && <img src={secLogo} alt="Preview" height="64px" />}
    </Box>
    <Typography variant="h6" sx={{ padding: "0 12px" }}>
      {articleType ? articleType : "articleType"}
    </Typography>
  </Stack>
);

const HeroSection = ({ title, subtitle, bgVal, titleColor, subtitleColor }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        padding: 4,
        minHeight: "400px",
        // background: "linear-gradient(45deg, #ddd6f3, #faaca8)"
        // #ddd6f3, #faaca8
        backgroundImage: `${bgVal || "none "}`
      }}
    >
      <Typography
        className="hero"
        variant="h2"
        sx={{
          textTransform: "uppercase",
          fontWeight: "500",
          whiteSpace: "normal",
          color: `${titleColor || "grey"}`
        }}
      >
        <pre style={{ font: "inherit" }}>
          {title ? title : "Title goes here"}
        </pre>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "300",
          whiteSpace: "normal",
          color: `${subtitleColor || "grey"}`
        }}
      >
        <pre style={{ font: "inherit" }}>{subtitle && subtitle}</pre>
      </Typography>
    </Stack>
  );
};
