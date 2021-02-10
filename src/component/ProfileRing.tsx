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
          "M296.12,105.79c-7.64-37.42-23.92-63.13-52.78-83.37C211.89.38,162.68,0,162.18,0H146a201,201,0,0,0-40.23,3.88C68.37,11.52,42.66,27.8,22.42,56.66.38,88.11,0,137.32,0,137.82V154a201,201,0,0,0,3.88,40.23c7.64,37.42,23.92,63.13,52.78,83.37,31.45,22,80.66,22.42,81.16,22.42H154a201,201,0,0,0,40.23-3.88c37.42-7.64,63.13-23.92,83.37-52.78,22-31.45,22.42-80.66,22.42-81.16V146A201,201,0,0,0,296.12,105.79Zm1.73,56.39c0,.49-.37,49-22,79.92-19.9,28.38-45.2,44.39-82,51.92a199.61,199.61,0,0,1-39.8,3.83H137.82c-.49,0-49-.37-79.92-22-28.38-19.9-44.39-45.2-51.92-82A199.61,199.61,0,0,1,2.15,154V137.82c0-.49.37-49,22-79.92,19.9-28.38,45.2-44.39,82-51.92A199.61,199.61,0,0,1,146,2.15h16.16c.49,0,49,.37,79.92,22,28.38,19.9,44.39,45.2,51.92,82a199.61,199.61,0,0,1,3.83,39.8v16.16Z"
        }
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
