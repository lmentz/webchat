<template>
	<div class="container">
		<div class="chatwindow">
			<p v-if='loading'> loading...</p>
			<p v-for='msg in messages' :key='msg.id'>{{ msg }}</p>
		</div>
		<div class="sendmsg">
			<input v-model="author" id="input-author" type="text" placeholder="your-name-here"/>
			<input v-model="message" id="input-message" type="text" placeholder="your-message-here"/>
			<button id="button-sendmessage" v-on:click="chatSend">Send</button>
		</div>
	</div>
</template>

<script>
/*eslint no-console: 0*/
import axios from 'axios'
var api = require('./apiendpoint.json')

export default {
	name: 'ChatWindow',
	props: {
		msg: String
	},
	data: function () {
		return {
			loading: true,
			messages: [],
			cur_id: 0,
			new_id: 0,
			author: '',
			message: ''
		}
	},
	mounted: function() {
		this.chatInit()
	},
	methods: {
		chatInit: function () {
			// this.chatSync()
			// this.cur_id = this.new_id
			setInterval(this.chatUpdate, 1000)
		},
		chatSync: function () {
			axios.get(api.uri + '/chat')
				.then((response) => {
					console.log(response)
					this.new_id = response.data;
					this.loading = false
				})
				.catch((error) => {
					console.log(error)
				})
		},
		chatGet: function () {
			if (this.cur_id < this.new_id) {
				axios.get(api.uri + '/chat/' + this.cur_id)
					.then((response) => {
						this.messages.push(' » '+response.data.author+': '+response.data.message);
						this.cur_id++
						this.chatGet()
					})
					.catch((error) => {
						console.log('error').log(error)
					})
			}
		},
		chatUpdate: function () {
			this.chatSync()
			this.chatGet()
		},
		chatSend: function () {
			axios.post(api.uri + '/chat', {
				author: this.author,
				message: this.message
			}).then(() => {
				this.message = ''
			}).catch((error) => {
				console.log(error)
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatwindow {
	height: 18em;
	overflow-y: scroll;
	line-height: 0.3em;
	text-align: left;
	background-color: #f0ede9;
	white-space: pre;
}

.sendmsg {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

#input-author {
	position: relative;
	min-width: 20ch;
	width: 18%;
	left: 0px;
	display: inline-block;
}

#input-message {
	min-width: 50ch;
	width: 74%;
	margin-left: auto;
	margin-right: auto;
	display: inline-block;
}

#button-sendmessage {
	min-width: 6ch;
	width: 5%;
	right: 0px;
	display: inline-block;
}
</style>
