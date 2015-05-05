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

//Set click for show cart
var openCart = document.querySelector(".open-cart");
var blocRightBackground = document.querySelector("#bloc_right_background");

openCart.addEventListener("click", function(event) {
	event.preventDefault();

	blocRightBackground.style.display = "block";
	document.querySelector("#bloc_right").style.display = "block";
	
	document.body.className += "no-scroll";
});
blocRightBackground.addEventListener("click", function(){
	blocRightBackground.style.display = "";
	document.querySelector("#bloc_right").style.display = "";
	
	document.body.className = document.body.className.replace("no-scroll", "");
});

function determinateMarginTopBody() {
	var headerHeight = document.querySelector("header").clientHeight;
	document.body.style.marginTop = headerHeight + "px";
}

determinateMarginTopBody();

window.onresize = function(){
	document.querySelector("#drawer-toggle").checked = false;
	blocRightBackground.click();
	determinateMarginTopBody();
}