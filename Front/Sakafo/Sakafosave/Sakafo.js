var Menu = ['HENAN\'OMBY SY RAVI-TOTO','HENAKISOA SAUCE','HENAKISOA sy RAVI-TOTO']


/* Ce code permet de capturer une video streaming */
  const player = document.getElementById('player');
  const constraints = {
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
		

var regime = document.getElementById('regime'),
		TitreMenu = document.getElementById('TitreMenu'),
		MenuChoisi='0'; 		
		regime.addEventListener('change', function() {
			// On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
		MenuChoisi = regime.options[regime.selectedIndex].value;
		alert(Menu[MenuChoisi]);
		//TitreMenu = Menu[MenuChoisi];
		//TitreMenu.innerHTML = Menu[MenuChoisi];
		//alert(regime.options[regime.selectedIndex].innerHTML);	
		}, true)
		
		
	/* Ce code dessine à l'écran un rectangle semi-transparent bleu. */ 	
  var exemple = document.getElementById('saryVita');
  var contexte = exemple.getContext('2d');
  contexte.fillStyle = "rgba(0,0,255,0.5)";
  contexte.fillRect(30, 30, 50, 50);	