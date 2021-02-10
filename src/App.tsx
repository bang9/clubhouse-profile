import React, { useCallback, useState, Fragment } from "react";
import styled from "styled-components";
import d2i from "dom-to-image";

import { Constants } from "./common";

import ProfileRing from "./component/ProfileRing";
import ProfileImage from "./component/ProfileImage";
import ControlRow from "./component/ControlRow";
import UploadLabel from "./component/UploadLabel";
import Palette from "./component/Palette";
import Slider from "./component/Slider";
import DownloadLabel from "./component/DownloadLabel";
import Divider from "./component/Divider";
import Footer from "./component/Footer";
import Header from "./component/Header";

const PROFILE_SIZE = 300;
function App() {
  const [image, setImage] = useState<string>();

  const [startColor, setStartColor] = useState(Constants.DEFAULT_START_COLOR);
  const [endColor, setEndColor] = useState(Constants.DEFAULT_END_COLOR);
  const [scale] = useState(Constants.DEFAULT_EXPORT_SCALE);
  const [borderWidth, setBorderWidth] = useState(
    Constants.DEFAULT_BORDER_WIDTH
  );

  const onChangeImage = useCallback((event: any) => {
    const url = URL.createObjectURL(event.currentTarget.files?.[0]);
    setImage(url);
  }, []);

  const onSave = useCallback(() => {
    const node = document.getElementById("capture-area")!;

    const style = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style,
    };

    d2i.toPng(node, param).then(function (url: string) {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `clubhouse_profile_${Date.now()}.png`;
      anchor.click();
    });
  }, [scale]);

  return (
    <Fragment>
      <Header>
        <div>{"👋 Clubhouse profile"}</div>
        <p>
          {
            "Not official! This page is not, and never was operated by or affiliated with Clubhouse"
          }
        </p>
      </Header>

      <Container>
        <CaptureAreaWrapper>
          <CaptureArea id={"capture-area"}>
            <ProfileRing
              startColor={startColor}
              endColor={endColor}
              borderWidth={borderWidth}
            />
            {image && (
              <ProfileImage
                src={image}
                width={PROFILE_SIZE}
                height={PROFILE_SIZE}
              />
            )}
          </CaptureArea>
        </CaptureAreaWrapper>

        <ControlRow style={{ marginBottom: 16 }}>
          <Palette color={startColor} onChangeColor={setStartColor} />
          <Palette color={endColor} onChangeColor={setEndColor} />
        </ControlRow>

        <ControlRow style={{ marginBottom: 16 }}>
          <Slider
            type={"range"}
            id={"border-width"}
            min={"1"}
            max={"30"}
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.currentTarget.valueAsNumber)}
          />
        </ControlRow>
        <ControlRow>
          <UploadLabel htmlFor={"upload-image"}>{"Upload"}</UploadLabel>
          <input
            hidden
            id={"upload-image"}
            type={"file"}
            accept={"image/*"}
            onChange={onChangeImage}
          />
        </ControlRow>

        <Divider />

        <ControlRow>
          <DownloadLabel htmlFor={"download-profile"}>{"Save"}</DownloadLabel>
          <input
            hidden
            id={"download-profile"}
            type={"button"}
            onClick={onSave}
          />
        </ControlRow>
      </Container>

      <Footer>
        <a href={Constants.GITHUB}>
          <svg viewBox={"0 0 24 24"} width={32} height={32}>
            <path
              fill={"#797979"}
              d={
                "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
              }
            />
          </svg>
        </a>
      </Footer>
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 320px;
  min-height: 80vh;
`;

const CaptureAreaWrapper = styled.div`
  padding: 8px;
  border: 1px dashed lightseagreen;
  border-radius: 16px;
  margin-bottom: 8px;
`;

const CaptureArea = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 16px;
`;

export default App;
