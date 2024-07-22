import { useSelector } from "react-redux"
import ProductBlock from "./ProductBlock";

export default function ProductList()
{
    const products = useSelector((state) => state);

    return (
        <div>
            <div className="products-container">
                {
                    products.map(product => {
                        return (
                            <ProductBlock id={product.id} title={product.title} img={product.imgs[0]} price={product.price}/>
                        );
                    })
                }
            </div>
        </div>
    );
}