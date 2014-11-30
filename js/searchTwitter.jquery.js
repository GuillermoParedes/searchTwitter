 // Autor: GUillermo David Paredes Torrez
 // Compani: Redefined Ind
 // Business: TST
if( typeof Object.create !== 'function'){
	Object.create = function (obj) {
		function F () {};
		F.prototype = obj;
		return new F();
	}
}
 ;(function($,window,document,undefined){
 	var Twitter = {
 		init: function(options, elem){
 			var self = this;
 			self.elem = elem;
 			self.$elem = $(elem);

 			self.url = 'http://search.twitter.com/search.json';

 			if( typeof options === 'string') {
 				self.search = options
 			}else {
 				self.search = options.search;
 				self.options = $.extend({}, $.fn.queryTwitter.options,options);
 				console.log(self.options);
 			}
 		} 
 	}

 	$.fn.queryTwitter = function(options){
 		return this.each(function(){
 			console.log(Twitter);
 			var twitter = Object.create(Twitter);
			twitter.init(options,this);
 		});
 	};

 	$.fn.queryTwitter.options = {
 		search : '@tutspremium'
 	}
 })($ ,window,document);

 