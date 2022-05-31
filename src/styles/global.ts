import styled, { createGlobalStyle } from "styled-components";
import { darken, transparentize } from "polished";

export const GlobalStyle = createGlobalStyle`
:root {
  --red: #e52e4d;
  --green: #33cc95;
  --blue: #5429cc;
  
  --blue-light: #6933ff;
  
  --text-title: #363f5f;
  --text-body:#969CB3;
  
  --background: #f0f2f5;
  --shape: #FFFFFF;
}

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html { 
  @media (max-width: 1080px) {
    font-size:93.75%; //15px
  }
  @media(max-width: 720px) {
    font-size:87.5%; //14px
  }
}

body { 
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}

button { 
  cursor: pointer;
}

[disabled] {
  opacity : 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background:rgba(0,0,0,0.5);

  position:fixed;
  top:0;
  bottom: 0;
  right: 0;
  left:0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width:100%;
  max-width:576px;
  background:var(--background);
  padding:3rem;
  position:relative;
  border-radius:0.25rem;
}

.react-modal-close {
  position:absolute;
  right:1.5rem;
  top:1.5rem;
  border:0;
  background:transparent;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9)
  }
}

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: "#33cc95",
    red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) =>
        props.isActive
            ? transparentize(0.9, colors[props.activeColor])
            : "transparent"};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;
