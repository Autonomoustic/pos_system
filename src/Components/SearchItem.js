import React from 'react'

class SearchItem extends React.Component{
    render(){
        return (
            <input placeholder='filter items by name' onChange={(event) => this.props.updateFilter(event)}></input>
        )
    }
}

export default SearchItem