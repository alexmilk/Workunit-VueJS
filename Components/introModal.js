Vue.component('notification',{
	template: '<h5 class="pull-left">{{name}}</h5>',
	data: function(){
		return {
			name: "Note: leave blank values before loading defaults."
		}
	}
});