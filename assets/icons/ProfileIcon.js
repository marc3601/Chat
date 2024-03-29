import React from 'react';
import {Svg, Circle, Path, G, Mask} from 'react-native-svg';
const ProfileIcon = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="32" cy="32" r="32" fill="#E9EAEE" />
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="64"
        height="64"
      >
        <Circle cx="32" cy="32" r="32" fill="#E9EAEE" />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z"
          fill="#BFC1CC"
        />
        <Path
          d="M32 32C51.33 32 67 47.67 67 67C67 86.33 51.33 102 32 102C12.67 102 -3 86.33 -3 67C-3 47.67 12.67 32 32 32Z"
          fill="#BFC1CC"
        />
      </G>
    </Svg>
  );
};

export default ProfileIcon;
