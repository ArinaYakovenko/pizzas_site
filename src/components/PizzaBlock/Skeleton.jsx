import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="327" y="88" rx="3" ry="3" width="88" height="6" />
    <circle cx="577" cy="538" r="34" />
    <circle cx="132" cy="123" r="123" />
    <rect x="3" y="258" rx="10" ry="10" width="271" height="21" />
    <rect x="4" y="294" rx="10" ry="10" width="270" height="68" />
    <rect x="7" y="378" rx="10" ry="10" width="110" height="41" />
    <rect x="158" y="377" rx="10" ry="10" width="109" height="42" />
  </ContentLoader>
)

export default Skeleton