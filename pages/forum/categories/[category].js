import { useRouter } from 'next/router'

const PortfolioDetail = () => {
    const router = useRouter();
    const category = router.query.category;

    return (
        <h1>Category detail {category}</h1>
    )
}

export default PortfolioDetail;