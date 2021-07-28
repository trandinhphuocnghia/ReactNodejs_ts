import React from 'react'
import { Wrapper,Text,Img,Description } from '../Components/Home.style'
import 'C:\\Users\\Mysterious\\ReactNodejs_ts\\frontent\\src\\main.css'
import avt from '../public/avt.png'


export default function HomePage() {
    return (
        <>
        
        <Wrapper>
          
          <Description>
          <Text>
          <h4>Welcome</h4>
          <h2>My PNG_19 Website</h2>
          <h3>about me</h3>
          <p>My name is Tran Dinh Phuoc Nghia , I From VietNam , This website was created straightly for my Study and show who I am.</p>
          </Text>
          <Img  src={avt} alt='avatar' />
          </Description>
          <div> 
            <Text>
              <h2>Information</h2>
            </Text>
        </div>
          <div className = "box">
          <div className = "flexbox flexbox1"></div>
          <div className = "flexbox flexbox2"></div>
          <div className = "flexbox flexbox3"></div>
        </div>

        <div>
          <Text>
            <p> I have created some crazy website for my study, some pic of its </p>
          </Text>
        </div>

        </Wrapper>
        
        </>
    )
}

