import { useContext } from "react";
import SearchContext from "./SearchContext";

export default function FilterBox(props) {
    const {setSearch} = useContext(SearchContext);

    return (
      <div className={props.className}>
          <input
              type="text"
              placeholder='Type to search...'
              className='form-control'
              autoFocus
              onChange={evt => {setSearch(evt.target.value.toLowerCase());}}
          />
      </div>
    );
}