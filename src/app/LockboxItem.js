import lockboxItemSchema from './schema.js'

let _id_ = 0
class LockboxItem {
    constructor({title='', site='', username='', password='', strength=0, note=''} = {}) {
        this.id = _id_++;
        this.title = title;
        this.site = site;
        this.username = username;
        this.password = password;
        this.strength = strength;
        this.note = note;
        this.dateCreated = this.dateModified = this.dateLastUsed = Date.now();
        this.timesUsed = 1;
        this.history = [];
        this.isCurrentItem = true;
    }
    
    schema() {
        return lockboxItemSchema;
    }
}

export default LockboxItem;