
import './App.css';
import { FilterCard } from './components/FilterCard';
import { ProductCard } from './components/ProductCard';
import { useFilter } from './filtercontext';

function App() {

  const { filteredData }  = useFilter()


  return (
    <div className='main-container'>
      <div className="">
        <FilterCard />
      </div>

      <div className='product-card-container'>
      {filteredData && filteredData.map((product) => {
        return (
          <ProductCard product={product} key={product.price + Math.random()} />
        )
      })
      }
      </div>
      

    </div>
  );
}

export default App;
