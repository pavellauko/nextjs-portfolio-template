import Link from 'next/link'

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="col-md-4">
      <div className="card subtle-shadow no-border">
        <div className="card-body">
          <h5 className="card-title">{portfolio.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <Link href={`/portfolios/${portfolio._id}`}>{portfolio.jobTitle}</Link>
          </h6>
          <p className="card-text fs-6">{portfolio.description}</p>
        </div>
        <div className="card-footer no-border">
          <small className="text-muted">{portfolio.startDate} - {portfolio.endDate}</small>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard;
