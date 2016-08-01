function getPageName() {
    var index = window.location.href.lastIndexOf("/") + 1,
        filenameWithExtension = window.location.href.substr(index),
        filename = filenameWithExtension.split(".")[0];  
    return filename;                                     
}
function mostData(mostUrl,theData){
	return $.parseJSON($.ajax({ 
        type: 'GET', 
        url: mostUrl, 
        dataType:'json',
        async: false
    }).responseText)[theData];
}
function peopleFilmList(filmUrl,parent){
$.ajax({ 
        type: 'GET', 
        url: filmUrl, 
        dataType:'json',
        success: function (data) {
        	$("#filmList"+parent).append('-' + data.title + ' (Episode ' + data.episode_id + ')\n');
        }
    });
}
function peopleList(peopleUrl){
$.ajax({ 
        type: 'GET', 
        url: peopleUrl, 
        dataType:'json',
        success: function (data) {
        	$("#peopleList").append('-' + data.name + '\n');
        }
    });
}
function movie(){
	var url = window.location.href;
	var stuff = url.split('#');
	var id = stuff[stuff.length-1];
	$.ajax({ 
        type: 'GET', 
        url: 'http://swapi.co/api/films/'+id, 
        dataType:'json',
        success: function (data) {
        	var charsLength = data.characters.length;
        	$("#the-list").append('<div class="col-md-12 col-sep"> \
			<div class="data"> \
			<p>'+ data.title +'</p> \
			<p>Episode '+ data.episode_id +'</p> \
			<p>'+ data.opening_crawl +'</p> \
			<p>'+ data.release_date +'</p> \
			<p><b>Director: </b>'+ data.director+'</p> \
			<p><b>Producer: </b>'+ data.producer +'</p> \
			<p><b>Characters:</b><br /><textarea id="peopleList" style="height:200px;" readonly></textarea></p> \
			</div> \
			</div> \
			</div>');
			for (var f=0;f<charsLength;++f){
				peopleList(data.characters[f]);
			}
        }
    });
}
function getApi(theUrl){
	var current = getPageName();
	$("#the-list").html("<!-- show list -->");
	$("#button-cont").html("<!-- show button -->");
	if (!theUrl){
		switch(current) {
		    case 'index':
			    theUrl = 'http://swapi.co/api/films/';
		        break;
		    case 'people':
		        theUrl = 'http://swapi.co/api/people/';
		        break;
		    case 'planets':
		        theUrl = 'http://swapi.co/api/planets/';
		        break;
		    case 'vehicles':
		        theUrl = 'http://swapi.co/api/vehicles/';
		        break;
		    case 'starships':
		        theUrl = 'http://swapi.co/api/starships/';
		        break;
		} 
	}
    $.ajax({ 
        type: 'GET', 
        url: theUrl, 
        dataType:'json',
        success: function (data) {
        var theLength = data.results.length;
        	switch(current) {
			    case 'index':
				        for (var i=0;i<theLength;++i){
				        	var idMovie = i+1;
				            $("#the-list").append('<div class="col-md-4 col-sep"> \
				            	<div class="data"> \
								<p><a href="movie.html#'+ idMovie +'">'+ data.results[i].title +'</a></p> \
								<p>Episode '+ data.results[i].episode_id +'</p> \
								<p>'+ data.results[i].opening_crawl +'</p> \
								<p>'+ data.results[i].release_date +'</p> \
								<p><b>Director: </b>'+ data.results[i].director+'</p> \
								<p><b>Producer: </b>'+ data.results[i].producer +'</p> \
								</div> \
								</div>');
				        }
			    break;
			    case 'people':
				        for (var i=0;i<theLength;++i){
				        	var filmListLength = data.results.length;
					            $("#the-list").append('<div class="col-md-4 col-sep"> \
					            	<div class="data"> \
									<p>'+ data.results[i].name +'</p> \
									<p>'+ mostData(data.results[i].species[0],'name') +' ('+ mostData(data.results[i].species[0],'classification') +')</p> \
									<p>'+ mostData(data.results[i].homeworld,'name') +'</p> \
									<p>'+ mostData(data.results[i].species[0],'language') +'</p> \
									<p><b>Participate in:</b><br /><textarea id="filmList'+ i +'" readonly></textarea></p> \
									</div> \
									</div>');
					            for (var f=0;f<filmListLength;++f){
					            	peopleFilmList(data.results[i].films[f],i);
					            }
					    }
			    break;
			    case 'planets':
				        for (var i=0;i<theLength;++i){
				            $("#the-list").append('<div class="col-md-4 col-sep"> \
				            	<div class="data"> \
								<p>'+ data.results[i].name +'</p> \
								<p><b>Diameter:</b> '+ data.results[i].diameter +'</p> \
								<p><b>Climate:</b> '+ data.results[i].climate +'</p> \
								<p><b>Terrain:</b><br /><textarea style="height:25px;"> '+ data.results[i].terrain +'</textarea></p> \
								<p><b>Surface water:</b> '+ data.results[i].surface_water +'</p> \
								<p><b>Population:</b> '+ data.results[i].population +'</p> \
								</div> \
								</div>');
				        }
			    break;
			    case 'vehicles':
				        for (var i=0;i<theLength;++i){
				            $("#the-list").append('<div class="col-md-4 col-sep"> \
				            	<div class="data"> \
								<p>'+ data.results[i].name +'</p> \
								<p><b>Model:</b> '+ data.results[i].model +'</p> \
								<p><b>Length:</b> '+ data.results[i].length +'</p> \
								<p><b>Crew:</b> '+ data.results[i].crew +'</p> \
								<p><b>Passengers:</b> '+ data.results[i].passengers +'</p> \
								<p><b>Vehicle class:</b> '+ data.results[i].vehicle_class +'</p> \
								</div> \
								</div>');
				        }
			    break;
			    case 'starships':
				        for (var i=0;i<theLength;++i){
				            $("#the-list").append('<div class="col-md-4 col-sep"> \
				            	<div class="data"> \
								<p>'+ data.results[i].name +'</p> \
								<p><b>Model:</b> '+ data.results[i].model +'</p> \
								<p><b>Manufacturer:</b><br /><textarea style="height:25px;"> '+ data.results[i].manufacturer +'</textarea></p> \
								<p><b>Crew:</b> '+ data.results[i].crew +'</p> \
								<p><b>Passengers:</b> '+ data.results[i].passengers +'</p> \
								</div> \
								</div>');
				        }
			    break;
			}
       		if (data.previous){
       			var url = "'"+data.previous+"'";
       			$("#button-cont").append('<button onclick="getApi('+url+');">Previous</button>');
       		}
       		if (data.next){
       			var url = "'"+data.next+"'";
       			$("#button-cont").append('<button onclick="getApi('+url+');">Next</button>');
       		}
        }
    });
}