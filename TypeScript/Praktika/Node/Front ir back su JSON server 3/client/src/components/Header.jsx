import React from 'react'
import { NavLink} from "react-router";
import styled from "styled-components";

const StyledHeader = styled(Header)`
    height: 80px;
    border-bottom: 1px solid grey;
    font-size: 24px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    > nav {
        
        >ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            
            display: flex;
            gap: 10px;
            
            > li {
                text-decoration: none;
                color: white;
                
                &:hover {
                    color: red;
                    
                }
            }
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/cars'>Cars</NavLink></li>
                    <li><NavLink to='/cars/add'>AddCar</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
export default Header
