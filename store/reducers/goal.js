import { ADD_GOAL, SET_GOAL, REMOVE_GOAL } from '../actions/goal';

const initialState = {
    goals: []
};

const goalReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_GOAL:
            return {
                ...state,
                goals: action.goals
            };

        case ADD_GOAL:
            const updatedGoals = [...state.goals];
            updatedGoals.push(action.goalData);
            return {
                ...state,
                goals: updatedGoals
            };

        case REMOVE_GOAL:
            return {
                ...state,
                goals: state.goals.filter((goal) => goal.id !== action.goalId)
            };

        default:
            return state;
    }
};

export default goalReducer;
