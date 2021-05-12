function SearchBar(props) {
    return (
        <div className="input-field">
            <input id="friends-search" type="text" {...props}/>
            <label htmlFor="friends-search">Search for Friends</label>
        </div>
    )
}

export default SearchBar
