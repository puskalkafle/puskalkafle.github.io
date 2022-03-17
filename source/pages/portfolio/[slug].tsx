import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../header';
import Data from '../../data/data.json';

// https://www.azzerad.com/
function PortfolioDetail() {
  const router = useRouter();
  const mainData = Data.data;
  let portfolioItem: any;
  const [data, setFilterData] = useState([]);

  useEffect(() => {
    const slugId:any = router.query.slug;

    if (!!data && slugId) {
      portfolioItem = Object.values(mainData).filter(function (d, i) {
        return i === parseInt(slugId);
      })[0];
      if (portfolioItem) {
        setFilterData(portfolioItem);
      }
    }
  });

  return (
    <>
      <Header />
        <ContentContainer>
          <div className="left">
            <em>{data.type}</em>
            <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
            <p>{data.desc}</p>
          </div>
          <div className="right">
            <img
              src={`/assets/img/work/${data.img}`}
            />
          </div>
        </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
    display:flex;
    width: 1024px;
    margin: 0 auto;
    img{
      max-width:100%;
    }
    .left,.right{
      width:100%;
    }
    .left{
      em{
        font-size: 18px;
        margin-bottom: 5px;
        display: inline-block;
      }
      h2{
        margin-bottom: 15px;
      }
      p{
        font-size: 28px;
        font-weight: 300;
        padding-right: 1rem;
      }
    }
`;

export default PortfolioDetail;
