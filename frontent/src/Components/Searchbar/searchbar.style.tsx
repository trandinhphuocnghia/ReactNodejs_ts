import styled from "styled-components";

export const Wrapper = styled.div `
position: relative;
display: flex;
min-width: 100px;
justify-content: center;


.search-icon{
position: absolute;
top: 6px;
left: 8px;
width: 20px;

}


.clear-icon{
position: absolute;
top: 8px;
right: 8px;
width: 15px;
cursor: pointer;
}

.search{
border : 1px solid #8d8741;
border-radius: 5px;
height: 30px;
width: 250px;
padding: 2px 23px 2px 30px;
outline: 0;
background-color: rgb(252, 245, 245);
color: #8d8741;

}
`;

