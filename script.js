var slideIndex = 0;
var time = 5000;
var slides = document.getElementsByClassName("image");
var max = 5;
// KHai bào hàm hiển thị slide
function showSlides() {
	var i;
	for (i = 0; i < max; i++){
		slides[i].setAttribute('style', 'display: none');
	}

	slides[slideIndex].setAttribute('style', 'display: block');
	slideIndex++;

	if (slideIndex == max)
		slideIndex = 0;

    setTimeout(showSlides, time);

}
window.onload = showSlides;

function Next() {
	for (i = 0; i < max; i++){
		slides[i].setAttribute('style', 'display: none');
	}
	if (slideIndex == (max - 1)) {
		slideIndex = 0;
	} else {
		slideIndex++;
	}

	// if (slideIndex >= (max - 1)) {
	// 	slideIndex = 0;
	// } else {
	// 	slideIndex++;
	// }
	slides[slideIndex].setAttribute('style', 'display: block');
}

function Preview() {
	for (i = 0; i < max; i++){
		slides[i].setAttribute('style', 'display: none');
	}
	if (slideIndex == 0) {
		slideIndex = max - 1;
	} else {
		slideIndex--;
	}
	slides[slideIndex].setAttribute('style', 'display: block');
}