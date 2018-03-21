function hidePars() {
	var par1 = document.getElementById("firstPar");
	if (par1.style.display === "none") {
		par1.style.display = "block";
	} else {
		par1.style.display = "none";
	}

	var par2 = document.getElementById("secondPar");
	if (par2.style.display === "none") {
		par2.style.display = "block";
	} else {
		par2.style.display = "none";
	}

	var par3 = document.getElementById("thirdPar");
	if (par3.style.display === "none") {
		par3.style.display = "block";
	} else {
		par3.style.display = "none";
	}
}