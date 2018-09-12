new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () { alert('Button clicked') },
        changeValue: function (event) { this.value = event.target.value }
    }
});