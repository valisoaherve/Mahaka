function StyleModif() {
	var Valide = document.getElementById('Valide');
	alert(Valide.innerHTML);
	//Valide.style.display = inline;
}



// localStorage function
function StoreInformation() {
	var //sex = document.getElementsByName('sex')[0].checked == true ? 'Homme' : 'Femme',
			User = {
				sexe : document.getElementsByName('sex')[0].checked == true ? 'Homme' : 'Femme',
				Nom : document.getElementById('Nom').value,
				Prenoms : document.getElementById('Prenoms').value,
				DateDeNaissance : document.getElementById('DateDeNaissance').value,
				email : document.getElementById('email').value,
				Tel : document.getElementById('Tel').value,
				Pseudo : document.getElementById('Pseudo').value,
				ModDePasse1 : document.getElementById('ModDePasse1').value,
				ModDePasse2 : document.getElementById('ModDePasse2').value,
				News : document.getElementById('news').checked// == true ? 'coché' : 'vide'
			}	;
	localStorage.setItem('USER1',JSON.stringify(User));
}

(function VerifeInformation() {
	var VerificationDInformation = document.getElementById('VerificationDInformation'),
			InformationStockee = document.getElementById('InformationStockée'),
			//NameSaved = localStorage.getItem('Nom'),
			UserSaved = JSON.parse(localStorage.getItem('USER1'));
			VerificationDInformation.onclick = function() {
			
			if(UserSaved) {
				InformationStockee.style.display = 'block';
				document.getElementById('NameSaved').value = UserSaved.Nom;
				document.getElementById('PrenomsSaved').value = UserSaved.Prenoms;
				document.getElementById('DateDeNaissanceSaved').value = UserSaved.DateDeNaissance;
				document.getElementById('emailSaved').value = UserSaved.email;
				document.getElementById('TelSaved').value = UserSaved.Tel;
				document.getElementById('PseudoSaved').value = UserSaved.Pseudo;
				document.getElementById('ModDePasse1Saved').value = UserSaved.ModDePasse1;
				document.getElementById('ModDePasse2Saved').value = UserSaved.ModDePasse2;
				
				
				document.getElementById('newsSaved').checked = UserSaved.News;
		
				
			if(UserSaved.sexe=='Homme') {
				document.getElementsByName('sexSaved')[0].checked = true;
				} else {
					document.getElementsByName('sexSaved')[1].checked = true;
				}
			} else {
				alert('Information non trouvée');
			}
		
	};
}) ();

(function CaherInformation() {
	var HideInformation = document.getElementById('HideInformation'),
			InformationStockee = document.getElementById('InformationStockée');
	HideInformation.onclick = function() {
		InformationStockee.style.display = 'none';
	}		
}) ();


