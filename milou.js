var text = 'hey le site xxxvideoxxx est trop bien. Viens dessus stp please';
alert(text);
if(confirm('Voulez vous allez sur la page xxxvideoxxx ,')) {
	alert('Vous allez être rediriger sur ce site');
document.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
else {
	alert('dommage');
}



myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/magenta.jpg') {
      myImage.setAttribute('src','images/magenta.jpg');
	} else {
	  myImage.setAttribute('src','images/magenta.jpg');
	}
}