const ADD_MISSIONS = 'spaceTravelersHub/missions/ADD_MISSION';

const initialState = {
  rockets: [],
  missions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return { ...state, missions: [...state.missions, action.payload] };
    default:
      return state;
  }
};

export default reducer;

const addMissions = (missionsArray) => ({
  type: ADD_MISSIONS,
  payload: missionsArray,
});

export { addMissions };

// const fetchApi = () => {
//   fetch('https://api.spacexdata.com/v3/missions').then((response) => response.json()).then((data) => console.log(data));
// };
