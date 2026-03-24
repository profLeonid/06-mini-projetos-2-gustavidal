'use strict'

// LÓGICA

function definirLista() {
    let lista = []

    for (let i = 1; i <= 10; i++)
        lista.push(i)

    return lista
}

function calcularAdicao(valor) {
    let listaAdicao = []

    for (let i = 1; i <= 10; i++)
        listaAdicao.push(valor + i)

    return listaAdicao
}

function calcularSubtracao(valor) {
    let listaSubtracao = []

    for (let i = 1; i <= 10; i++)
        listaSubtracao.push(valor - i)

    return listaSubtracao
}

function calcularMultiplicacao(valor) {
    let listaMultiplicacao = []

    for (let i = 1; i <= 10; i++)
        listaMultiplicacao.push(valor * i)

    return listaMultiplicacao
}

function calcularDivisao(valor) {
    let listaDivisao = []

    for (let i = 1; i <= 10; i++)
        listaDivisao.push(Number((valor / i).toFixed(2)))

    return listaDivisao
}

// CRIAÇÃO DA ESTRUTURA

function criarLinha(num, adicao, subtracao, multiplicacao, divisao) {
    const tbody = document.getElementById('tbody')
    const tr    = document.createElement('tr')

    const tdNum       = document.createElement('td')
    const tdAdicao    = document.createElement('td')
    const tdSubtracao = document.createElement('td')
    const tdMultipl   = document.createElement('td')
    const tdDivisao   = document.createElement('td')

    tdNum.textContent       = num
    tdAdicao.textContent    = adicao
    tdSubtracao.textContent = subtracao
    tdMultipl.textContent   = multiplicacao
    tdDivisao.textContent   = divisao

    tr.replaceChildren(tdNum, tdAdicao, tdSubtracao, tdMultipl, tdDivisao)

    tbody.appendChild(tr)
}

// FUNCIONAMENTO

function handleClick() {
    const valor = Number(document.getElementById('valor').value)

    const listaNumeros   = definirLista(valor)
    const listaAdicao    = calcularAdicao(valor)
    const listaSubtracao = calcularSubtracao(valor)
    const listaMultipl   = calcularMultiplicacao(valor)
    const listaDivisao   = calcularDivisao(valor)

    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i < 10; i++)
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultipl[i], listaDivisao[i])
}