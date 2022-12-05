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

/*function user() {
	const mongoose = require('mongoose');
	const bcrypt = require('bcrypt');

	const saltRounds = 10;


	const UserSchema = new mongoose.Schema({
		nombreHuesped: { type: String, required: true, unique: true },
		passwordHuesped: { type: String, required: true },
		habitacionHuesped: { type: String, required: false, unique: true}
	});

	UserSchema.pre('save', function (next) {
		if (this.isNew || this.isModified('passwordHuesped')) {
			const document = this;

			bcrypt.hash(document.passwordHuesped, saltRounds, (err, hashedPassword) => {
				if (err) {
					next(err);
				} else {
					document.passwordHuesped = hashedPassword;
					next();
				}

			});
		} else {
			next();
		}
	});

	UserSchema.methods.isCorrectPassword = function (passwordHuesped, callback) {
		bcrypt.compare(passwordHuesped, this.passwordHuesped, function (err, same) {
			if (err) {
				callback(err);
			} else {
				callback(err, same);
			}
		});
	}

	module.exports = mongoose.model('User', UserSchema);


}

function app() {
	const express = require('express');
	const path = require('path');
	const bodyParser = require('body-parser');
	const app = express();

	const bcrypt = require('bcrypt');
	const mongoose = require('mongoose');
	const User = requiere('./user');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(express.static(path.join(_dirname, 'public')));

	var MongoClient = require('mongodb').MongoClient;
	const mongo_url = 'mongodb://localhost:27017/mydb';

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
			console.log("Database created!");
			db.close();
		});

	mongoose.connect(mongo_url, function (err) {
		if (err) {
			throw err;
		} else {
			console.log('Successfully connected to ${mongo_url}');
		}
	});

	app.post('/register', (req, res) => {
		const { nombreHuesped, passwordHuesped, habitacionHuesped } = req.body;

		const user = new user({ nombreHuesped, passwordHuesped, habitacionHuesped });

		user.save(err => {
			if (err) {
				res.status(500).send('Error al registrar usuario');
			} else {
				res.status(200).send('Usuario registrado');
			}
		});
	});
	app.post('/authenticate', (req, res) => {
		const { nombreHuesped, passwordHuesped, habitacionHuesped } = req.body;

		User.findOne({ nombreHuesped }, (err, user) => {
			if (err) {
				res.status(500).send('Error al autenticar usuario');
			} else if (!user) {
				res.status(500).send('El usuario no existe')
			} else {
				user.isCorrectPassword(passwordHuesped, (err, result) => {
					if (err) {
						res.status(500).send('Error al autenticar');
					} else if (result) {
						res.status(200).send('Usuario autenticado correctamente');
					} else {
						res.status(500).send('Usuario y/o Contraseña incorrecto');
						console.log('...')
					}
				});
			}
		});
	});

	//app.get('/', (req,res) => {

	//});

	app.listen(3000, () => {
		console.log('server started');
	})
	module.exports = app;
}*/