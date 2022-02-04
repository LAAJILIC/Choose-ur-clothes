import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionPage from './collection.component';
import { selectIfCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToPropos = createStructuredSelector({
    isLoading: state => !selectIfCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToPropos),WithSpinner
)(CollectionPage);

export default CollectionPageContainer;