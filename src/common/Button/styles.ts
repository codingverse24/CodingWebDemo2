import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || " #00AEEF"};
  color: ${(p) => (p.color ? "#2E186A" : "#FFFFFF")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 174, 239, 0.8);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
