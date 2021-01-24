import React from 'react';
import styled from 'styled-components';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props { }

const Landing: React.FunctionComponent<Props> = () => {
  let d = new Date();
  let currentYear = d.getFullYear();

  return (
    <Main>
        <ContentWrapper>
          <div className="top">
            <div className="row">
              <a href="/"><img src="logo.svg" /></a>
              <Box className="box-top-right-border"></Box>
            </div>
          </div>
          <div className="bottom">
            <div className="row">
              <Box className="box-bottom-left-border"></Box>
              <a id="myworks" href="/portfolio">My Works</a>
              <div className="social">
              <a href="https://twitter.com/Puskal"  target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/puskal/"  target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                / <span>{currentYear}</span>
                
                </div>
            </div>
          </div>
        </ContentWrapper>
      <div className="mid">
        <div className="main-text">
          <div>Puskal</div>
          <div>Design</div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.main`
.mid{
  justify-content: center;
  font-size:150px;
  font-weight:bold;
  text-transform: uppercase;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .main-text>div:last-child{
    position: relative;
    transform: translateY(-61%);
    background: ${({ theme }) => theme.colors.primary.light};
    line-height: 100px;
    letter-spacing: -1.7px;
  }
  &:after{
    content:'';
    position:fixed;
    left:50%;
    bottom:-2vh;
    width:1px;
    height:43px;
    background:${({ theme }) => theme.colors.primary.dark};
  }
}
`;
const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: space-aroung;
padding:0 ${({ theme }) => theme.spacing.xxxxl};
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
      transform: translateX(-50%);
      text-transform: uppercase;
      font-weight:normal;
      color:${({ theme }) => theme.colors.primary.dark};
      position: absolute;
      bottom: 65px;
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
const Box = styled.div`
    width:25vh;
    height:25vh;;
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


export default Landing;
