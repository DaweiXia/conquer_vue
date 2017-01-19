var app5 = new Vue({
	el: '#app5',
	data:{
		message:"Hello Vue!"
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join("");
		}
	}
})