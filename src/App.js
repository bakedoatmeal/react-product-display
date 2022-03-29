import './App.css';
import data, { categoriesHistogram, categoriesUnique, namesAndCategories} from './data'
import {useState} from 'react';
import CategoryButton from './CategoryButton';
import Product from './Product';

function App() {
  console.log(categoriesHistogram)
  const [category, setCategory] = useState('All')

  const categories = namesAndCategories.map(obj => {
    const className = obj.name === category ? 'CategoryButton selected' : 'CategoryButton';
    console.log(obj)
    return (
      <CategoryButton className={className} key={obj.name} onClick={()=> setCategory(obj.name)} label={obj.name} count={obj.count}/>
    )
  })

  const products = data.filter((obj) => {
    return obj.category === category || category === 'All'
  }).map(obj => {
    return (
      <Product key={obj.id} obj={obj}/>
    )
  })

  const totalPrice = data.reduce((prev, item) => {
    return prev + parseFloat(item.price.slice(1)) * item.units
  }, 0)

  return (
    <>
      <div className="CategoryList">
        <CategoryButton className={category === 'All' ? 'CategoryButton selected' : 'CategoryButton'} key='All' onClick={()=> setCategory('All')} label={'All'}/>
        {categories}
      </div>
      <div>Total price: ${totalPrice.toFixed(2)}</div>
      <div className="ProductList">
        {products}
      </div>
    </>
  );
}

export default App;
