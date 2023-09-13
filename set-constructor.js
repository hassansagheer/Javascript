/* A set is a collection of unique values.
This means that we can use it to quickly filter an array for unique members. */
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);