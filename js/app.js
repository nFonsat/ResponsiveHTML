//Set Click Menu
var links = document.querySelectorAll(".menuDeroulant li a");
for (var i = links.length - 1; i >= 0; i--) {
	links[i].addEventListener("click", function(event) {
		if(document.body.clientWidth <= 800) {


			var submenu = this.parentNode.querySelector(".deroulant");
			if(submenu !== null) {
				event.preventDefault();

				var actifs = document.querySelectorAll(".menuDeroulant li.actif");
				for (var i = actifs.length - 1; i >= 0; i--) {
					actifs[i].className = actifs[i].className.replace("actif", "");
				};

				this.parentNode.className = this.parentNode.className + " actif";
			}
		}
	});
};

window.onresize = function(){
	document.querySelector("#drawer-toggle").checked = false;
}