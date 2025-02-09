import PropTypes from 'prop-types'
const Input = ({ label, type, value, onChange }) => (
  <label className='flex p-3 pl-0 flex-row'>
    <h1 className='md:text-2xl text-xl font-extrabold font-stretch-expanded text-gray-700'>{label}:</h1>
    <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-50  ml-auto p-2.5' type={type} value={value} onChange={onChange} />
  </label>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;