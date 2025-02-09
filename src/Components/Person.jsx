import PersonCard from "./PersonCard";
import { getPerson } from "../Services/person";
import Loading from "./Loading"
import Error from "./Error";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router";

const Person = () => {
  let pl;
  let shown;

  const match = useMatch('/people/:id')
  console.log(match.params.id)

  const result = useQuery({
    queryKey: ['person'],
    queryFn: () => getPerson(match.params.id)
  })

  if ( result.isFetching ) {
    pl = "Loading..."
    shown = <Loading/>
  }
  if ( result.isError ) {
    pl = "Error!"
    shown = <Error logo={"Error"} message={"Error retriving data!"}/>
  }

  if ( result.isSuccess) {
    shown = <>
    <div className='flex lg:w-220  md:w-150 sm mx-auto flex-col md:flex-row  flex-wrap  justify-center mt-10 gap-4'>
      <PersonCard person={result.data}/>
    </div>
    </>
  }
  return (
    <div className='flex flex-col'>
      <div className='bg-gray-200 border-b  border-gray-300 h-85 min-h-fit  w-full  flex flex-wrap  flex-row p-4 box-border'>
        <h1 className='lg:text-8xl text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end lg:mt-0 mt-20 '>{ result.data ? result.data.firstName +" "+result.data.lastName: pl}</h1>
      </div>
      <div className='flex align-middle  flex-col justify-center min-h-128 max-h-fit'>
      {shown}
      </div>
    </div>
    )
}

export default Person