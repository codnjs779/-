import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class DayRepository {
    constructor(app) {
        this.db = getDatabase(app);
    }
    syncDiary(userId, onUpdate) {
        const query = ref(this.db, `${userId}/days`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => off(query);
    }
    saveDiary(userId, day) {
        set(ref(this.db, `${userId}/days/${day.id}`), day);
    }

    removeDiary(userId, day) {
        remove(ref(this.db, `${userId}/days/${day.id}`));
    }
}

export default DayRepository;
