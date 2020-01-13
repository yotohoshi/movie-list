import React from "react";
import List from "./ListTemplate";
import { connect } from "react-redux";
const MyList = props => {
  const onClick = item => {
    props.dispatch({ type: "REMOVE_FROM_LIST", item });
  };
  const { list } = props;
  return (
    <List
      listTitle="My List"     // bind the onclick with list
      onClick={onClick}       // whenever user clicks the list
      list={list}             // it will remove it
      btnContent="Remove"     // movie only has remove button
    />
  );
};
const mapStatetoProps = state => {
  return { list: state.mylist };
};

export default connect(mapStatetoProps)(MyList);
