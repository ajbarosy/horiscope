document.querySelector('#button').addEventListener('click', getFetch)

let signs = {
	aries: 'aries', 
	taurus: 'taurus', 
	gemini: 'gemini', 
	cancer: 'cancer', 
	leo: 'leo', 
	virgo: 'virgo', 
	libra: 'libra', 
	scorpio: 'scorpio', 
	sagittarius: 'sagittarius', 
	capricorn: 'capricorn', 
	aquarius: 'aquarius',
	pisces: 'pisces'

}


function getFetch(){
	let choice = document.querySelector('#email').value.toLowerCase()

	// if(choice in signs){
	// 	console.log('ok')
	// }else{
	// 	do{
	// 		choice = prompt('Please enter a valid sign')
	// 	}while(!(choice in signs))
	
	// }

	while(!(choice in signs)){
		choice = prompt('Please enter a valid sign')
	}

	const url = `https://aztro.sameerkumar.website/?sign=${choice}&day=today`

  	fetch(url, {
		method: 'POST'
	})
		.then(res => res.json())

		.then(data => {
			console.log(data)
	
			document.getElementById('current-date').innerText = data.current_date;
			document.getElementById('date-range').innerText = data.date_range
			document.getElementById('color').innerText = data.color
			document.getElementById('lucky-number').innerText = data.lucky_number
			document.getElementById('lucky-time').innerText = data.lucky_time
			document.getElementById('mood').innerText = data.mood
			document.getElementById('compatibility').innerText = data.compatibility
			document.getElementById('description').innerText = data.description
	
		  })
//makes sure descriptions appear after 'go' is clicked
function appear() {
			// document.getElementsByClassName("daily")[0].style.display = "block"
			document.getElementsByClassName("today")[0].style.display = "block"
			document.getElementsByClassName("range")[0].style.display = "block"
			document.getElementsByClassName("color")[0].style.display = "block"
			document.getElementsByClassName("luckyNum")[0].style.display = "block"
			document.getElementsByClassName("luckyTime")[0].style.display = "block"
			document.getElementsByClassName("mood")[0].style.display = "block"
			document.getElementsByClassName("compatibility")[0].style.display = "block"
			document.getElementsByClassName("description")[0].style.display = "block"

	}	
appear()





		  .catch(err => {
			  console.log(`error ${err}`)
		  });

    //   .then(res => {
	// 	  if(res.ok){
	// 		res.json()
	// 	  }else{
	// 		  throw res.status
			
	// 	  }
		  
	// parse response as JSON


     
}

// Trying to get image of specfic sign to show up when input = certain sign
// function zodiac(){

// 	if(signs == 'aquarius'){
// 		document.querySelector("#photo").innerHTML="Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm."
		
// 		// "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";

// 	}
// }







/* */


(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/bg01.jpg': 'center',
							'images/bg02.jpg': 'center',
							'images/bg03.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

	// Signup Form.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#signup-form')[0],
					$submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = false;

							// Show message.
								$message._show('success', 'Perfect!');
								//$message._show('failure', 'Something went wrong. Please try again.');

						}, 750);

				});

		})();

})();