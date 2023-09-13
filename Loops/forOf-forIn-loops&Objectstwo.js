var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
var clothe = Object.create(clothingItem)
clothe.material = 'botique';
console.log(clothe);

//for-in loop
for(const prop in clothe){
    console.log(prop)
}

//for-of loop
for(const key of Object.keys(clothingItem) ) {
    console.log(key + ": " + clothingItem[key])
}