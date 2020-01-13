import React from "react";
import Film from "./Film";

// use react hook and passes the parameter into functional
// component as props
const List = props => {
  const { listTitle, list, onClick, btnContent } = props;
  return (
    <div>
      <h3>{listTitle}</h3>
      <div className="flex-container">
        {list.length === 0 ? (  // if list is empty return "None"
          <p>None</p>
        ) : (
          list.map(item => (    // use map to return all movies in the list
            <Film
              {...item}
              button={btnContent}
              onClick={() => onClick(item)}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
