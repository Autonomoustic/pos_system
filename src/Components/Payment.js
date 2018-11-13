import React from 'react'
import API from '../API'

class Payment extends React.Component {
    state = {
        paymentChoice: '',
        fact: '',
        cashAmount: ''
    }

    handleSubmit= (choice) => {
        this.setState({
            paymentChoice: choice
        })
    }

    handleClickFact = (total) => {
        API.getFunFact(total)
        .then(resp =>{
            this.returnFact(resp.text)
        })
    }

    returnFact = (theFact) => {
        this.setState({
            fact: theFact
        })
    } 

    updateAmount = (event) => {
        this.setState({
            cashAmount: event.target.value
        })
    }

    handleCashAmount = (cash) => {
        let cashy = parseInt(cash)
        let tot = parseInt(this.props.total)
        if (!!cashy){
            if (cashy < 0){
                return ('We are not paying the client for purchassing!!')
            } else if (cashy > tot){
                return (`Money back is : £${cashy - tot}.`)
            } else if (cashy < tot){
                return (`£${tot - cashy} is required to complete the transaction.`)
            } else if (cashy === tot){
                return ('Exact money received.')
            } else {
                return ('Unknown error')
            }
        } else if (cash === '') {
            return (`Amount due: £${tot}`)
        } else {
            return ('Please enter a valid number')
        }
    }
    render(){
        return (
            <div>
            <button onClick={() => this.handleSubmit('Cash')}>££ Pay Cash ££</button>
            <button onClick={() => this.handleSubmit('Card')}>Pay by Card</button>
            {this.state.paymentChoice === '' ?
                "Please select a payment method" : 
                this.state.paymentChoice === 'Cash' ?
                <div>
                <p>Please collect money from client.</p>
                <label><b>Money received:</b></label>
                <input type='text' placeholder='Enter amount received (number only)' onKeyUp={this.updateAmount}/>
                    <p>{this.handleCashAmount(this.state.cashAmount)}</p>
                <form onSubmit={(event) => this.props.createTransaktion(event, this.props.total)}>
                    <button type='submit'>Proceed to Payment Cash</button>
                </form>
                </div>
                :
              <div>
                <p>Please enter card details</p>
                <form onSubmit={event => this.props.createTransaktion(event, this.props.total)}> 
                    <label><b>Name of the Cardholder</b></label>
                    <input type='text' placeholder='Enter full name' name='cardholder' required />

                    <label><b>Card number</b></label>
                    <input type='text' placeholder='Enter numbers on the card' name='cardNumber' required />

                    <label><b>Card expire date</b></label>
                    <input type='text' placeholder='Enter expire date : format MM-YY' name='cardDate' required />

                    <label><b>Card digits</b></label>
                    <input type='text' placeholder='Enter card 3 didgits' name='didgits' required />

                    <button type='submit'>Proceed to Payment by Card</button>
                </form>
                </div>
            }
            <button onClick={() => this.handleClickFact(this.props.total)}>Reveal fun fact about this total</button>
           <p>{this.state.fact}</p>
            </div>
        )
    }
}

export default Payment