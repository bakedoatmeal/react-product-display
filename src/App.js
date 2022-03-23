import './App.css';
import data, { categoriesHistogram, categoriesUnique, namesAndCategories} from './data'
import {useState} from 'react';
import CategoryButton from './CategoryButton';
import Product from './Product';

function App() {
  
  const [category, setCategory] = useState('All')

  const categories = namesAndCategories.map(obj => {
    return (
      <CategoryButton key={obj.name} onClick={()=> setCategory(obj.name)} label={obj.name}/>
    )
  })

  const products = data.filter((obj) => {
    return obj.category === category || category === 'All'
  }).map(obj => {
    return (
      <Product key={obj.id} obj={obj}/>
    )
  })

  return (
    <>
      <div className="CategoryList">

      <CategoryButton key={obj.name} onClick={()=> setCategory(obj.name)} label={obj.name}/>
        {categories}
      </div>
      <div className="ProductList">
        {products}
      </div>
    </>
  );
}

export default App;
