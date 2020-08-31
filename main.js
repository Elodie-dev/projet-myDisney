(function(w,d){ // déclaration de ma fonction avec les parametres "w"(pour Window) et "d"(pour document)
 
		body = d.querySelector('body'), //récupération de mon élément body
		header = d.getElementById('header'), // récupération de mon élément header
		menuIsStuck = function(triggerElement) { // Déclaration de ma fonction menuIsStuck


			var wScrollTop	= w.pageYOffset || body.scrollTop, // Déclaraion de ma variable wScrollTop (en gros pour qd l'utilisateur scroll)
				classFound	= body.classList.contains('nav-is-stuck'), // Déclaration de ma variable classFound qui vérifie que le body a la class "nav-is-stuck"
				navHeight	= header.clientHeight, // Déclaration de ma variable navHeight qui contient la hauteur de mon header
				bodyRect	= body.getBoundingClientRect(), // Déclaration de ma variable bodyRect qui contient la taille de mon body.
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 600; // Déclaration de ma variable scrollValue qui dit que si mon parametre triggerElement existe alors je récupère sa position top par rapport à la taille de mon body et la hauteur de ma nav, sinon je renvoie 600.
 
		
			if ( wScrollTop > scrollValue && !classFound ) { // si le scroll est supérieur à 600 ou qu'il a atteint le triggerElement et la class nav-is-stuck n'existe pas sur body
				body.classList.toggle('nav-is-stuck');// J'ajoute à mon body la class "nav-is-stuck"
                body.style.paddingTop = navHeight + 'px'; // J'ajoute à mon body un padding top de la hauteur de ma nav en px
				header.classList.toggle('toggle'); // Je fais un toggle de la class 'toggle' sur mon header
				console.log(navHeight);
			}
 
			
			if ( wScrollTop < 100 && classFound ) {// si le scroll est inférieur à 100 et la class nav-is-stuck existe
				body.classList.toggle('nav-is-stuck'); // J'écrase la valeur de la class de mon body pour lui attribuer rien
                body.style.paddingTop = '0'; // Je définis le padding top de mon body a 0
                header.classList.toggle('toggle'); // Je fais un toggle de la class 'toggle' sur mon header
			}

		},
		onScrolling = function() {
			menuIsStuck( d.querySelector('.logo') ); // Ici je passe en paramètre de ma fonction menuIsStuck ma div class "logo" qui sera l'élément déclencheur de l'apparition de ma nav
		};
 
	
	w.addEventListener('scroll', function(){ // quand on scroll
		w.requestAnimationFrame( onScrolling ); // on exécute la fonction onScrolling()
	});
 
}(window, document));

(function(w,d){ // déclaration de ma fonction avec les parametres "w"(pour Window) et "d"(pour document)
 
		body = d.querySelector('body'), //récupération de mon élément body
		div = d.getElementById('toast'), // récupération de mon élément div class "toast"
		divIsStuck = function(triggerElement) { // Déclaration de ma fonction divIsStuck


			var wScrollTop	= w.pageYOffset || body.scrollTop,
				classFound	= div.classList.contains('toast'), // Déclaration de ma variable classFound qui vérifie que la div a la class "toast"
				divHeight	= div.offsetHeight, // Déclaration de ma variable divHeight qui contient la hauteur de ma div
				bodyRect	= body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - divHeight  : 100; // Déclaration de ma variable scrollValue qui dit que si mon parametre triggerElement existe alors je récupère sa position par rapport à la taille de mon body et la hauteur de ma div, sinon je renvoie 600.
 
		
			if ( wScrollTop < scrollValue && !classFound ) { // si le scroll est inférieur à 100 ou qu'il n'a pas atteint le triggerElement et la class toast n'existe pas sur ma div
				div.classList.toggle('toast'); // toggle class "toast"
                body.style.paddingBottom = divHeight + 'px'; // J'ajoute à mon body un padding bot de la hauteur de ma div en px
                div.classList.toggle('toggle'); // Je fais un toggle de la class 'toggle' sur ma div
			}
 
			
			if ( wScrollTop > scrollValue && classFound || wScrollTop < 100 && classFound ) {// si le scroll est inférieur à 100 et la class toast existe ou s'il a atteint le triggerElement
				div.classList.toggle('toast'); // toggle class "toast"
                body.style.paddingBottom = '0'; // Je définis le padding bot de mon body a 0
                div.classList.toggle('toggle'); // Je fais un toggle de la class 'toggle' sur ma div
			}

		},
		onScrollingBot = function() {
			divIsStuck( d.querySelector('.tv') ); // Ici je passe en paramètre de ma fonction divIsStuck ma div class "tv" qui sera l'élément déclencheur de la dispartion de ma div
		};
 
	
	w.addEventListener('scroll', function(){ // quand on scroll
		w.requestAnimationFrame( onScrollingBot ); // on exécute la fonction onScrolling()
	});
 
}(window, document));


