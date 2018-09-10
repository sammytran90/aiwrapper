import { intentMode, entitiesMode } from './applicationMode';

export default function () {
    return [
        { title: 'Intents', appMode: intentMode },
        { title: 'Entities', appMode: entitiesMode }
    ]
}
