'use strict';
// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

//import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js'
//import bootstrap from 'bootstrap';


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";

// function fetchPost(route, data, success) {
// 	fetch(route, { 
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
// 		body: Object.keys(data).map(key => encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&')
// 	}).then(res => res.text()).then(body => success(body));
// }


// function fetchLoad(id, route) {
// 	fetch(route).then(res => res.text()).then(body => {
// 		document.getElementById(id).innerHTML = body;
// 	});
// }
