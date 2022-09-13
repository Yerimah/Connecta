import Dexie from 'dexie';

const db = new Dexie('connecta');
db.version(1).stores({
  bio: ',name,about',
  gallery: '++id,url',
});

export default db;
