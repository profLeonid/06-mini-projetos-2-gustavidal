'use strict'

// LÓGICA

function definirMeses(parcelas) {
    let meses = []

    for (let i = 1; i <= parcelas; i++)
        meses.push(i)

    return meses
}

const calcularValorParcela = (valor, qtdeParcelas) => Number(valor / qtdeParcelas)

function calcularSaldoDevedor(meses, valor, valorParcela) {
    let saldoDevedor = []

    for (let i = 0; i <= meses.length; i++) {
        saldoDevedor.push(valor)
        valor -= valorParcela
    }

    return saldoDevedor
}

function calcularJurosMensal(saldoDevedor, taxa) {
    let jurosMensais = []
    let juros

    for (let i = 0; i < saldoDevedor.length - 1; i++) {
        juros = saldoDevedor[i] * (taxa / 100)
        jurosMensais.push(juros)
    }

    return jurosMensais
}

const calcularTotalMes = (valorParcela, jurosMensal) => Number(valorParcela + jurosMensal)

// CRIAÇÃO DA ESTRUTURA

function criarLinha(mes, parcela, juros, totalMes, divida) {
    const tbody = document.getElementById('tbody')
    const tr    = document.createElement('tr')

    const tdMes      = document.createElement('td')
    const tdParcela  = document.createElement('td')
    const tdJuros    = document.createElement('td')
    const tdTotalMes = document.createElement('td')
    const tdDivida   = document.createElement('td')

    tdMes.textContent      = mes
    tdParcela.textContent  = parcela
    tdJuros.textContent    = juros
    tdTotalMes.textContent = totalMes
    tdDivida.textContent   = divida

    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotalMes, tdDivida)

    tbody.appendChild(tr)
}

// FUNCIONAMENTO

function handleClick() {
    const valor    = Number(document.getElementById('valor').value)
    const taxa     = Number(document.getElementById('taxa').value)
    const parcelas = Number(document.getElementById('parcelas').value)

    const listaMeses   = definirMeses(parcelas)
    const valorParcelas    = calcularValorParcela(valor, parcelas)
    const listaSaldoDivida = calcularSaldoDevedor(listaMeses, valor, valorParcelas)
    const listaJuros   = calcularJurosMensal(listaSaldoDivida, taxa)
    
    document.getElementById('tbody').replaceChildren()
    
    for (let i = 0; i < listaMeses.length; i++) {
        let listaTotalMes   = calcularTotalMes(valorParcelas, listaJuros[i])
        criarLinha(listaMeses[i], valorParcelas, listaJuros[i], listaTotalMes, listaSaldoDivida[i])
    }
}