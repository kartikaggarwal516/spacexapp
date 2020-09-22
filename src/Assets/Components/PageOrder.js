import React from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import {handlePageChange} from "../Actions/Actions"
import { bindActionCreators } from "redux";

const PageOrder = props => {
  return(
    <div className="pagebox">
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={props.activePage}
          itemsCountPerPage={3}
          totalItemsCount={114}
          pageRangeDisplayed={5}
          onChange={props.handlePageChange.bind(this)}
        />
      </div>
  )
}

const mapStateToProps = store => {
  return{
    activePage: store.activePage
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {handlePageChange}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOrder)