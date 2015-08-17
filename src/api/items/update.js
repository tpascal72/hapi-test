var db = require('../../store/db');

function update(item){
	var id = item.id;
	delete item.id
	return db('items')
		.update(item)
		.where({id : id});
}

module.exports = update;