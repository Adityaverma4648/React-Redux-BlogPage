export const initialState = {
    post: [],
    groups : [],
    user: null,
    location : null,
  };
  
  //Selector
  export const getPostTotal = (post) =>
    post?.reduce((amount, item) => item.price * item.quantity + amount, 0);
  
  const reducer = (state, action) => {
    const checkUnique = (x) => x.id === action.item.id;
    switch (action.type) {
      case "ADD_TO_POST":
        if (state.post.some(checkUnique)) {
          return {
            ...state,
            post: [...state.post],
          };
        } else {
          return {
            ...state,
            post: [...state.post, action.item],
          };
        }
  
      case "UPDATE_POST":
        const target = state.post.find((x) => x.id === action.item.id);
        target.quantity = action.item.quantity;
        return {
          ...state,
        };
  
      case "EMPTY_POST":
        return {
          ...state,
          post: [],
        };
  
      case "REMOVE_FROM_POST":
        const index = state.post.findIndex(
          (postItem) => postItem.id === action.item.id
        );
        let newpost = [...state.post];
  
        if (index >= 0) {
          newpost.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.item.id}) as its not in post`
          );
        }
        return {
          ...state,
          post: newpost,
        };
  
      case "REMOVE_FROM_SAVED":
        const i = state.saved.findIndex(
          (savedItem) => savedItem.id === action.item.id
        );
        let newSaved = [...state.saved];
  
        if (i >= 0) {
          newSaved.splice(i, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.item.id}) as its not in saved`
          );
        }
        return {
          ...state,
          saved: newSaved,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

        case "SET_LOCATION":
          return {
            ...state,
            location: action.user,
          };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  