import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (/* props */) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        /* {...props} */
    >
        <circle cx="150" cy="136" r="126" />
        <rect x="0" y="281" rx="6" ry="6" width="280" height="27" />
        <rect x="0" y="323" rx="6" ry="6" width="280" height="70" />
        <rect x="8" y="417" rx="6" ry="6" width="100" height="30" />
        <rect x="126" y="407" rx="6" ry="6" width="147" height="44" />
    </ContentLoader>
)

export default Skeleton
