import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  width: fit-content;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  color: var(--color-text);
  cursor: pointer;
  text-decoration: none;
`;