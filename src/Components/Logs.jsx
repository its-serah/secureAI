import { useQuery } from '@tanstack/react-query'
import { getLogs } from '../Services/logs'
import Loading from './Loading'
import NotFoundPage  from './Error'
const Logs = () => {
  let shown;
  const result = useQuery({
    queryKey: ['logs'],
    queryFn: getLogs
  })

  if ( result.isLoading ) {
    shown = <Loading/>
  }
  if ( result.isError ) {
    shown = <NotFoundPage logo={"Error"} message={"Error retriving data!"}/>
  }
  return(
    <div className='flex flex-col'>
      <div className='bg-gray-200 border-b border-gray-300 h-85 min-h-fit  w-full  flex flex-wrap flex-row p-4 box-border'>
        <h1 className='lg:text-8xl sm:mt-14 text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end '>Logs</h1>
      </div>
      <div className='flex align-middle justify-center min-h-128 max-h-fit'>{shown}
      </div>
    </div>
  )
}

export default Logs;