/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": 0,
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": 0,
    "--borderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--borderRadius": "8px",
  },
};

function getSanitizedValue(value) {
  if (value < 0) {
    value = 0;
  } else if (value > 100) {
    value = 100;
  }
  return value;
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const sanitizedValue = getSanitizedValue(value);
  return (
    <ProgressContainer
      style={styles}
      role="progressbar"
      aria-valuenow={sanitizedValue}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <ProgressWrapper>
        <Progress value={sanitizedValue + "%"} />
      </ProgressWrapper>
      <VisuallyHidden>{sanitizedValue}%</VisuallyHidden>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  overflow: hidden;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  background: ${COLORS.primary};
  width: ${(p) => p.value};
  height: 100%;
`;

export default ProgressBar;
