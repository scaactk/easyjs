window.onload = function() {
	var h = document.getElementsByClassName('up')[0];
	var u = document.getElementsByTagName('ul')[0];
	h.onclick = function(){
		if(u.style.display==='none'){
			u.style.display='';
			this.className = 'up';
		}
		else{
			u.style.display='none';
			this.className = 'down';
		}
	}
}