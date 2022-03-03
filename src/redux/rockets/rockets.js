const ADD_ROCKET = 'spaceTravelersHub/rockets/ADD_ROCKET';
const RESERVE = 'spaceTravelersHub/rockets/RESERVE';
const CANCEL_RESERVE = 'spaceTravelersHub/rockets/CANCEL_RESERVE';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    case RESERVE: {
      const newState = [...state];
      newState[action.payload - 1].reserved = true;
      return newState;
    }
    case CANCEL_RESERVE: {
      const newState = [...state];
      newState[action.payload - 1].reserved = false;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;

const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

const reserveRocket = (id) => ({
  type: RESERVE,
  payload: id,
});

const cancelRocket = (id) => ({
  type: CANCEL_RESERVE,
  payload: id,
});

export { reserveRocket, cancelRocket };

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
          flickr_images: item.flickr_images[0],
          reserved: false,
        };
        dispatch(addRocket(newRocket));
      }));
  };
}
