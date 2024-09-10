import SearchInput from '@molecules/SearchInput'
import TrendingSearches from '@molecules/TrendingSearches';

export default function Banner () {
const searches = ['Electric cables', 'testing equipment', 'transformers']
  return (
    <section className="bg-primary">
      <div> 
        <div className='flex justify-center py-3 px-auto text-black flex-col gap-4  text-center s'>
          <h1 className ="text-black lg:text-2xl md:text-1xl font-bold font-inter">
            Find the perfect mining  supplies and services for your business
          </h1>  
          <h2 className='font-thin'>
            We work with many reputable brands and have completed multiple projects
          </h2>
          <SearchInput />
        <div className='flex justify-center py-3 px-auto text-black flex-col gap-4  text-center'>
          <TrendingSearches searches={searches } />

        </div>
        </div>

      </div>
  
</section>
  );
}
