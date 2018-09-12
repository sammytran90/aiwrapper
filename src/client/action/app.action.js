export const CHANGE_MODE = 'CHANGE_MODE';

export default function appModeSwitcher(mode) {
    console.log("switch mode");
    console.log(mode);
    return {
        type: CHANGE_MODE,
        payload: mode
    }
}