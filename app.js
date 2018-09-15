new Vue({
    el: '#exercise',
    data: {
        interval: '',
        effect: true,
        color: 'green',
        width: 'wide',
        input1: 'black',
        input2: 'black',
        flag2: true
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
