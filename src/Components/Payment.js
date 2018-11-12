import React from 'react'

class Payment extends React.Component {
    render(){
        return (
            <div>
            <button onClick={() => this.props.handleDeleteAllButton()}>Delete All!!</button>
            <button type='submit' onClick={() => this.props.createTransaktion(this.props.total)}>Proceed to Payment</button>
            </div>
        )
    }
}

export default Payment