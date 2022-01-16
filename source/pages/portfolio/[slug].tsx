import { useRouter } from 'next/router'
import Header from '../header'
import ContentWrapper from '../components/contentWrapper'

const PortfolioDetail = () => {
  const router = useRouter()
  const slug = router.query.slug || []
console.log(slug)
  return (
    <>
      <Header />
      <ContentWrapper>
      <h1>In Progress</h1>
      <h4>Portfolio Detail Page</h4>
      </ContentWrapper>
    </>
  )
}

export default PortfolioDetail