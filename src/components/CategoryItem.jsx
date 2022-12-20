import styled from 'styled-components'
import React from 'react'
import { mobile } from "../responsive";


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}   
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 7px 12px;
    background-color: pink;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #be5768;
    }
    &:active{
        background-color: #be223c
    }
`

export default CategoryItem