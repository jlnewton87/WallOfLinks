var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CompanyWeb');
var Schema = mongoose.Schema();

module.exports = {
	panel: mongoose.model('panel', {
		title: String,
		order: {type: Number, default: 1},
		links: [{
			href: String,
			text: String,
			order: {type: Number, default: 1}
		}]
	})
}