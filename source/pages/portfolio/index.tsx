import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Col, Row, setConfiguration } from 'react-grid-system';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SRLWrapper } from "simple-react-lightbox";
// import { Controls, PlayState, Tween } from 'react-gsap';
import Data from "../../data/data.json";
// import Link from 'next/link';
import { gsap } from "gsap";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Box from '../components/box';
import Header from 'pages/header';


setConfiguration({ containerWidths: [540, 740, 960, 1140, 1140] });

interface Props { }



const Landing: React.FunctionComponent<Props> = () => {
  const mainData = Data.data;
  const [data, setFilterData] = useState(mainData);
  const [loader, setLoader] = useState(true);
  const portfolioContentRef = useRef();
  const workContentRef = useRef();
  const router = useRouter();

  let filterMenu = ['all', 'design', 'development', 'art', 'photography'];
  const [active, setActive] = useState(filterMenu[0]);

  let d = new Date();
  let currentYear = d.getFullYear();
  let el: any[];
  const options = {
    progressBar: {
      backgroundColor: '#f2f2f2',
      fillColor: '#000000',
      height: '30000px',
      showProgressBar: true
    }
  }
  function filterCard(e, slug) {
    e.preventDefault();
    if (slug !== 'all') {
      let filteredData: any = Object.values(mainData).filter(function (d) {
        return d.slug === slug;
      });
      setFilterData(filteredData);
    } else {
      setFilterData(mainData);
    }

  }

  let loadedImages = [];
  let handleImageLoaded = (index) => {
    loadedImages.push(index);
    if (Object.keys(data).length === loadedImages.length) {
      setLoader(false);
    }
  }
  useEffect(() => {
    // gsap.from(portfolioContentRef.current, { y: '500px', duration: 1, opacity: 0 });
    // gsap.from(workContentRef.current, { y: '500px', duration: 1, opacity: 0 });
  });
  return (
    <Main>
      {
        // (loader) ? <div className="loader"></div> : ''
      }

      <Header/>
      <ContentWrapper>
        <div className="mid" ref={portfolioContentRef}>
          <div className="main-text">
            <div>PORTFOLIO</div>
            <div id="filters">
              {
                filterMenu.map((d, i) => {
                  return (<a key={i} className={active === d ? 'active' : ''} href="#" onClick={(e) => {
                    filterCard(e, d);
                    setActive(d);
                    setLoader(true);
                  }}>{d}</a>)
                })
              }
            </div>
          </div>
        </div>
        <Container className="container">
          <WorkList ref={workContentRef}>
            {/* <SRLWrapper options={options}> */}
              {Object.values(data).map((item, i) => (
                 <Link href={`/portfolio/${i}`}>
                <a key={i} className="item">
                  <div className="inner" style={{ backgroundImage: `url(/assets/img/work/thumbnail/${item.img}.jpg)` }}>
                    {/* <img src={`/assets/img/work/${item.img}`} alt={`${item.desc}`} onLoad={handleImageLoaded.bind(this, i)} /> */}
                  </div>
                </a>
                </Link>
              ))}
            {/* </SRLWrapper> */}
          </WorkList>
        </Container>
        <div className="bottom">
          <div className="row">
            <Box className="box-bottom-left-border"></Box>
            <div className="social">
              <a href="https://twitter.com/Puskal" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/puskal/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
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
display: flex;
flex-wrap: wrap;
width:100%;
&>div{
  display:flex;
  flex-wrap: wrap;
  width:100%;
}

a.item{
  width: 33.33%;
  height: 300px;
  @media(max-width:1100px){
   height: 150px;
  }
  @media(max-width:500px){
    height: 75px;
   }
  padding:5px;
  box-sizing: border-box;
  .inner{
    background: #fff;
    height:100%;
    width:100%;
    background-size:cover;
    overflow:hidden;
    cursor:pointer;
    border:1px solid #e8e7e3;
    box-shadow: 0 4px 4px -3px #8c8c8c;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
      box-shadow: 0 8px 8px -3px rgba(140,140,140,.7);
    }
    img{
      opacity:0;
    }
  }
}


`;

const Main = styled.main`
.loader {
  border: 8px solid #fff;
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.colors.primary.default};
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position:fixed;
  left:50%;
  top:50%;
  z-index:999;
  transform:translate(-50%,-50%);
  box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.12);
  -webkit-box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.12);
  -moz-box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.12);
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.mid{
  justify-content: center;
  font-size:150px;
  font-weight:bold;
  text-transform: uppercase;
  .main-text{
    display: flex;
    flex-direction: column;
    align-items: center;
  &>div{
    position: relative;
    background: ${({ theme }) => theme.colors.primary.light};
    letter-spacing: -8px;
  }
}
  @media(max-width:1080px){
    font-size:${({ theme }) => theme.fontSize.xxxxl};
    .main-text>div{
      letter-spacing: 0;
   }
}
@media(max-width:767px){
  font-size:${({ theme }) => theme.fontSize.xxxl};
}
@media(max-width:767px){
  font-size:${({ theme }) => theme.fontSize.xxl};
}

  #filters{
    text-transform: uppercase;
    color:${({ theme }) => theme.colors.primary.dark};
    background: none;
    font-weight:300;
    display: flex;
    font-size:${({ theme }) => theme.fontSize.l};
    padding-top:${({ theme }) => theme.spacing.xxxxl};
    padding-bottom:${({ theme }) => theme.spacing.xl};
    flex-wrap: wrap;
    a{
      position:relative;
      font-weight:300;
      display:inline-block;
      padding:0 ${({ theme }) => theme.spacing.s} 0 ${({ theme }) => theme.spacing.sm};
      font-size:${({ theme }) => theme.fontSize.l};
      letter-spacing: normal;
      line-height: initial;
      background: none;
      color:${({ theme }) => theme.colors.primary.dark};
      &:hover,&.active{
        color:${({ theme }) => theme.colors.primary.default};
      }
      &:not(:last-child):after{
        content:'/';
        position: absolute;
        right: -5px;
        top: 0;
        color:${({ theme }) => theme.colors.primary.dark};
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
@media(max-width:768px){
  padding:0 ${({ theme }) => theme.spacing.xxl};
}
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


export default Landing;
