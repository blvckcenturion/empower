import React from 'react';
import { InfoSection } from '../../components';
import { productObjOne, productObjTwo, productObjThree, productObjFour} from './Data';

function Products() {
  return (
    <>
      <InfoSection {...productObjOne} />
      <InfoSection {...productObjTwo} />
      <InfoSection {...productObjThree} />
      <InfoSection {...productObjFour} />
    </>
  );
}

export default Products;
