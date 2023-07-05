import React, {useEffect,useState}  from "react";
import "./style.css";

const ProductDetails = ()=>{
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
            const response = await fetch('https://dummyjson.com/products/1')
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
        <div className="all">
            <h2>Products Details</h2>
            
            {products.map(item=>(
                <div key={item.id} className="images">
                    <h3>{item.brand}</h3>
                    <h3>${item.description}</h3>
                    <h3>${item.stock}</h3>
                    <img src={item.thumbnail} className="img"></img>
                    <h3>{item.discountPercentage}%</h3>
                    
                </div>
                
            ))}
            
        </div>
    )
}
export default ProductDetails;
