/**
 * Created by rotem on 13/06/2017.
 */

new Vue({
    el: '#app',
    data: {
      //get value from counter object
      number: 0,
    loaded: false
  },

  methods: {
    //Send updated counter value to DB
    count: function() {
      this.number += 1;

      alert("This number is sent from vue: " + this.number)
      this.$http.post('http://localhost:1337/updateCounter', {value: this.number}).then(
        function(data) {
          alert("This value was sent from vue " + data);

          /**
           * .then(function(data) {
                conosle.log("This value was sent from vue " + data);
            });
           */
        });
    }
  }
});
