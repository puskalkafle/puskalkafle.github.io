import router from 'next/router';
import Box from '../components/box';
import styled from 'styled-components';

const Header = () => (
    <header>
        <ContentWrapper>
            <div className="top">
                <div className="row">
                    <a id='logo'
                        onClick={() => {
                            router.push('/')
                        }}
                    ><img src="/logo.svg" /></a>
                    <Box className="box-top-right-border"></Box>
                </div>
            </div>
        </ContentWrapper>
    </header>
)
const ContentWrapper = styled.div`
    #logo{
    cursor:pointer;
    img{
        width: 30px;
        }
    }
    .top{
        align-items: flex-start;
        .row{
          padding-top:${({ theme }) => theme.spacing.xxxl};
          
        }
      }
      .row{
        flex:1;
        display:flex;
        justify-content:space-between;
      }
    display:flex;
    flex-direction:column;
    justify-content: space-aroung;
    padding:0 ${({ theme }) => theme.spacing.xxxxl}

    
`;

export default Header