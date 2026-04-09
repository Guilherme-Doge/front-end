let account = {
    saldo : 1000.00,
    titular : "Guilherme",

    depositar: function(value) {
        this.saldo += value;
    },

    sacar: function(value) {
        this.saldo -= value;
    },

    verSaldo: function() {
        return this.saldo;
    }
};