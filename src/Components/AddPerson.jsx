const addPerson = () => {
  let shown;
  return(
    <div className='flex flex-col'><div className='bg-gray-200 border-b border-gray-300 h-85 min-h-fit  w-full  flex flex-wrap flex-row p-4 box-border'>
    <h1 className='lg:text-8xl sm:mt-14 text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end '>Add Person</h1>
    </div>
      <div className='flex align-middle justify-center min-h-128 max-h-fit'>
      {shown}
      </div>
    </div>
)
}

export default addPerson;