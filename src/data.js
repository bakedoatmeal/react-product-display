import data from './data.json'

const allCategories = data.map(obj => obj.category);
const categoriesSet = new Set(allCategories);
const categoriesUnique = Array.from(categoriesSet);

const categoriesHistogram = allCategories.reduce((obj, cat) => {
  if (!(cat in obj)) {
    obj[cat] = 0;
  } 
  obj[cat] = obj[cat] + 1;
  return obj;
}, {})


const namesAndCategories = categoriesUnique.map(name => {
  const obj = {
    name: name, 
    count: categoriesHistogram[name],
  }
  return obj
})

export default data
export { categoriesHistogram, categoriesUnique, namesAndCategories}