export const intentMode = 'INTENT_MODE';
export const entitiesMode = 'ENTITIES_MODE';

export default function (state = intentMode, action) {
    switch (action.type) {
        case CHANGE_MODE:
            return action.payload;
    }
    return state;
}