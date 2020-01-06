import '../css/style.css';
import '../css/style.scss';
import 'normalize.css';

import setConfAfterReload from "./model/loadApp/setConfAfterReload";
import listenerEvent from "./controller/listenerEvent";



setConfAfterReload();

function init() {
  listenerEvent();
}

init();

// function onSignIn(googleUser) {
// 	var profile = googleUser.getBasicProfile();
// 	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
// 	console.log('Name: ' + profile.getName());
// 	console.log('Image URL: ' + profile.getImageUrl());
// 	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }


