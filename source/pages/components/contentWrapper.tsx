import styled from "styled-components";

const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: space-aroung;
padding:0 ${({ theme }) => theme.spacing.xxxxl};
@media(max-width:767px){
  padding:0 ${({ theme }) => theme.spacing.xxl};
}
&>div{
  height:50vh;
  max-height:50vh;
  min-height:50vh;
  display: flex;
  align-items: flex-end;
  .row{
    flex:1;
    display:flex;
    justify-content:space-between;
  }
  &.top{
    align-items: flex-start;
    .row{
      padding-top:${({ theme }) => theme.spacing.xxxl};
      
    }
  }
  &.bottom{
    #myworks{
      cursor: pointer;
      transform: translateX(-50%);
      text-transform: uppercase;
      font-weight:normal;
      color:${({ theme }) => theme.colors.primary.dark};
      position: absolute;
      bottom: 65px;
      @media(max-width:400px){
        bottom: 50%;
      }
      left: 50%;
      &:hover{
        color:${({ theme }) => theme.colors.primary.default};
      }
    }
    .social{
      display: flex;
      align-items: center;
      a{
        color:${({ theme }) => theme.colors.primary.default};
      }
      color:${({ theme }) => theme.colors.primary.default};
      svg{
        margin-right:${({ theme }) => theme.spacing.sm};
        width:18px;
      }
      span{
        margin-left:${({ theme }) => theme.spacing.sm};
      }
    }
    .row{
      padding-bottom:${({ theme }) => theme.spacing.xxxl};
      align-items: flex-end;
      position:relative;
    }

  }
  
}
`;
export default ContentWrapper;