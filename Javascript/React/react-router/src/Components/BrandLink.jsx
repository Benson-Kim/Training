import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const BrandLink = ({ brand, children }) => {
    let [searchParams] = useSearchParams();
    let isActive = searchParams.get('brand') === brand
    return (
        <Link to={`/?brand=${brand}`} className={`${isActive && 'text-red-400'}`}>
            {children}
        </Link>
    )
}

export default BrandLink