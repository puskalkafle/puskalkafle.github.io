import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row, setConfiguration } from 'react-grid-system';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SRLWrapper } from "simple-react-lightbox";


setConfiguration({ containerWidths: [540, 740, 960, 1140, 1140] });

interface Props { }



const Landing: React.FunctionComponent<Props> = () => {
  let d = new Date();
  let currentYear = d.getFullYear();
  let items: { id: number; name: string; }[];
  let el: any[];
  items = [
    { id: 1, name: 'My First Item My First Item My First Item  My First Item  My First Item  My First Item ' },
    { id: 2, name: 'Another itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother itemAnother item' },
    { id: 3, name: 'Third Item' },
    { id: 4, name: 'Here is the Fourth' },
    { id: 5, name: 'High Five' }
  ];
  el = items.map(function (item) {
    return <div key={item.id}>{item.name}</div>
  });
  return (
    <Main>
      <ContentWrapper>
        <div className="top">
          <div className="row">
            <a href="/"><img src="logo.svg" /></a>
            <Box className="box-top-right-border"></Box>
          </div>
        </div>
        <div className="mid">
          <div className="main-text">
            <div>PORTFOLIO</div>
            <div id="filters">
              <a href="#">All</a>/
            <a href="#">Design</a>/
            <a href="#">Development</a>/
            <a href="#">Art</a>/
            <a href="#">Photography</a>
            </div>

          </div>
        </div>
        <Container className="container">
          <WorkList>
            <SRLWrapper>
              <a className="item">
                <div className="inner" style={{ backgroundImage: `url(/assets/img/test.jpg)` }}>
                    <img src="/assets/img/test.jpg" alt="Umbrella1" />
                </div>
              </a>
              <a className="item">
                <div className="inner" style={{ backgroundImage: `url(/assets/img/test.jpg)` }}>
                    <img src="/assets/img/test.jpg" alt="Umbrella2" />
                </div>
              </a>
              <a className="item">
                <div className="inner" style={{ backgroundImage: `url(/assets/img/test.jpg)` }}>
                    <img src="/assets/img/test.jpg" alt="Umbrella3" />
                </div>
              </a>
              <a className="item">
                <div className="inner" style={{ backgroundImage: `url(/assets/img/test.jpg)` }}>
                    <img src="/assets/img/test.jpg" alt="Umbrella4" />
                </div>
              </a>
            </SRLWrapper>
          </WorkList>
        </Container>
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

    </Main>
  );
};
const WorkList = styled.div`
padding-bottom:${({ theme }) => theme.spacing.xxxxxl};
width:100%;
&>div{
  display:flex;
  flex-wrap: wrap;
  width:100%;
}

a.item{
  width: 33.33%;
  height: 300px;
  padding:5px;
  box-sizing: border-box;
  &:last-child{
    margin:auto;
  }
  .inner{
    background: lightgray;
    height:100%;
    width:100%;
    background-size:cover;
    overflow:hidden;
    cursor:pointer;
    box-shadow: 0 4px 4px -3px #8c8c8c;
    img{
      opacity:0;
    }
  }
}


`;

const Main = styled.main`
.mid{
  justify-content: center;
  font-size:150px;
  font-weight:bold;
  text-transform: uppercase;
  .main-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:${({ theme }) => theme.spacing.xxxxxl};
  &>div{
    position: relative;
    // transform: translateY(-61%);
    background: ${({ theme }) => theme.colors.primary.light};
    letter-spacing: -8px;
  }
}

  #filters{
    // transform: translateX(-50%);
    text-transform: uppercase;
    color:${({ theme }) => theme.colors.primary.dark};
    // position: absolute;
    // bottom: 65px;
    // left: 50%;
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
padding:0 ${({ theme }) => theme.spacing.xxxxl};
.container{
  width:100%;
}
&>div{
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
