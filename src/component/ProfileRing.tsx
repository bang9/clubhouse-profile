import React, { useMemo } from "react";
import styled from "styled-components";
import { Constants } from "../common";

interface IProps {
  borderWidth: number;
  startColor: string;
  endColor: string;
}

const ProfileRing: React.FC<IProps> = ({
  borderWidth,
  startColor,
  endColor,
}) => {
  const offset = useMemo(() => -(borderWidth / 2), [borderWidth]);
  const size = useMemo(() => Constants.PROFILE_SIZE + borderWidth, [
    borderWidth,
  ]);

  return (
    <Ring
      width={Constants.PROFILE_SIZE}
      height={Constants.PROFILE_SIZE}
      viewBox={`${offset} ${offset} ${size} ${size}`}
    >
      <defs>
        <linearGradient id={"linear"} x1={"0%"} y1={"50%"} x2={"50%"} y2={"0%"}>
          <stop offset={"0%"} stopColor={startColor} />
          <stop offset={"100%"} stopColor={endColor} />
        </linearGradient>
      </defs>
      <path
        fill={"transparent"}
        d={
          "M296.12,105.79c-7.64-37.42-23.92-63.13-52.78-83.37C211.89.38,162.68,0,162.18,0H146a201.25,201.25,0,0,0-40.23,3.88C68.37,11.52,42.66,27.8,22.42,56.66.38,88.11,0,137.32,0,137.82V154a201.25,201.25,0,0,0,3.88,40.23c7.64,37.42,23.92,63.13,52.78,83.37,31.45,22,80.66,22.42,81.16,22.42H154a201.25,201.25,0,0,0,40.23-3.88c37.42-7.64,63.13-23.92,83.37-52.78C299.6,211.91,300,162.7,300,162.2V146A201.07,201.07,0,0,0,296.12,105.79Zm1.73,56.39c0,.49-.37,49-22,79.92-19.9,28.38-45.2,44.39-82,51.92a199.22,199.22,0,0,1-39.8,3.83H137.82c-.49,0-49-.37-79.92-22C29.52,256,13.51,230.65,6,193.85A199.65,199.65,0,0,1,2.15,154V137.82c0-.49.37-49,22-79.92,19.9-28.38,45.2-44.39,82-51.92A199.65,199.65,0,0,1,146,2.15h16.16c.49,0,49,.37,79.92,22,28.38,19.9,44.39,45.2,51.92,82a199.22,199.22,0,0,1,3.83,39.8v16.16Z"
        }
        stroke={"url(#linear)"}
        strokeWidth={borderWidth}
      />
      <path
        d={
          "M0,0V300H300V0ZM300,162.2c0,.5-.42,49.71-22.42,81.16-20.24,28.86-46,45.14-83.37,52.78A201.25,201.25,0,0,1,154,300H137.82c-.5,0-49.71-.42-81.16-22.42-28.86-20.24-45.14-46-52.78-83.37A201.25,201.25,0,0,1,0,154V137.82c0-.5.38-49.71,22.42-81.16,20.24-28.86,46-45.14,83.35-52.78A201.25,201.25,0,0,1,146,0h16.18c.5,0,49.71.38,81.16,22.42,28.86,20.24,45.14,46,52.78,83.37A201.07,201.07,0,0,1,300,146Z"
        }
        fill={"url(#linear)"}
        stroke={"url(#linear)"}
        strokeWidth={borderWidth}
      />
    </Ring>
  );
};

const Ring = styled.svg`
  position: absolute;
  z-index: 99;
`;

export default React.memo(ProfileRing);
