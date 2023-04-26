import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <SelectorContainer>
      <TextContent>{displayedValue}</TextContent>
      <TextContent>
        <Icon id="chevron-down" />
      </TextContent>
      <SystemDefaultSelect value={value} onChange={onChange}>
        {children}
      </SystemDefaultSelect>
    </SelectorContainer>
  );
};

const SystemDefaultSelect = styled.select`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  appearance: none;
  opacity: 0;
`;

const TextContent = styled.div`
  display: inline-block;

`;

const SelectorContainer = styled.div`
  color: ${COLORS.gray700};
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${COLORS.transparentGray15};
  width: fit-content;
  height: 43px;
  border-radius: 8px;
  padding: 12px 16px 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline: 2px solid black;
  }
`;

export default Select;
