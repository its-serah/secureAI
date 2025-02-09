import { useQuery } from '@tanstack/react-query'
import { getLogs } from '../Services/logs'
import Loading from './Loading'
import NotFoundPage  from './Error'
import Trow from './Trow'

const Logs = () => {
  let shown;
  const result = useQuery({
    queryKey: ['logs'],
    queryFn: getLogs,
    refetchInterval: 5000,
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
        <table className="  w-9/10 text-sm mx-auto mt-15"> 
          <thead className='bg-neutral-100 text-left'>
            <tr>
            <th className='pl-4'>Image</th>
            <th className='pl-4'>Name</th>
            <th className='pl-4'>Time/Date</th>
            <th className='pl-4'>Type</th>
            </tr>
          </thead>
          <tbody className=''>
            {result.data ? result.data.map(log => <Trow key={log.id} log={log} />): shown }
          </tbody>
        </table>
    </div>
  )
}

export default Logs;