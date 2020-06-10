import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./home-page.styles.scss";

const HomePage = ({ collections }) => {
  return (
    <div className="home-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});

export default connect(mapStateToProps)(HomePage);
