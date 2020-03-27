import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));

  // Same thing as whats up here '
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(getchUser(id)))
  //   .value()
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// We need to avoid requesting user time UserHeader component is loaded
// Solution 2:
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// // Memoize checks if requeste was already done, if so, it doesn't
// // repeat the call
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

///////////////////

/*
export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get("/posts");
        
       dispatch({ type: 'FETCH_POSTS', payload: response })
    }
};
*/
