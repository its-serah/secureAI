import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types'
const PersonCard = ({ person }) => {
  return (
    <li className="list-none mx-auto">
    <Link to = {`/people/${person.id}`}>
    <div className='w-70 h-76 flex flex-col bg-gray-200 border rounded-2xl border-gray-300 hover:border-blue-300 hover:shadow-blue-200 shadow-sm shadow-gray-400'>
      <img src = {person.photos[0]} className="w-50 h-50 mx-auto mt-2 rounded-full"/>
      <h1 className="text-2xl font-extrabold font-stretch-expanded text-gray-700 text-center">{(person.firstName+" "+person.lastName).length>15?(person.firstName+" "+person.lastName).substring(0,13)+"...":person.firstName+" "+person.lastName}</h1>
      <div className="text-sm font-stretch-expanded text-gray-600 text-center">
        <span><span className="font-bold">Age: </span>{person.age} </span>
        <span><span className="font-bold">Gender: </span>{person.gender[0]}</span>
      </div>
      <div className="text-sm font-stretch-expanded text-gray-600 text-center">
        <span><span className="font-bold">Work: </span>{person.work.length>9?(person.work).substring(0,7)+"...":person.work} </span>
      </div>
      <div className="text-sm font-stretch-expanded text-gray-600 text-center"><span className="font-bold">Floor: </span>{person.floor}{person.orientation}</div>
    </div>
    </Link>
    </li>
  )
}
PersonCard.propTypes = {
  person: PropTypes.object
}
export default PersonCard