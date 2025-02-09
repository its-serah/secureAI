import { useQuery } from '@tanstack/react-query'
import { getPeople } from '../Services/person'
import Loading from './Loading'
import Error from './Error'

const People = () => {
  let shown;
  const result = useQuery({
    queryKey: ['people'],
    queryFn: getPeople
  })

  if ( result.isLoading ) {
    shown = <Loading/>
  }
  if ( result.isError ) {
    shown = <Error logo={"Error"} message={"Error retriving data!"}/>
  }

  return(
    <div className='flex flex-col'>
      <div className='bg-gray-200 border-b  border-gray-300 h-85 min-h-fit  w-full  flex flex-wrap  flex-row p-4 box-border'>
        <h1 className='lg:text-8xl text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end sm:mt-14'>People</h1>
        <input
          className="placeholder:text-gray-500 grow-0 focus:outline-gray-700 focus:outline-1  shadow-gray-400 shadow-sm placeholder:italic self-end  ml-auto mr-auto bg-neutral-50 w-124 rounded-2xl p-3 pl-4 pr-4"
          placeholder="Filter for name..."
          type="text"
          name="search"
        />
      </div>
      <div className='flex align-middle justify-center min-h-128 max-h-fit'>
      {shown}
      </div>
    </div>
)
}

export default People;