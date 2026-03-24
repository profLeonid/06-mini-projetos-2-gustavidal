'use strict'

// LÓGICA

function criarListaNumeros(quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++)
        listaNumeros.push(i)

    return listaNumeros
}

function criarListaPares(quantidade) {
    let listaPares = []

    for (let i = 2; i <= quantidade * 2; i += 2)
        listaPares.push(i)

    return listaPares
}

function criarListaImpares(quantidade) {
    let listaImpares = []

    for (let i = 1; i <= quantidade * 2; i += 2)
        listaImpares.push(i)

    return listaImpares
}

function criarListaMulti5(quantidade) {
    let listaMulti5 = []

    for (let i = 5; i <= quantidade * 5; i += 5)
        listaMulti5.push(i)

    return listaMulti5
}

function criarListaPotencia2(quantidade) {
    let listaPotencias2 = []

    for (let i = 0; i < quantidade; i++)
        listaPotencias2.push(2 ** i)

    return listaPotencias2
}

// CRIAÇÃO DE ESTRUTURA

function criarLinha(num, par, impar, mult5, pot2) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = impar

    const tdMulti5 = document.createElement('td')
    tdMulti5.textContent = mult5

    const tdPot2 = document.createElement('td')
    tdPot2.textContent = pot2

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMulti5, tdPot2)

    tbody.appendChild(tr)
}

criarLinha(10, 20, 10, 50, 10)