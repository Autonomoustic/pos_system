import React from 'react'

class Payment extends React.Component {
    render(){
        return (
            <div>
            <p>{this.props.total}</p>
            <button onClick={() => this.props.handleDeleteAllButton()}>Delete All!!</button>
            {console.log(this.props.purchase)}
            </div>
        )
    }
}

export default Payment