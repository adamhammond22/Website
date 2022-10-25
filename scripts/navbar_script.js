/*Global Var tracking if menu is collapsed (only edit with NavbarCollapseToggle())*/
let collapsed = "false"
/*Global Var tracking if menu is activated (only edit with OptionDisplayToggle())*/
let menu_activated = "false"

/*Collapse and Un-collapses the navbar if applicable, adding / removing extra menu button*/
function NavbarCollapseToggle() {
	
	console.log("Navbar collapsed:" + collapsed);

	if((window.innerWidth < 800) && (collapsed == "false")) {

		console.log("Collapse:");
	
		/*Hide All Options if collapsing*/
		OptionDisplayToggle("false");

		/*Show Menu Button*/
		 MenuButtonDisplayToggle("true");
		collapsed = "true";
	}
	
	else if((window.innerWidth >= 800) && (collapsed == "true")) {

		console.log("UnCollapse");

		/*Show All Options if un-collapsing*/
		OptionDisplayToggle("true");

		/*Hide Menu Button*/
		MenuButtonDisplayToggle("false");
		collapsed = "false";
	}

}

/*Toggles Activation of navbar menu if applicable*/
function ActivateMenuToggle() {
	

	/*Only Works if collapsed*/
	if(collapsed == "true") {
	
		if(menu_activated == "false") {
			OptionDisplayToggle("true");
		}
		else {
			OptionDisplayToggle("false");
		}
	}

}

/*Toggles Display of options and menu_activated Var*/
function OptionDisplayToggle(show) {
	
	var navbar_ref = document.getElementById("navbar");
	var navbar_anchors = navbar_ref.getElementsByClassName("option");
	
	/*Check for null ref*/
	if(navbar_anchors) {

		/*If we show do this*/
		if(show == "true") {
			
			for (var i = navbar_anchors.length - 1; i >= 0; i--) {
				navbar_anchors[i].style.display = "initial";
				console.log("show")
	
			}

			/*Make tall background*/
			navbar_ref.style.height = "230px";

			var content_ref = document.getElementById("content");
			content_ref.style.width = "80%";

			menu_activated = "true";
		}
		/*If we hide do this*/
		else {
			for (var i = navbar_anchors.length - 1; i >= 0; i--) {
				navbar_anchors[i].style.display = "none";
				console.log("else")
			}

			var content_ref = document.getElementById("content");
			content_ref.style.width = "100%";

			/*Make normal background*/
			navbar_ref.style.height = "30px";

			menu_activated = "false"
		}
	}

}

function MenuButtonDisplayToggle(show) {
	var menu_button_ref = document.getElementById("menu_button");
	
	/*Check for null ref*/
	if(menu_button_ref) {

		if(show == "true") {
			menu_button_ref.style.display = "initial";
		} 
		else {
			menu_button_ref.style.display = "none";
		}
	}
}