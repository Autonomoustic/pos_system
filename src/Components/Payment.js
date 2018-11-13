import React from 'react'

class Payment extends React.Component {
    state = {
        paymentChoice: ''
    }

    handleClick= (choice) => {
        this.setState({
            paymentChoice: choice
        })
    }

    render(){
        return (
            <div>
            <button onClick={() => this.handleClick('Cash')}>££ Pay Cash ££</button>
            <button onClick={() => this.handleClick('Card')}>Pay by Card</button>
            <p>{this.state.paymentChoice === '' ?
                "Please select a payment method" : 
                this.state.paymentChoice === 'Cash' ?
                <form onSubmit={(event) => this.props.createTransaktion(event, this.props.total)}>
                <p>Please click on 'Proceed to payment' once you collected money.</p>
               <button type='submit'>Proceed to Payment Cash</button>
               </form>
                :
              
                <form onSubmit={event => this.props.createTransaktion(event, this.props.total)}> 
                    <label><b>Name of the Cardholder</b></label>
                    <input type='text' placeholder='Enter full name' name='uname' required />

                    <label><b>Card number</b></label>
                    <input type='text' placeholder='Enter numbers on the card' name='uname' required />

                    <label><b>Card expire date</b></label>
                    <input type='text' placeholder='Enter expire date : format MM-YY' name='uname' required />

                    <label><b>Card digits</b></label>
                    <input type='text' placeholder='Enter card 3 didgits' name='uname' required />

                    <button type='submit'>Proceed to Payment by Card</button>
                </form>
            }</p>
            
            </div>
        )
    }
}

export default Payment