var app = new Vue({
  el:".vue",

    data: {
      mensaje: "Aprende Vue.js Fácilmente",
      src: "https://vuejs.org/images/logo.png"
      },
    created: function () {
      console.log("Holaq view")
      this.$http.get(`https://api.ipify.org/`, {}).then(response => {
        console.log(response)
       
      }, response => {
        console.log("Not response")
      });
    },
    methods: {
      showingMessage: function () {
        return this.mensaje;
      }
    }
})