import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Product } from '../../Models/Product';
import { getAllAsync, addAsync, selectProducts, delAsync, updAsync } from './CRUDSlice'

const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const [desc, setdesc] = useState("");
    const [price, setprice] = useState(0);
    const [updating, setUpdating] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product>({
        id: undefined,
        desc: "",
        price: 0
    });
    useEffect(() => {
        dispatch(getAllAsync());
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit", selectedProduct);
        event.preventDefault();
        if (updating) {            
            dispatch(updAsync({ 
                ...selectedProduct,
                desc: desc,
                price: price,
             }));
            console.log("handleSubmit-Updated", selectedProduct);
            setUpdating(false);
        } else {
            dispatch(addAsync({ desc, price }));
        }
        setdesc("");
        setprice(0);
    }

    const handleEdit = (product: Product) => {
        console.log("handleEdit", product);
        setSelectedProduct(product);
        setdesc(product.desc);
        setprice(product.price);
        setUpdating(true);
    }

    return (
        <div style={{ backgroundColor: "wheat", padding: '1rem' }}>
            <h1 style={{ color: "brown" }}> CRUD</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Desc<input value={desc} onChange={(e) => setdesc(e.target.value)} />
                </div>
                <div>
                    price<input value={price} onChange={(e) => setprice(+e.target.value)} />
                </div>
                <button type="submit">{updating ? "Update Item" : "Add Item"}</button>
                <button onClick={() => {
                    setUpdating(false);
                    setdesc("");
                    setprice(0);
                    setSelectedProduct({ id: undefined, desc: "", price: 0 }); }}>Cancel</button>
            </form>
            <button onClick={() => dispatch(getAllAsync())}>Get Items</button>
            
            <hr />
            <div style={{ color: "brown" }}> Total Items: {products.length}</div>
            {products.map((prod, ind) => (
                <div key={ind}>
                    {prod.desc} {prod.price}
                    <button onClick={() => dispatch(delAsync(prod.id || 0))}>Delete</button>
                    <button onClick={() => handleEdit(prod)}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default CRUD
