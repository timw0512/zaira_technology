import React from "react";
import Icon from "@/conponents/common/Icon";
import styled from "styled-components";

const ButotnViewAllStyled = styled.button`
  display: flex;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  padding: 11px 18px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background-color: #fff;
  span {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    color: #183354;
  }
`;

function ViewAll({ title = "View All", onClick }) {
  return (
    <ButotnViewAllStyled
      type="button"
      onClick={onClick}
    >
      <span>{title}</span>
      <Icon name="view_all" />
    </ButotnViewAllStyled>
  );
}

export default ViewAll;
