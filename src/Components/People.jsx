import { useQuery } from '@tanstack/react-query'
import { getPeople } from '../Services/person'
import Loading from './Loading'
import Error from './Error'
import PersonCard from './PersonCard'
import { useField } from '../Hooks/hooks'

const People = () => {
  const search = useField("text")
  let shown;
  const result = useQuery({
    queryKey: ['people'],
    queryFn: getPeople
  })

  if ( result.isFetching ) {
    shown = <Loading/>
  }
  if ( result.isError ) {
    shown = <Error logo={"Error"} message={"Error retriving data!"}/>
  }

  if ( result.isSuccess) {
    shown = <>
    <div className='flex lg:w-220  md:w-150 sm mx-auto flex-col md:flex-row  flex-wrap  justify-center mt-10 gap-4'>
    {result.data.filter(person => (person.firstName +" " + person.lastName).toLowerCase().includes(search.value.toLowerCase())).map((person) => <PersonCard key={person.id} person={person} />)}
    </div>
    </>
  }

  return(
    <div className='flex flex-col'>
      <div className='bg-gray-200 border-b  border-gray-300 h-85 min-h-fit  w-full  flex flex-wrap  flex-row p-4 box-border'>
        <h1 className='lg:text-8xl text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end lg:mt-0 mt-20 '>People</h1>
        <input
          className="placeholder:text-gray-500 grow-0 focus:outline-gray-700 focus:outline-1  shadow-gray-400 shadow-sm placeholder:italic self-end  ml-auto mr-auto bg-neutral-50 w-124 rounded-2xl p-3 pl-4 pr-4"
          placeholder="Filter for name..."
          {...search}
          name="search"
        />
      </div>
      <h1 className='text-4xl font-extrabold font-stretch-expanded text-gray-700 mt-10 ml-5'>{search.value ? `Showing results for: "${search.value}"`: "Showing all People"}</h1>
      <div className='flex align-middle  flex-col justify-center min-h-128 max-h-fit'>
      {shown}
      </div>
    </div>
)
}

export default People;