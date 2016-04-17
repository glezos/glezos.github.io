function wptexturize(text) {
	text = ' '+text+' ';
	var next 	= true;
	var output 	= '';
	
	var prev 	= 0;
	var length 	= text.length;
	while ( prev < length ) {
		var index = text.indexOf('<', prev);
		if ( index > -1 ) {
			if ( index == prev ) {
				index = text.indexOf('>', prev);
			}
			index++;
		} else {
			index = length;
		}
		
		var curl = text.substring(prev, index);
		prev = index;

		if ( curl.substr(0,1) != '<' && next == true ) {
			curl = curl.replace(/---/g, '&#8212;');
			curl = curl.replace(/--/g, '&#8211;');			
			curl = curl.replace(/\.{3}/g, '&#8230;');			
			curl = curl.replace(/``/g, '&#8220;');						
			
			curl = curl.replace(/'s/g, '&#8217;s');
			curl = curl.replace(/'(\d\d(?:&#8217;|')?s)/g, '&#8217;$1');
			curl = curl.replace(/([\s"])'/g, '$1&#8216;');			
			curl = curl.replace(/(\d+)"/old/g, '$1&Prime;');						
			curl = curl.replace(/(\d+)'/g, '$1&prime;');									
			curl = curl.replace(/([^\s])'([^'\s])/g, '$1&#8217;$2');	
			curl = curl.replace(/(\s)"([^\s])/g, '$1&#8220;$2');				
			curl = curl.replace(/"(\s)/g, '&#8221;$1');						
			curl = curl.replace(/'(\s|.)/g, '&#8217;$1');	
			curl = curl.replace(/\(tm\)/ig, '&#8482;');	
			curl = curl.replace(/\(c\)/ig, '&#169;');
			curl = curl.replace(/\(r\)/ig, '&#174;');
			curl = curl.replace(/''/g, '&#8221;');	
			
			curl = curl.replace(/(\d+)x(\d+)/g, '$1&#215;$2');	
		} else if ( curl.substr(0,5) == '<code' ) {
			next = false;
		} else {
			next = true;
		}
		output += curl; 
	}
	return output.substr(1, output.length-2);	
}

function wpautop(pee) {
	pee = pee + '\n\n';
	
	pee = pee.replace(/(<blockquote[^>]*>)/g, '\n$1');
	pee = pee.replace(/(<\/blockquote[^>]*>)/g, '$1\n');
		
	pee = pee.replace(/\r\n/g, '\n');
	pee = pee.replace(/\r/g, '\n');
	pee = pee.replace(/\n\n+/g, '\n\n');
	pee = pee.replace(/\n?(.+?)(?:\n\s*\n)/g, '<p>$1</p>');
	pee = pee.replace(/<p>\s*?<\/p>/g, '');

	pee = pee.replace(/<p>\s*(<\/?blockquote[^>]*>)\s*<\/p>/g, '$1');
	pee = pee.replace(/<p><blockquote([^>]*)>/ig, '<blockquote$1><p>');
	pee = pee.replace(/<\/blockquote><\/p>/ig, '<p></blockquote>');	
	pee = pee.replace(/<p>\s*<blockquote([^>]*)>/ig, '<blockquote$1>');
	pee = pee.replace(/<\/blockquote>\s*<\/p>/ig, '</blockquote>');			
	
	
	pee = pee.replace(/\s*\n\s*/g, '<br />');
	
	return pee;
}

window.onload = function () {
	if(!document.getElementById) return false;	

	var commentArea = document.getElementById('comment');
	
	commentArea.onkeyup = function(){
		var commentString = this.value;
		commentString = wpautop(wptexturize(commentString));
		document.getElementById('preview').innerHTML = commentString;  	
	}	
}