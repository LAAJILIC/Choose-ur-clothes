import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, 
  ImageContainer, 
  DisplayButton,
  CollectionFooterContainer, 
  PriceContainer, 
  NameContainer 
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
    <ImageContainer className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    <DisplayButton onClick={() => addItem(item)} inverted>
     ADD TO BASKET
    </DisplayButton>
    </CollectionItemContainer> 
    );
};

const mapDispatchToProps = dispatch => ({
addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);