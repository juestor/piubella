import React from 'react';

import SHOP_DATA from '../../common/mockData/shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections : SHOP_DATA
    };
  }
}

export default ShopPage;