let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', contar)
let containerCarrossel = document.querySelector('#container-carrosel')

function contar() {
    let txti = document.querySelector('#txti')
    let txtf = document.querySelector('#txtf')
    let txtp = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (window.innerWidth <= 768) {
        containerCarrossel.classList.add('responsividade-carrossel')
    }

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        alert('Por favor, verifique os dados e tente novamente!')
    } else {
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if (p <= 0) {
            alert('Passo inválido, iremos considerar isso como "passo 1"')
            p = 1
            txtp.value = '1'
        }

        res.innerHTML = ''

        if (i < f) {
            i += 1
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            //contagem regressiva
            i -= 1
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
}

let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', clear)

function clear() {
    txti.value = ''
    txtf.value = ''
    txtp.value = ''
    res.innerHTML = ''

    if (window.innerWidth <= 768) {
        containerCarrossel.classList.remove('responsividade-carrossel')
    }
    
}

let forward = document.querySelector('#forward')
let backward = document.querySelector('#backward')
let img = document.querySelector('#img')
let cont = 1

forward.addEventListener('click', avancar)
backward.addEventListener('click', voltar)

function avancar() {
    if (cont == 5) {
        img.src = `imgs/1.png`
        cont = 1
    } else {
        cont += 1
        img.src = `imgs/${cont}.png`
    }
}

function voltar() {
    if (cont == 1) {
        img.src = `imgs/5.png`
        cont = 5
    } else {
        cont -= 1
        img.src = `imgs/${cont}.png`
    }
}