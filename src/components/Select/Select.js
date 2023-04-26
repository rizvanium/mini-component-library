import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <SelectContainer>
      <SystemDefaultSelect value={value} onChange={onChange}>
        {children}
      </SystemDefaultSelect>
      <SelectorContent>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </SelectorContent>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: max-content;
`;

const SystemDefaultSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  appearance: none;
`;

const SelectorContent = styled.div`
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};

  ${SystemDefaultSelect}:focus + & {
    /* works on all browsers */
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SystemDefaultSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
