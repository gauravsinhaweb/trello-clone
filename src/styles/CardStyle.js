import styled from "styled-components";

export const Card = styled.div`
  margin: 1rem;
  height: 100px;
  width: 200px;
  min-width: 15vw;

  border: 1px solid black;
  cursor: pointer;
`;
export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bolder;
  font-size: 20px;
  text-transform: capitalize;
`;
