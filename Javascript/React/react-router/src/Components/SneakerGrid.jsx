import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const SneakerGrid = ({ SNEAKERS, filterByBrand }) => {
    let [searchParams] = useSearchParams();
    let brand = searchParams.get('brand');

    const sneakers = React.useMemo(() => {
        if (!brand)
            return SNEAKERS;
        return filterByBrand(brand);
    }, [brand, SNEAKERS, filterByBrand])

    return (
        <main>
            <h2>Sneakers</h2>
            <div className="grid grid-cols-4 gap-y-3 gap-x-6">
                {sneakers.map((sneaker) => {
                    let name = `${sneaker.brand} ${sneaker.model} ${sneaker.colorway}`;
                    return (
                        <Link to={`/sneakers/${sneaker.brand}/productid=${sneaker.id}`} key={sneaker.id} className='relative'>
                            <img src={sneaker.imageUrl} alt={name} className='rounded-lg w-full h-auto' />
                            
                                <p>{name}</p>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

export default SneakerGrid