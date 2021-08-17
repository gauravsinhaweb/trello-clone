import styled from "styled-components";

export const BoardBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export const ColumnBody = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Head = styled.div`
  border: 1px solid black;
  height: 28px;
  padding: 5px;
  font-weight: bold;
  margin: 1rem;
`;
export const ColumnBox = styled.div`
  border: 1px solid gray;
  position: relative;
  min-height: 28px;
  background-color: #edf2ff;
`;
export const Box = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  min-height: 56px;
  margin: 20px 10px;
  cursor: pointer;
  padding: 5px;
  background-color: white;
`;
export const Button = styled.div`
  background: white;
  color: palevioletred;
  display: flex;
  margin: 20px 10px;
  justify-content: center;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: default;
`;
export const Column = styled.div`
  margin: 1rem;
`;
