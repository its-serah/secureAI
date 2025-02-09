import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Error = ({logo, message}) => {
  return (
      <div className=" flex align-middle justify-center text-center self-center text-gray-800 w-full p-4 box-border">
        <div className="flex items-center align-middle justify-center flex-col h-80 bg-blend-luminosity bg-gradient-to-t to-red-50 from-neutral-100 p-8 rounded-2xl shadow-lg w-112 mx-auto border border-gray-300">
          <div className="flex items-center justify-center mb-4">
          <h1 className="text-7xl font-extrabold text-gray-700">{logo}</h1>
          </div>
          <p className="text-1xl text-gray-600 font-stretch-expanded font-semibold mb-4">{message}</p>
          <Link to="/" className="inline-block px-6 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-700 transition ease-in-out">
            Home
          </Link>
        </div>
      </div>
  );
};
Error.propTypes = {
  logo: PropTypes.string.isRequired, 
  message: PropTypes.string
}

export default Error;
