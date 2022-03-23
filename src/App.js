import './App.css';
import data, { categoriesHistogram, categoriesUnique, namesAndCategories} from './data'
import {useState} from 'react';
import CategoryButton from './CategoryButton';
import Product from './Product';

function App() {
  
  const [category, setCategory] = useState('All')

  const categories = namesAndCategories.map(obj => {
    const className = obj.name === category ? 'CategoryButton selected' : 'CategoryButton';
    console.log(className)
    return (
      <CategoryButton className={className} key={obj.name} onClick={()=> setCategory(obj.name)} label={obj.name}/>
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
        <CategoryButton className='CategoryButton' key='All' onClick={()=> setCategory('All')} label={'All'}/>
        {categories}
      </div>
      <div className="ProductList">
        {products}
      </div>
    </>
  );
}

export default App;
