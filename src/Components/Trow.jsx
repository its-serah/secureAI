import PropTypes from "prop-types";

const Trow = ({log}) => {
  return(
  <tr className='odd:bg-neutral-300 even:bg-neutral-200'>
    <td ><img className="p-4 w-30 h-30 md:w-45 md:h-45" src = {log.photo} /></td>
    <td className="pl-4">{log.person.firstName + " " + log.person.lastName}</td>
    <td className="pl-4">{log.date + " at "+log.time}</td>
    <td className="pl-4 pr-4">{log.status == 0? "Entry": log.status == 1? "Exit" : "Unathorized"}</td>
    </tr>
    )
}

Trow.propTypes = {
  log: PropTypes.string.isRequired
}

export default Trow;