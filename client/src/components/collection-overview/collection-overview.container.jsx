import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),WithSpinner)(collectionOverview);
    //compose is from right to left

export default CollectionOverviewContainer; 