(function() { // On utilise une IEF pour ne pas polluer l'espace global
	function desactiveTooltips() {
		var spans = document.getElementsByName('span'),
				spansLength = spans.length;
				for(var i=0;i<spansLength;i++) {
					if(spans[i].className =='tooltip') {
						spans[i].style.display ='none';
					}
				}
		}
		
		// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input
	function getTooltip(element) {
		while(element = element.nextSibling) {
			if(element.className === 'tooltip') {
				return element;
			}
		}
		return false;
	}	
	
	// Fonctions de vérification du formulaire, elles renvoient "true" si tout est OK
	var check = {}; // On met toutes nos fonctions dans un objet littéral
		check['sex'] = function() {
			var sex = document.getElementsByName('sex'),
					tooltipStyle = getTooltip(sex[1].parentNode).style;
			if(sex[0].checked || sex[1].checked) {
				return true;
			}	else {
				tooltipStyle.display = 'inline-block';
				return false;
			}	
		};

		check['Nom'] = function(id) {
			var name = document.getElementById(id),
					tooltipStyle = getTooltip(name).style;
			if(name.value.length >= 2) {
				name.className = 'correct';
				tooltipStyle.display = 'none';
				return true;
			}	else {
				name.className = 'incorrect';
				tooltipStyle.display = 'inline-block';
				return false;
			}	
		};
		
		check['Prenoms'] = check['Nom']; // la fonction pour le prénom est la même que celle du nom
		
		check['Pseudo'] = function() {
			var Pseudo = document.getElementById('Pseudo'),
					tooltipStyle = getTooltip(Pseudo).style;
			if(Pseudo.value.length >4) {
				Pseudo.className = 'correct';
				tooltipStyle.display = 'none';
				return true;
			}	else {
					Pseudo.className = 'incorrect';
					tooltipStyle.display = 'inline-block';
					return false;
			}	
		};
		
		check['Tel'] = function() {
			var Tel = document.getElementById('Tel'),
					tooltipStyle = getTooltip(Tel).style;
			if(Tel.value >0300000000) {
				Tel.className = 'correct';
				tooltipStyle.display = 'none';
				return true;
			}	else {
					Tel.className = 'incorrect';
					tooltipStyle.display = 'inline-block';
					return false;
			}	
		};
		
		check['ModDePasse1'] = function() {
			var ModDePasse1 = document.getElementById('ModDePasse1'),
					tooltipStyle = getTooltip(ModDePasse1).style,
					TestPass1 = getTooltip(ModDePasse1);
					
			if(ModDePasse1.value.length >= 6) {
				ModDePasse1.className = 'correct';
				tooltipStyle.display = 'none';
				return true;
			}	else	{
				TestPass1.innerHTML ='faible';
				TestPass1.style.color ='red';
				TestPass1.style.backgroundColor ='blue';
				ModDePasse1.className = 'incorrect';
				tooltipStyle.display = 'inline-block';
				return false;
			}
		};
		
		check['ModDePasse2'] = function() {
			var ModDePasse1 = document.getElementById('ModDePasse1'),
					ModDePasse2 = document.getElementById('ModDePasse2'),
					tooltipStyle = getTooltip(ModDePasse2).style;
			if(ModDePasse1.value == ModDePasse2.value && ModDePasse2.value != '') {
				ModDePasse2.className = 'correct';
				tooltipStyle.display = 'none';
				return true;
			}	else {
					ModDePasse2.className = 'incorrect';
					tooltipStyle.display = 'inline-block';
					return false;
			}	
		};
			
		// Mise en place des événements
		(function() { // Utilisation d'une fonction anonyme pour éviter les variables globales.
				var Formulaire = document.getElementById('Formulaire'),
				inputs = document.getElementsByTagName('input'),			
				inputsLength = inputs.length;
				for (var i = 0 ; i < inputsLength ; i++) {
				if (inputs[i].type == 'text' || inputs[i].type == 'password') {
					inputs[i].onkeyup = function() {
					check[this.id](this.id); // « this » représente l'input actuellement modifié
					};
				}
			}
		Formulaire.onsubmit = function() {
			var //Bravo = document.getElementById('h3'),
					result = true;
					
			for (var i in check) {
			result = check[i](i) && result;
				}
			if (result) {
				StoreInformation();
				StyleModif();
				//alert('ok');
				document.getElementById('Nom').value = '';
				document.getElementById('Prenoms').value = '';
				document.getElementById('DateDeNaissance').value = '';
				document.getElementById('email').value = '';
				document.getElementById('Tel').value = '';
				document.getElementById('Pseudo').value = '';
				document.getElementById('MotDePasse1').value = '';
				document.getElementById('ModDePasse2').value = '';
				//alert('Le formulaire est bien rempli.');
				//document.getElementById('news').checked = false;
				//document.getElementById('Valide').innerHTML = 'OK';
				//Bravo.style.display = 'inline-block';
				
				
		/*		for (var j = 0 ; j < inputsLength ; j++) {
		if (inputs[j].type == 'text' || inputs[j].type == 'password') {
		inputs[j].className = '';
		}
		} */ // Ce code d'effacement de formulaire ne fonctionne pas encore alors qu'il fonctionne bien avec onreset.
				
				
				return false;
			} else {
				//Bravo.style.display = 'inline-block';
				//Bravo.innerHTML = 'échec de formulaire';		
				alert('Le formulaire n\'a pas été envoyé. Il y a une erreur de saisie.');
				return false;
			}
			
			};
		Formulaire.onreset = function() {
			//var Masquer = document.getElementsByName('correct');
			for (var i = 0 ; i < inputsLength ; i++) {
				if (inputs[i].type == 'text' || inputs[i].type == 'password') {
					inputs[i].className = '';
				}
			}
			//alert(Masquer.className[0]);
		desactivateTooltips();
		};
	})();
	
	// Maintenant que tout est initialisé, on peut désactiver les « tooltips »

		desactiveTooltips();
	}) ();