'use strict';

const records = [
  { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', email: 'jack@example.com' },
  { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', email: 'jill@example.com' }
];

exports.findById = function(id, callback) {
  const idx = id - 1;
  if (records[idx]) {
    setImmediate(callback, null, records[idx]);
  } else {
    setImmediate(callback, new Error(`User with id ${id} does not exist`));
  }
}

exports.findByUsername = function(username, callback) {
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    if (record.username === username) {
      return void setImmediate(callback, null, record);
    }
    setImmediate(callback);
  }
}
