function formatMonay(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function fromatSplit(value){
    if (value == 1) {
        return value + ' person'
    } else 
        return value + ' persons'
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMonay(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMonay(billTotal)
    document.getElementById('splitValue').innerHTML = fromatSplit(split)
    document.getElementById('billEach').innerHTML = formatMonay(billEach)
}