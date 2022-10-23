function filter(array, key){   
    return array.filter(element => checkIfSuitable(element, key))
}

function checkIfSuitable(element, key){
    let value = Object.values(element)
    value.pop()
    value = value.join("")
    return value.includes(key);
}

export default filter