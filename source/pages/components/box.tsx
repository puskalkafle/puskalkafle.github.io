import styled from "styled-components";

const Box = styled.div`
    width:25vh;
    height:25vh;;
    @media(max-width:767px){
      width:20vh;
    }
    border:1px solid rgba(4,17,26,.2);
    &.box-top-right-border{
      border-bottom:none;
      border-left:none;
    }
    &.box-bottom-left-border{
      border-top:none;
      border-right:none;
    }
`;

export default Box
