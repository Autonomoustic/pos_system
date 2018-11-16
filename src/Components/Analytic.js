import React from 'react'

const Analytic = props =>

    <div class="card-column">

       { props.analytic && <div className="sold-items"> <h4><b>{ props.analytic.itemName}</b></h4>
        <h5>{ props.analytic.category.name }</h5>        
            <p>Sold for £{props.analytic.price}</p> </div> }

        {props.transaction && 
            props.transaction.sold_items.map(t => <p>Item: {t.id} <br /><br /> Sold at {t.created_at.toString()}</p> )} 

    </div>


export default Analytic
