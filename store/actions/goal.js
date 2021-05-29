export const ADD_GOAL = 'ADD_GOAL';
export const SET_GOAL = 'SET_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export const fetchGoals = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://rn-goal-setter.firebaseio.com/goals.json', { method: 'GET' });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            };

            const resData = await response.json();
            const loadedGoals = [];
            for (const key in resData) {
                loadedGoals.push({ id: key, goal: resData[key].goal });
            };

            dispatch({ type: SET_GOAL, goals: loadedGoals });

        } catch (err) {
            throw err;
        };
    }
};

export const addGoal = (goal) => {
    // console.log("----------- Inside ADD GOAL ACTION ------------------", goal);
    return async dispatch => {
        const response = await fetch('https://rn-goal-setter.firebaseio.com/goals.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ goal })
        });

        if (!response.ok) {
            throw new Error("An Error occured");
        }

        const resData = await response.json();
        dispatch({
            type: ADD_GOAL,
            goalData: { id: resData.name, goal: goal }
        })
    };
};

export const removeGoal = (goalId) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://rn-goal-setter.firebaseio.com/goals/${goalId}.json`, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            };

            await response.json();
            dispatch({ type: REMOVE_GOAL, goalId: goalId });

        } catch (err) {
            throw err;
        };
    }
};