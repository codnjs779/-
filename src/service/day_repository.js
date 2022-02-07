import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class DayRepository {
    constructor(app) {
        this.db = getDatabase(app);
    }
    saveDiary(userId, day) {
        set(ref(this.db, `${userId}/days/${day.id}`), day);
    }

    removeDiary(userId, day) {
        remove(ref(this.db, `${userId}/days/${day.id}`));
    }
}

export default DayRepository;
