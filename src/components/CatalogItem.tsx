import react, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import Catalog from './Catalog';

interface CataloItemsProps {
  product: IProduct;
}

const CatalogItem: React.FC<CataloItemsProps> = ({product}) => {
  const dispath = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCart(product));

  }, [dispath, product]);
  return (
    <article >
    <strong>{product.title}   </strong>
    <span>{product.price}    ==     </span>

    <button onClick={handleAddProductToCart} type="button">Comprar</button>

  </article>

  );
}

export default CatalogItem;