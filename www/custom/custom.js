//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.

//import index from "./bdd/index.js";


function deviceReady() {
	
	try {
		//Example when Internet connection is needed but not mandatory
		//Ejemplo de cuando se necesita conexióna a Internet pero no es obligatoria.
		if (!mui.connectionAvailable()){
			if ('plugins' in window && 'toast' in window.plugins)
				mui.toast('We recommend you connect your device to the Internet');
			else
				mui.alert('We recommend you connect your device to the Internet');
		}
		
		//Install events, clicks, resize, online/offline, etc. 
		installEvents();

		//Hide splash.
		//Ocultar el splash.
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		}
	} catch (e) {
		mui.alert(e.message);
	}
}

/**
 * Install events, clicks, resize, online/offline, etc., on differents HTML elements.
 * Instala eventos, clicks, resize, online/offline, etc., sobre diferentes elementos HTML.
 */
function installEvents() {
	
	mui.util.installEvents([
		//It's a good idea to consider what happens when the device is switched on and off the internet.
		//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
		{
			id: document,
			ev: 'online',
			fn: () => {
				mui.alert('online','Connection');
			}
		},
		{
			id: document,
			ev: 'offline',
			fn: () => {
				mui.alert('offline','Connection');
			}
		},
		//Typically fired when the device changes orientation.
		//Típicamente disparado cuando el dispositivo cambia de orientación.
		{
			id: window,
			ev: 'resize',
			fn: () => {
				console.log('resize');
			}
		},
		//Mail list click/touch events. See that if the event is not specified, click is assumed.
		{
			id: '.mui-backarrow',
			fn: () => {
				mui.history.back();
				return false;
			}
		},
		{
			id: '.mui-headmenu, #gomodal',
			fn: () => {
				mui.screen.showPanel('menu-panel', 'SLIDE_LEFT');	//ATENTION!!! mui.screen instead mui.viewport
				return false;
			}
		},
		{
			id: '#gohome',
			fn: () => {
				mui.viewport.showPage('home-page','DEF');
				return false;
			}
		},
		{
			id: '#gocontent',
			fn: () => {
				mui.viewport.showPage('content-page','DEF');
				return false;
			}
		},
		{
			id: '#goingresar',
			fn: () => {
				mui.viewport.showPage('ingresar-page','DEF');
				return false;
			}
		},
		{
			id: '#goiniciohuesped',
			fn: () => {
				mui.viewport.showPage('inicio-huseped-page','DEF');
				return false;
			}
		},
		{
			id: '#goreglas',
			fn: () => {
				mui.viewport.showPage('reglas-page','DEF');
				return false;
			}
		},
		{
			id: '#gopreguntas',
			fn: () => {
				mui.viewport.showPage('preguntas-page','DEF');
				return false;
			}
		},
		{
			id: '#goavistamientos',
			fn: () => {
				mui.viewport.showPage('avistamientos-page','DEF');
				return false;
			}
		},
		{
			id: '#gosenderos',
			fn: () => {
				mui.viewport.showPage('senderos-page','DEF');
				return false;
			}
		},
		{
			id: '#gomapa',
			fn: () => {
				mui.viewport.showPage('mapa-page','DEF');
				return false;
			}
		},
		{
			id: '#goactividades',
			fn: () => {
				mui.viewport.showPage('actividades-page','DEF');
				return false;
			}
		},
		{
			id: '#goaves',
			fn: () => {
				mui.viewport.showPage('aves-page','DEF');
				return false;
			}
		},
		{
			id: '#goflora',
			fn: () => {
				mui.viewport.showPage('flora-page','DEF');
				return false;
			}
		},
		{
			id: '#gofauna',
			fn: () => {
				mui.viewport.showPage('fauna-page','DEF');
				return false;
			}
		},
		{
			id: '#gosendero1',
			fn: () => {
				mui.viewport.showPage('sendero1-page','DEF');
				return false;
			}
		},
		{
			id: '#gosendero2',
			fn: () => {
				mui.viewport.showPage('sendero2-page','DEF');
				return false;
			}
		},
		//Toolbar options ------------------------------------------
		{
			id: '#tabbar-button1',
			fn: () => {
				mui.viewport.showPage('inicio-huesped-page', 'NONE');
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		{
			id: '#tabbar-button2',
			fn: () => {
				mui.viewport.showPage('diversion-page', 'NONE');
				mui.history.reset();	//Look at this
				return false;
			}
		},
		{
			id: '#tabbar-button3',
			fn: () => {
				mui.history.reset();	//Look at this!
				mui.viewport.showPage('recorrer-page', 'DEF');
				return false;
			}
		},
		{
			id: '#tabbar-button4',
			fn: () => {
				mui.viewport.showPage('chat-page', 'DEF');;
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		{
			id: '#tabbar-button5',
			fn: () => {
				mui.viewport.showPage('perfil-page', 'DEF');
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		//API test options
		{
			id: '#api-cordova',
			fn: () => {
				if (mui.cordovaAvailable())
					mui.alert('Cordova/Phonegap is available!', 'Hurrah');
				else
					mui.alert('Cordova/Phonegap not available.');
				return false;
			}
		},
		{
			id: '#api-ismobile',
			fn: () => {
				if (mui.isMobileDevice.any())
					mui.alert('True', 'Hurrah');
				else
					mui.alert('False');
				return false;
			}
		},
		{
			id: '#api-vibrate',
			fn: () => {
				if (mui.cordovaAvailable())
					mui.vibrate();
				else
					mui.alert('Vibrate unavailable');
				return false;
			}
		},
		{
			id: '#api-busy',
			fn: () => {
				mui.busy(true);
				setTimeout(function() {
					mui.busy(false);
				}, 2000);
			}
		},
		{
			id: '#api-alert',
			fn: () => {
				mui.alert('Hello MUI', 'Cheers');
				return false;
			}
		},
		{
			id: '#api-confirm',
			fn: () => {
				mui.confirm('Are you happy?', function(buttonIndex) {
					mui.alert('Yo press button ' + buttonIndex, 'Result');
				},
				'Happiness',
				['Yes', 'No']
			);
			return false;
			}
		},
		{
			id: '#api-prompt',
			fn: () => {
				mui.prompt('How old are you?', function(result) {
					mui.alert('You pressed button ' + result.buttonIndex + '. Value=' + result.input1, 'Result');
				},
				'Age',
				['Ok', 'No thanks!'],
				'90'
			);
			return false;
			}
		},
		{
			id: '#api-connection',
			fn: () => {
				mui.alert(mui.getConnectionType(), 'Connection Type');
				return false;
			}
		},
		{
			id: '#api-toast',
			fn: () => {
				var msg;
				if (mui.cordovaAvailable() && mui.isMobileDevice.any())
					msg = 'This is a toast message';
				else
					msg = 'Using mui.alert() for compatibility when toast plugin are not available';
				mui.toast(msg, 'center', 'long');
				return false;
			}
		},
		{
			id: '#api-version',
			fn: () => {
				mui.alert(mui.version.toString(), 'Version');
				return false;
			}
		},
		{
			id: '#api-platform',
			fn: (currentPageId, originalTarget, event, startX, startY, endX, endY) => {
				if (mui.cordovaAvailable() && device && device.platform) {
					alert(device.model + '; ' + device.platform + ' - ' + device.version);
				}
				return false;
			}
		},
		//MobileUI viewport specific event.
		{
			vp: mui.viewport,
			ev: 'swiperight',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.history.back();
				}
			}
		},
		{
			vp: mui.viewport,
			ev: 'swipeleftdiscover',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.screen.showPanel('menu-panel', 'SLIDE_LEFT');	//ATENTION!!! mui.screen instead mui.viewport
					return false;
				}
			}
		}
	]);
	
	//Old fashion events style. Yes, of course is possible. It's a web standard!
	//jQuery
	$('#samplelist').click(function() {
		mui.alert('Nothing to do!', "Attention");
		return false;
	});
	
	//Pure javascript
	var menuOptions = document.getElementById('menuoptions')
	menuOptions.addEventListener('click', function() {
		mui.alert('Sorry. Nothing to do!', "Attention");
		return false;
	}, false);
	
}


/**
 * Courtesy: Open an url using InAppBrowser plugin.
 * Cortesía: Abre una url usando InAppBrowser plugin.
 * @param url
 */
function openInAppBrowser(url) { 
	window.open(encodeURI(url), '_blank', 'location=yes,closebuttoncaption=Volver,presentationstyle=pagesheet,transitionstyle="fliphorizontal",EnableViewPortScale=yes');
}

/**
 * Util function to force page link to be open in InAppBrowser.
 * Función Util para forzar que los links se abran en InAppBrowser.
 * @param id
 */
function linksForInAppBrowser(pageId){
	var idd = '#'+pageId ;
	$(idd).find('a').each(function (index, element) {
		var href = $(this).attr('href');
		$(this).attr('href', '#');
		$(this).attr('target', '_self');
		$(this).attr('onclick', 'window.open("' + href + '", "_blank");');
	});
}

/*MONGODB
{
	"_id": "2314245",
	"id": 1,
	"tags": [
		"Deployment"
	],
	"name": "Hola",
	"description": "wwqefw",
	"author": "wdqefw",
	"size": [
		"width": "2in",
		"heigth": "2in"
	],
	"image": "/s/s/s.png"
}*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
	name: String,
	email: String,
	password: String,
})

const HuespedSchema = Schema({
	user: Object,
	score: Number,
	room: {type: String, enum: ['El Ceibo', 'Los Ombues', 'La Pindo y Los Mataojos']}
})

const AvistamientoSchema = Schema({
	category: String,
	name: String,
	description: String,
	img: String
})

const ActividadesSchema = Schema({
	name: String,
})

const SenderoSchema = Schema({
	name: String,
	map: String,
	QR: String,
})

const MapSchema = Schema({
	name: String,
	description: String,
	QR: String,
})

const ChatSchema = Schema({
	user: Object,
	questions: {type: String, enum: ['El Ceibo', 'Los Ombues', 'La Pindo y Los Mataojos']},
	answers: {type: String, enum: ['El Ceibo', 'Los Ombues', 'La Pindo y Los Mataojos']}
})

mongoose.model('User', UserSchema)
mongoose.model('Huesped', HuespedSchema)
mongoose.model('Avistamiento', AvistamientoSchema)
monggose.model('Actividades', ActividadesSchema)
mongoose.model('Senderos', SenderosSchema)
mongoose.model('MapaInteractivo', MapaSchema)
mongoose.model('Chat', ChatSchema)

JS

const User = require('./models/User')
const Huesped = require('./models/Huesped')
const Avistamiento = require('./models/Avistamiento')
const Actividades = require('./models/Actividades')
const Senderos = require('./models/Senderos')
const MapaInteractivo = require('./models/MapaInteractivo')
const Chat = require('./models/Chat')


function getData()
{
	var name = document.getElementById('nombreHuesped').value;
	var password = document.getElementById('passwordHuesped').value;
	var room = document.getElementById('roomHuesped').value;

	document.registre.name.value = name;
	document.registre.pass.value = password;
	document.registre.room.value = room;
}


/*VUE

vm = new Vue ({
	el: '#vue-app’,
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		myMetodo: function() {}
	},
	computed: {
		miVarComputed: function() {}
	},
	mounted: function() {
	}
});


*/