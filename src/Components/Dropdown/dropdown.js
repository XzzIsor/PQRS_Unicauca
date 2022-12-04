import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import './dropdown.css';

function DropdownCustom(props) {
  return <div className='dropdown-zone'> 
    <DropDown 
    className='dropdown' 
    options={props.options} 
    value={props.defaultOption} 
    placeholder={props.title}
    onChange = {props.onChange}
    /> 
  </div>;
  
}

export default DropdownCustom;