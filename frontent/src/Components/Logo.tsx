import styled from "styled-components";

export const Logo = styled.img`

width: 80px;

:hover{
    animation: swim 2s infinite;
}
@keyframes swim{
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