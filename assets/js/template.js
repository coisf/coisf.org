jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

	$.loadTpl = function(tplName) {
		var tmplDir = './static';
        var url = tmplDir + '/' + tplName + '.md';

        var ret;
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'text', //** Must add 
            async: false,
            success: function(data) {
                ret = data;
            }
        });
        return ret;
	}
});