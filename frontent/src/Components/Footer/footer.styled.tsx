import styled from "styled-components";

export const Wrapper = styled.div`
width: 100vw;
height: 60px;
bottom: 0;
background : rgb(252,245,245);
display: flex;
position: fixed;
color : #8d8741;
justify-content: center;
align-items: center;
`;

export const Content = styled.div`

ul{
    font-family: Menlo, monospace;
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 24px;
    justify-items: center;
    margin : auto;

}

a{
    color: #8d8741;
}

h5{
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin: 5px 5px 5px 5px;
}

li:hover  {
    animation: wave-animation 0.7s infinite;
}

p:hover{
    animation: wave-animation 0.3s infinite;
}

@keyframes wave-animation{
    0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
`;