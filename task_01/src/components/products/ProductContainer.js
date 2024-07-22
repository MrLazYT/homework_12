import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductContainer()
{
    const { id } = useParams();
    const products = useSelector(state => state);
    const product = products.find(product => product.id === +id);
    const [selImg, setSelImg] = useState(0);

    const nextImg = () => {
        if (selImg < product.imgs.length - 1)
        {
            setSelImg(selImg + 1);
        }
    }

    const previousImg = () => {
        if (selImg > 0)
        {
            setSelImg(selImg - 1);
        }
    }

    const changeImg = (index) => {
        setSelImg(index);
    }

    return (
        <div className="product-container">
            <div className="img-container">
                <div className="selected-img-container">
                    <button className="img-slider" onClick={previousImg}>⮜</button>
                    <img className="showed-img" src={product.imgs[selImg]} alt={`${product.title}/img[${selImg}]`}/>
                    <button className="img-slider" onClick={nextImg}>⮞</button>
                </div>

                <div className="img-gallery">
                    {
                        product.imgs.map((img, index) => {
                            return (
                                <img className={selImg === index ? "selected-img" : "img"} src={img} alt={`${product.title}/img[${index}]`} onClick={() => {changeImg(index)}}/>
                            );
                        })
                    }
                </div>
            </div>
            <h2>{product.title}</h2>
        </div>
    )
}