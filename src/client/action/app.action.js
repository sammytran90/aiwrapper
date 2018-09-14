export const CHANGE_MODE = 'CHANGE_MODE';

export default function appModeSwitcher(mode) {
    return {
        type: CHANGE_MODE,
        payload: mode
    }
}