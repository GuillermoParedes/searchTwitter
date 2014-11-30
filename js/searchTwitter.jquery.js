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

 			self.search = (typeof options === 'string')
 			? options
 			: options.search;
 			self.options = $.extend({}, $.fn.queryTwitter.options,options);
 				options);
 			self.cycle();
 		},
 		cycle:function(){
 			var self = this;
 			self.fetch().done(function(results){
 				results = self.limit( results.results, self.options.limit);
 				
 				self.buildFrag(results);
 				
 				self.display();

 				if( typeof self.options.onComplete === 'function') {
 					self.options.onComplete.apply(self.elem, arguments);
 				}
 			});
 		}
 		fetch: function(){
 			return $.ajax({
 				url: this.url,
 				data: {q: this.search},
 				dataType: 'jsonp'
 			});
 		},
 		buildFrag: function(){
 			var self= this;
 			self.tweets = $.map(results, function(obj,i){
				return $(self.options.wrapEachWith).append(obj.text)[0];

 			});
 			console.log('self.tweets');
 		},
 		display: function(){
 			this.$elem.html(this.tweets);
 		},
 		limit: function(obj, count) {

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
 		search : '@tutspremium',
		wrapEachWith: '<<li></li>',
		limit: 10,
		refresh: null,
		onComplete: null  		
 	}
 })($ ,window,document);

 