var mongoose = require("mongoose");
mongoose.connect('mongodb://dude:27017/CompanyWeb');
var Schema = mongoose.Schema();

module.exports = {
	panel: mongoose.model('panel', {
		title: String,
		links: [{
			href: String,
			text: String
		}]
	})
}