// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Coffee Shop',
	dialog: {
		title: 'Coffee Shop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/roatan/',
    	url: 'roatan.html',
    	name: 'roatan',
  		},
		{
		path: '/valle/',
    	url: 'valle.html',
    	name: 'valle',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
		,
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

