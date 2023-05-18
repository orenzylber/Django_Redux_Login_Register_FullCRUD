import React from 'react'

const CRUD2 = () => {
  return (
    <div>CRUD2</div>
  )
}

export default CRUD2
// import React, { useEffect, useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { Product } from '../../Models/Product';
// import { getAllAsync, addAsync, selectProducts, delAsync, updAsync } from './CRUDSlice'

// const CRUD = () => {
//     const dispatch = useAppDispatch();
//     const products = useAppSelector(selectProducts);
//     const [desc, setdesc] = useState("")
//     const [price, setprice] = useState(0)
//     useEffect(() => {
//         dispatch(getAllAsync())
//     }, [])

//     return (
//         <div style={{ backgroundColor: "wheat" }}>
//             <h1> CRUD</h1>
//             Desc<input onChange={(e) => setdesc(e.target.value)} />
//             price<input onChange={(e) => setprice(+e.target.value)} />
//             <button onClick={() => dispatch(addAsync({ desc, price }))}>Add Item</button>
//             <button onClick={() => dispatch(getAllAsync())}>Get Items</button>

//             {products.length}

//             <hr />
//             {products.map((prod, ind) => <div key={ind}>{prod.desc} {prod.price}
//                 <button onClick={() => dispatch(updAsync({
//                     id: prod.id,
//                     desc: prod.desc,
//                     price: prod.price
//                 }))}>update</button>
//                 <button onClick={() => dispatch(delAsync(prod.id || 0))}>Delete </button>
//             </div>)}

//         </div>
//     )
// }

// export default CRUD


