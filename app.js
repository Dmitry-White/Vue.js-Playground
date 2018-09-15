new Vue({
    el: '#exercise',
    data: {
        interval: '',
        effect: true,
    },
    methods: {
        startEffect: function () {
            var vm = this;
            clearInterval(vm.interval);
            vm.interval = setInterval(function () {
                vm.effect = !vm.effect;
            }, 1000);
        }
    }
});
