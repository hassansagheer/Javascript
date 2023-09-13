const exampleArray = [[['value']]];
const retrieveFinalValue = (element) => {
  if(Array.isArray(element)){
    console.log(retrieveFinalValue(element[0]));
  }
  return element;
}
retrieveFinalValue(exampleArray);