import ItemCount from './ItemCount';
import ItemCheckout from './ItemCheckout';
import { useEffect, useState } from 'react';

function ItemDetail({producto}) 
{
    const [isVisible, setVisible] = useState(false); 

    useEffect( () => {
        setVisible(a => !a);
    },[]);

    const onAdd = (e) => {
        alert(`Has seleccionado ${e} items`);
        setVisible(false);
        e.stopPropagation();
    }
    
    return (
        <>
            {
            producto
            ? 
            <div id="main">
                <div className="thumbnail">
                    <img src={producto.thumbnail} alt={producto.name}/>
                </div>
                <div className="detail">
                    <h2>{producto.name}</h2>
                    <h4>{producto.description}</h4>
                    <p>{producto.details}</p>    
                    <div className="cost">
                        <h4>$ {producto.cost}</h4>
                    </div>
                    <p>{producto.stock} unidades en stock</p>
                    <div className="countFloat">
                        {isVisible ?
                        <ItemCount stock = {producto.stock} initial = {0} onAdd={onAdd} />
                        :
                        <ItemCheckout />
                        }
                    </div>
                </div>
            </div>
            : <img style={{width:"200px", height:"200px"}} src="../Loader.gif" alt="Wait"/>
            }
        </>
    );
}

export default ItemDetail