var hbs = require('hbs');

module.exports = {
	mockPanelHelper: function(object){
	  var output = "<ul>";
	  object.forEach(function(element) {
	    output += "<li>" + element.title + "</li>";
	  }, this);
	  output += "</ul>";
	  return new hbs.SafeString(output);
	},
	panelHelper: function(object){
		var index = 0;
		var rowCount = 0;
		var output = '';
		object.sort(function(a,b){return a.order - b.order;}).forEach(function(element){
				if(index == 0){
					output += '<div class="row" id="row-' + ++rowCount + '">';
				}
				output += '<div class="col-md-4" id="' + element._id + '-container">'
				+'<div id="' + element._id + '" style="display:none">' + element.title + '</div>'
				+'<div id="' + element._id + '-order" style="display:none">' + element.order + '</div>'
				+'<div class="panel panel-info">'
	    		+'<div class="panel-heading">'
           		+'<span>' + element.title
		   		+'<div class="dropdown edit">'
                +'<button class="btn btn-default dropdown-toggle" type="button" id="edit1" data-toggle="dropdown" aria-expanded="true">'
                +'<span class="glyphicon glyphicon-edit"></span>'
                +'<span class="caret"></span>'
                +'</button>'
                +'<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">'
                +'<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="addLink(\'' + element._id + '\')"><span class="label label-success"><span class="glyphicon glyphicon-plus"></span></span> Add Link</a></li>'
                +'<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="editPanel(\'' + element._id + '\')"><span class="label label-success"><span class="glyphicon glyphicon-pencil"></span></span> Edit</a></li>'
                +'<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="removePanel(\'' + element._id + '\')"><span class="label label-danger"><span class="glyphicon glyphicon-trash"></span></span> Delete</a></li>'
                +'</ul>'
                +'</div>'
	            +'</span>'
	            +'</div>'
	            +'<div class="panel-body">'
				+'<ul style="display: block">';
	            if (typeof(element.links) !== 'undefined') {
						element.links.sort(function(a,b){return a.order - b.order;}).forEach(function(link){
						output += '<li class="panel-link"><a href="' + link.href +'" class="' + link.order + '" target="_blank">' + link.text +'</a></li>';
					});
				}
				output += '</ul>'
	            +'</div>'
	            +'</div>'
	        	+'</div>';	
				
				if(index == 2){
					output += '</div>';
					index = 0;
				}
				else{
					index++;
				}
		});
	  	return new hbs.SafeString(output);
	}
};
