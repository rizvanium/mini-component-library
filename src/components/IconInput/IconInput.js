import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--fontSize": 18 / 16 + "rem",
    "--inputHeight": 36 / 16 + "rem",
    "--borderSize": "2px",
    "--leftPadding": "36px",
  },
  small: {
    "--fontSize": 14 / 16 + "rem",
    "--inputHeight": 24 / 16 + "rem",
    "--borderSize": "1px",
    "--leftPadding": "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconStrokeWidth = size === "large" ? "2px" : "1px";
  const iconSize = size === "large" ? "24px" : "16px";
  const styles = SIZES[size];

  return (
    <IconInputContainer style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        style={styles}
        width={width + "px"}
        placeholder={placeholder}
      />
      <IconWrapper iconSize={iconSize}>
        <Icon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
      </IconWrapper>
    </IconInputContainer>
  );
};

const IconInputContainer = styled.div`
  position: relative;
  width: max-content;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  font-weight: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${(p) => p.iconSize};
  color: ${COLORS.gray500};
  pointer-events: none;
`;

const TextInput = styled.input`
  font-weight: inherit;
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  height: var(--inputHeight);
  width: ${(p) => p.width};
  border: none;
  border-bottom: revert;
  border-radius: var(--borderSize);
  font-size: var(--fontSize);
  padding-left: var(--leftPadding);

  outline-offset: 2px;

  &:hover {
    color: ${COLORS.black};
  }

  &:hover + ${IconWrapper} {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
