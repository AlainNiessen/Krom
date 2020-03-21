var menuHam = document.getElementById("men-ham");
var menuMain = document.getElementById("men-nav");

if(menuHam != null && menuMain!= null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'l-header-menu is-active') {
			menuMain.className = 'l-header-menu';
		}
		else {
			menuMain.className = 'l-header-menu is-active';
		}
	});
}
else {
	alert('un des deux éléments pas présents');
}