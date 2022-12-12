import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import './dropdown.css';

function DropdownCustom(props) {
  return <DropDown 
    className='dropdown' 
    options={props.options}
    value={props.defaultOption} 
    placeholder={props.title}
    onChange = {props.onChange}
  />;
}

export default DropdownCustom;