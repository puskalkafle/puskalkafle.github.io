import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row, setConfiguration } from 'react-grid-system';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


setConfiguration({ containerWidths: [540, 740, 960, 1140, 1140] });

interface Props { }

const Landing: React.FunctionComponent<Props> = () => {
  let d = new Date();
  let currentYear = d.getFullYear();

  return (
    <Main>

      <Container>
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
              <div className="social">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                / <span>{currentYear}</span>
                </div>
            </div>
          </div>
        </ContentWrapper>
      </Container>
      <div className="mid">
        <div className="main-text">
          <div>PORTFOLIO</div>
          <div id="filters">
            <a href="#">Design</a>/
            <a href="#">Development</a>/
            <a href="#">Art</a>/
            <a href="#">Photography</a>
            </div>

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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .main-text>div{
    position: relative;
    transform: translateY(-61%);
    background: ${({ theme }) => theme.colors.primary.light};
    letter-spacing: -8px;
  }

  #filters{
    transform: translateX(-50%);
    text-transform: uppercase;
    color:${({ theme }) => theme.colors.primary.dark};
    position: absolute;
    bottom: 65px;
    left: 50%;
    background: none;
    font-weight:300;
    display: flex;
    font-size:${({ theme }) => theme.fontSize.l};
    a{
      font-weight:300;
      display:inline-block;
      padding:0 ${({ theme }) => theme.spacing.s} 0 ${({ theme }) => theme.spacing.sm};
      font-size:${({ theme }) => theme.fontSize.l};
      letter-spacing: normal;
      line-height: initial;
      background: none;
      color:${({ theme }) => theme.colors.primary.dark};
      &:hover{
        color:${({ theme }) => theme.colors.primary.default};
      }
    }
  }
}
`;
const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: space-aroung;
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
    .social{
      display: flex;
      align-items: center;
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
