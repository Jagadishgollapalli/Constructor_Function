function candidateDetails(name, age, standard, place){
    this.name =name,
    this.age = age,
    this.standard = standard,
    this.place = place
}

var getDetails = new candidateDetails("jagadish", "22", "masters", "USA")
console.log(getDetails)
