let completed =[];
    let active =[];
    let others =[];

class NotesStore {
    //add your code here  
   addNote(state, name) {
        if (name === undefined || name === null || name === '') {
            throw new Error('Name cannot be empty');
        }
        if (!this.isValid(state)) {
            throw new Error('Invalid state ' + state);
        }
        this.getNotesList(state).push(name);
    }

    getNotes(state) {
        if (!this.isValid(state)) {
            throw new Error('Invalid state ' + state);
        }
        return this.getNotesList(state);
    }

    getNotesList(state) {
        if (state === 'completed') {
            return completed;
        } else if (state === 'active') {
            return active;
        }
        return others;
    }

    isValid(state) {
        return state === 'completed'
            || state === 'active'
            || state === 'others';
    }
}
