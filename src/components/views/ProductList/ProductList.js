import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ShopBanner from '../../layout/ShopBanner/ShopBanner';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='row'>
        <ShopBanner />
      </div>
      <div className='row'>
        <div className={`col-9 ${styles.productListWrapper}`}>
          <h3>Product List</h3>
        </div>
        <div className={`col-3 ${styles.filtersWrapper}`}>
          <h3>Filters</h3>
        </div>
      </div>
      <div className='row'>
        <div className={`col-12 ${styles.brandsContainer}`}>
          <h3>Brands</h3>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
