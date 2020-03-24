import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import CollectionContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { fetchCollectionsStart } from "../../_store/shop/shop.actions";

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
