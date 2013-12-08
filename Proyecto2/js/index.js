/*This code is responsible for the functionality of the gallery*/

/*This function code is to start the page*/
$(document).on("ready", start);

/*This code is responsible for calling two functions responsible
 for opening the images in full size and function that is
 responsible for closing the image when the user presses click
 on the image*/	
function start(){
	$("#container img").on("click", openFull);
	$("#imgFull").on("click", closeFull);
}

/*This is the function responsible for opening the images in full size*/
function openFull(){
	//$(this).attr('alt'));
	var name = $(this).attr('alt') + "_big";
	var address = "img/" + name + ".jpg";
	$("#imgFull").attr('src', address);
	$("#preview").fadeIn();
}

/*This is the function responsible for closing the full-size image*/
function closeFull(){
	$("#preview").fadeOut(); 
}