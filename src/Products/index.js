import React, {useEffect,useState}  from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    },[])
    console.log({products});
    const getProducts = async () =>{
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div >
            
            <div className="all">
            
            
            {products.map(item=>(
                <div key={item.id} className="images">
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                    <img src={item.thumbnail} className="img"></img>
                    <h3>{item.discountPercentage}%</h3>
                    
                </div>
                
            ))}
            </div>
        </div>
    )
}
export default Products;
