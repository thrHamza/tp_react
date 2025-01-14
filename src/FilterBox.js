import { useContext } from "react";
// import SearchContext from "./SearchContext";
import { useDispatch } from "react-redux";
import { searchAction } from "./actions";

export default function FilterBox(props) {
    // const {setSearch} = useContext(SearchContext);
    const dispatch = useDispatch();

    return (
      <div className={props.className}>
          <input
              type="text"
              placeholder='Type to search...'
              className='form-control'
              autoFocus
              onChange={evt => {dispatch({type: 'SEARCH', value2: evt.target.value.toLowerCase()})}}
          />
      </div>
    );
}