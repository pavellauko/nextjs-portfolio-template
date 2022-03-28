import { useRouter } from 'next/router'

const PortfolioDetail = () => {
    const router = useRouter();
    const id = router.query.id;

    return (
        <h1>Portfolio detail {id}</h1>
    )
}

export default PortfolioDetail;