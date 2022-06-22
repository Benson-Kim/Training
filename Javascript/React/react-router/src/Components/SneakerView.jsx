import React from 'react'
import { useParams } from 'react-router-dom'
import NoMatch from './NoMatch';

const SneakerView = ({ getSneakerById }) => {
    let { id } = useParams();
    if (!id)
        return <NoMatch />

    let sneaker = getSneakerById(id)
    if (!sneaker)
        return <NoMatch />
    let name = `${sneaker.brand} ${sneaker.model} ${sneaker.colorway}`;

    return (
        <div>
            <h2>{name}</h2>
            <img src={sneaker.imageUrl} alt={name} width={400} h={400} className='rounded-lg w-full '/>
        </div>
    )
}

export default SneakerView