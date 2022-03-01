const ADD_ROCKET = 'spaceTravelersHub/rockets/ADD_ROCKET';

const initialState = [];

const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export function filterRocketInfo() {
  return (dispatch) => {
    const url = 'https://api.spacexdata.com/v3/rockets';
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.forEach((item) => {
        const newRocket = {
          id: item.id,
          rocket_name: item.rocket_name,
          description: item.description,
          flickr_images: item.flickr_images,
        };
        dispatch(addRocket(newRocket));
      }));
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
