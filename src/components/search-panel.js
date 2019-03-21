import React from "react";

const SearchPanel = () => {
  const searchText = "Type to search";
  const searchStyle = {
    fontSize: "15px"
  };
  return <input style={searchStyle} placeholder={searchText} />;
};

export default SearchPanel;
