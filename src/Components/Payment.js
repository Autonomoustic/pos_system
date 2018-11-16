import React from 'react'
import API from '../API'

import { Link } from 'react-router-dom'

class Payment extends React.Component {
    state = {
        paymentChoice: '',
        fact: '',
        cashAmount: '',
        selectedOption: ''

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
        } else if (cash === ''|| cashy === 0) {
            return (`Amount due: £${tot}`)
        } else {
            return ('Please enter a valid number')
        }
    }

    handleCardChange = (event) => {
        this.setState({
            selectedOption : event.target.value
        })
    }

    opacityOnSelection = (boolean) => {
        if (this.state.selectedOption === ''){
            return "radio1"
        } else if (boolean) {
            return "radio1"
        } else {
            return "radio2"
        }
    }

    opacityOnSelectionMaster = () => {
        if (this.state.selectedOption === ''){
            return "test1"
        } else if (this.state.selectedOption === 'mastercard') {
            return "test1"
        } else {
            return "test2"
        }
    }

    opacityOnSelectionOther = () => {
        if (this.state.selectedOption === ''){
            return "test1"
        } else if (this.state.selectedOption === 'other') {
            return "test1"
        } else {
            return "test2"
        }
    }
        
    cashAmountValidation = (event, cash) => {
        let cashy = parseInt(cash)
        let tot = parseInt(this.props.total)
        if (!!cashy && cashy >= tot){
            this.props.createTransaktion(event, this.props.total)
        } else {
            event.preventDefault()
        }
    }

    setColor = () => {
        let cashy = parseInt(this.state.cashAmount)
        let tot = parseInt(this.props.total)
        let color = ''
        if (!!cashy && cashy < tot || 
            this.handleCashAmount(this.state.cashAmount) ===  'Please enter a valid number'){
            color = 'red'
        }
        return color
    }


    render(){
        return (
            <div>
            <button className='btn' onClick={() => this.handleSubmit('Cash')}>££ Pay Cash ££</button>
            <button className='btn' onClick={() => this.handleSubmit('Card')}>Pay by Card</button>
            {this.state.paymentChoice === '' ?
                <p>Please select a payment method.</p> : 
                this.state.paymentChoice === 'Cash' ?
                <div>
                    <p>Please collect money from client.</p>
                    
                    <label>Money received:</label>
                    <input type='text' placeholder='Enter amount received (number only)' onKeyUp={this.updateAmount} required/>
                        <p className={this.setColor()}>{this.handleCashAmount(this.state.cashAmount)}</p>
                    <form className='payment-form' onSubmit={(event) => this.cashAmountValidation(event, this.state.cashAmount)}>
                        <button className='btn' type='submit'>Proceed to Payment Cash</button>
                    </form>
                </div>
                :
                <div>
                    <p>Please enter card details</p>
                    <form className='payment-form' onSubmit={event => this.props.createTransaktion(event, this.props.total)}> 
                        
                        <div>
                            <label><b>Card type</b><br/>
                            <input type="radio" value="visa" checked={this.state.selectedOption === "visa"} onChange={(event) => this.handleCardChange(event)}/>
                            <img className={this.opacityOnSelection(this.state.selectedOption === "visa")} src="https://image.flaticon.com/icons/png/64/196/196578.png"/>
                            
                            <input type="radio" value="mastercard" checked={this.state.selectedOption === "mastercard"} onChange={(event) => this.handleCardChange(event)}/>
                            <img className={this.opacityOnSelection(this.state.selectedOption === "mastercard")} src="https://image.flaticon.com/icons/png/64/196/196561.png"/>
              
                            <input type="radio" value="other" checked={this.state.selectedOption === "other"} onChange={(event) => this.handleCardChange(event)}/>
                            <img className={this.opacityOnSelection(this.state.selectedOption === "other")} src="https://image.flaticon.com/icons/png/64/138/138293.png"/>
                            </label>
                        </div><br/>

                        <label><b>Name of the Cardholder</b></label>
                        <input type='text' placeholder='Enter full name' name='cardholder' required />

                        <label><b>Card number</b></label>
                        <input type='text' placeholder='Enter numbers on the card' name='cardNumber' maxLength='16' required />

                        <label><b>Card expire date</b></label>
                        <input type='text' placeholder='Enter expire date : format MM-YY' name='cardDate' maxLength='5' required />

                        <label><b>Card digits</b></label>
                        <input type='text' placeholder='Enter card 3 didgits' name='didgits' maxLength='3' required/><br/>

                        <button className='btn' type='submit'>Proceed to Payment by Card</button>
                    </form>
                </div>
            }
            <button className='btn' onClick={() => this.handleClickFact(this.props.total)}>Reveal fun fact about this total</button>
            <p>{this.state.fact}</p>
            </div>
        )
    }
}

export default Payment