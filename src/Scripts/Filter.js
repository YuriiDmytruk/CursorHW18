function filter(array, key, specification){   
    return array.filter(element => checkIfIncludes(element, key, specification))
}

function checkIfIncludes(element, key, specification){
    if(element.gender === undefined){
        element.gender = "not-specified"
    }
    if (!specification.includes(element.gender)){
        return false
    }
    let value = Object.values(element)
    value.pop()
    value = value.join("")
    return value.includes(key);
}

export default filter