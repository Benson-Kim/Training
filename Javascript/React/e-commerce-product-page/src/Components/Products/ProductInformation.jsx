import React from 'react'

const ProductInformation = () => {
    return (
        <div>
            <h2 className='text-center text-slate-500 mt-4'>Additional Information</h2>
            <article className='grid grid-cols-4 gap-20 m-2 p-2'>
                <table className='col-span-2 text-left'>
                    <tbody>

                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Type</th>
                        <td className='text-slate-400 '>Sneakers</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Season</th>
                        <td className='text-slate-400 '>Fall/Winter</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Ref.size</th>
                        <td className='text-slate-400 '>7.5</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Removable Sole</th>
                        <td className='text-slate-400 '>Yes</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >External Sole</th>
                        <td className='text-slate-400 '>Gum</td>
                    </tr>
                    </tbody>
                </table>
                <table className='col-span-2 text-left'>
                    <tbody>

                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Store</th>
                        <td className='text-slate-400 '>Small Sizes</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Country of fabrication</th>
                        <td className='text-slate-400 '>India</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Ref.</th>
                        <td className='text-slate-400 '>124495</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Internal Sole</th>
                        <td className='text-slate-400 '>Leather</td>
                    </tr>
                    <tr className='text-sm'>
                        <th className='text-slate-700 font-normal py-2' >Fabrication</th>
                        <td className='text-slate-400 '>Embroidered</td>
                    </tr>
                    </tbody>
                </table>
            </article>
        </div>
    )
}

export default ProductInformation