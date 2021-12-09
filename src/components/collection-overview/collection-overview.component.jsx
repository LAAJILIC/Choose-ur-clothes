import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
<div className='collection-overview'>
{ collections.map(({ id, ...otherPreviewCollection}) => (
        <PreviewCollection key={id} {...otherPreviewCollection} />
    ))}
</div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);