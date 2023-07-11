import styled from "@emotion/styled";

export const Dropdown = styled.div`
width: 20rem ;

`;

export const DropdownSelect = styled.div`
padding: 1.5rem ;
border-radius: 4px ;
background-color: white ;
width: 100% ;
display: flex ;
align-items:center ;
justify-content:space-between ;
font-size: 30px ;
cursor: pointer;
`;



export const SelectItem = styled.span`
  
`;


export const DropdownList = styled.div`
border-radius: 4px ;
background-color: white ;
position: absolute;
top: 110%;
left:0 ;
right:0 ;
opacity:0 ;
visibility:hidden ;
transition: opacity 0.2s linear, visibility 0.2s linear ;

`;

export const DropdownListItem = styled.div`
padding: 1rem ;
color: black ;

`;

