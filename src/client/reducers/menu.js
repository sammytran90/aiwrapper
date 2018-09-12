import { intentMode, entitiesMode } from './applicationMode';

export default function () {
    return [
        { title: 'Intents', mode: intentMode },
        { title: 'Entities', mode: entitiesMode }
    ]
}
