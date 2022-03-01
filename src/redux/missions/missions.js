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

const getMissions = () => (
  async (dispatch) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const missionsArray = data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
    dispatch(addMissions(missionsArray));
  }
);

export { getMissions };
