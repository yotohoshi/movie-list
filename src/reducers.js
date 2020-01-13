const reducers = (state = { mylist: [], recommendations: [] }, action) => {
  switch (action.type) {      
    case "FETCH_MOCK_DATA":     // when it needs to fetch data return the data
      return { ...action.lists };
    case "REMOVE_FROM_LIST":    // remove the selected movie from my list according to the id
      return {                  // move the id to the recommendation list
        mylist: state.mylist.filter(item => item.id !== action.item.id),
        recommendations: [...state.recommendations, action.item]
      };
    case "ADD_TO_MYLIST":       // add a movielist to recommendation list
      return {                  // according to passed in id
        mylist: [...state.mylist, action.item],
        recommendations: state.recommendations.filter(
          item => item.id !== action.item.id
        )
      };
    default:
      return state;
  }
};
export default reducers;
