import React from 'react'

const Cart = (props) => {
    return (
        <aside className='block col-1' >
            <h2>Cart Items</h2>
            <div>
                {props.cartitems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {props.cartitems.map((item) => {
                <div className="row" key={item.id}>
                    <div className='col-2 '>
                        {item.name}
                    </div>
                    <div className='col-2 '>
                        <button onClick={() => props.onAdd(item)} className="add">+</button>
                        <button onClick={() => props.onRemove(item)} className="add">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} * ${item.price.toFixed(2)}
                    </div>
                </div>
            }
            )}
        </aside>
    )
}

export default Cart