import React from 'react'
import styled from 'styled-components'
import { FacebookFilled, MailOutlined, InstagramFilled, PhoneOutlined, EnvironmentOutlined, TwitterSquareFilled } from '@ant-design/icons'
import { mobile } from "../responsive";


const Footer = () => {
  return (
    <Container>
       <Left>
           <Logo>TRBL.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color='3B5999'>
              <FacebookFilled />
            </SocialIcon>
            <SocialIcon color='E4405F'>
              <InstagramFilled />
            </SocialIcon>
            <SocialIcon color='55ACEE'>
              <TwitterSquareFilled />
            </SocialIcon>
          </SocialContainer>
       </Left>
       <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
       </Center>
       <Right>
        <Title>Contact</Title>
        <ContactItem><EnvironmentOutlined style={{marinRight: '10px'}}/>Komitas 45</ContactItem>
        <ContactItem><PhoneOutlined style={{marinRight: '10px'}} />+1 234 47 34</ContactItem>
        <ContactItem><MailOutlined style={{marinRight: '10px'}} />contact@trbl.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
       </Right>
    </Container>
  )
}

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column" })}
`

const Logo = styled.h1`

`
const Desc = styled.p`
   margin: 20px 0;
`
const SocialContainer = styled.div`
   display: flex;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=> props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`



const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ backgroundColor: "#fff8f8" })}
`
const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
export default Footer