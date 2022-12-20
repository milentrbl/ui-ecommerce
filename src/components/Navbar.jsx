import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchOutlined style={{color: 'gray', fontSize: '16px'}}/> 
                </SearchContainer>
            </Left>
            <Center><Logo>TRBL.</Logo></Center>       
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge count={5} style={{color: '#ffffff',backgroundColor: 'blue'}}>
                        <ShoppingCartOutlined style={{ fontSize:"2rem" }}/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
const Container = styled.div`
    height: 10vh;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;    
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center; 
`
const SearchContainer = styled.div`
    border: .1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Logo = styled.h1`
    font-weight: bold;  
    ${mobile({ fontSize: "24px" })}
`

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`
export default Navbar