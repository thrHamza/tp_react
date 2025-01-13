export default function FilterBox(props) {
    return (
      <div className={props.className}>
          <input
              type="text"
              placeholder='Type to search...'
              className='form-control'
              autoFocus
              onChange={(e) => props.onFilter(e.target.value)}
          />
      </div>
    );
}