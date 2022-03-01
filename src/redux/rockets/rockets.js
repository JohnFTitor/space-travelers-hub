const ADD_ROCKET = 'spaceTravelersHub/rockets/ADD_ROCKET';

const initialState = {
  rockets: [],
  missions: [],
};

export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return { ...state, rockets: [...state.rockets, action.payload] };
    default:
      return state;
  }
};

export default reducer;
