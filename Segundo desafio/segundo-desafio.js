function dadosJogador(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    
    if(saldoVitorias < 10) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Ferro`)
    } else if (saldoVitorias >= 11 && saldoVitorias < 20) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Bronze`)
    } else if (saldoVitorias >= 21 && saldoVitorias < 50) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Prata`)
    } else if (saldoVitorias >= 51 && saldoVitorias < 80) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Ouro`)
    } else if (saldoVitorias >= 81 && saldoVitorias < 90) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Diamante`)
    } else if (saldoVitorias >= 91 && saldoVitorias < 100) {
        console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de Lendário`)
    } else {
        console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de Imortal`)
    }
}

dadosJogador(102, 2)