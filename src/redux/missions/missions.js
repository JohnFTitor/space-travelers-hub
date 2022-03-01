const ADD_MISSIONS = 'spaceTravelersHub/missions/ADD_MISSION';
const COMPLETE_STATUS = 'spaceTravelersHub/missions/COMPLETE_STATUS';

const initialState = {
  data: [],
  status: 'iddle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return { ...state, data: [...state.data, ...action.payload] };
    case COMPLETE_STATUS:
      return { ...state, status: 'completed' };
    default:
      return state;
  }
};

export default reducer;

const addMissions = (missionsArray) => ({
  type: ADD_MISSIONS,
  payload: missionsArray,
});

const completeStatus = () => ({
  type: COMPLETE_STATUS,
});

export { addMissions, completeStatus };

const getMissions = () => (async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsArray = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  dispatch(addMissions(missionsArray));
  dispatch(completeStatus());
});

export { getMissions };
