import react, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import Catalog from './Catalog';

interface CataloItemsProps {
  product: IProduct;
}

const CatalogItem: React.FC<CataloItemsProps> = ({product}) => {
  const dispath = useDispatch();

  const hasfailedStockCheck = useSelector<iState, boolean>(state => {
    return state.cart.faildStockCheck.includes(product.id);

  })

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCartRequest(product));

  }, [dispath, product]);
  return (
    <article >
    <strong>{product.title}   </strong>
    <span>{product.price}    ==     </span>

    <button onClick={handleAddProductToCart} type="button">Comprar</button>
    { hasfailedStockCheck && <span style={{color: 'red'}}>falta de estoque</span>}

  </article>

  );
}

export default CatalogItem;