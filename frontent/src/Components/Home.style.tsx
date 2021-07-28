import styled from 'styled-components'
import bgimg from '../public/thebackground.png'
export const Wrapper = styled.div`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: block;
    color : wheat;
   align-items: center;
  justify-content: center;
   text-align: center;
   overflow: scroll;
   overflow-x: hidden;
   height: 613px;
   width: 100%;
   
`;

export const Description = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
`;


 export const Text = styled.div`
   p{
       font-family: 'Realway',sans-serif;
       font-size: 20px;
       font-weight: 500;
       line-height: 50px;
       margin: 0 0 24px;
   }

   h2 {
    font-family: 'Realway',sans-serif;
    font-size : 40px;
    font-weight: 800;
    line-height: 36px;
    margin: 10px  24px 10px 24px;
   }

   h3{
       font-size: 25px;
       margin: 10px  24px 10px 24px;
   }

   h4{
    font-family: 'Realway',sans-serif;
       font-size: 20px;
       font-weight: 500;
       line-height: 50px;
       margin: 0 0 24px;
       text-decoration: underline;
   }
 `;

export const Img = styled.img`


justify-content: center;
align-items: center;
width: 300px;
height: 300px;
transition: all 0.3s;
object-fit: cover;
border-radius: 20px;
margin: 20px 24px 20px 24px;

:hover{
    opacity: 0.8;
}
`; 

