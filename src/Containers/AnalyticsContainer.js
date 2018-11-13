import React from 'react'

import API from '../API'

class AnalyticsContainer extends React.Component {

    state = {
        soldItems: []
    }

    componentDidMount() {
        this.props.soldItems()
            .then(soldItems => this.setState({ soldItems: soldItems }))
    }

    unitsSold = (item) => {
        const unitsSold = this.state.soldItems.filter(soldItem => soldItem.item_id === item.id).length
        return unitsSold
    }

    unitsSoldInLast7Days = () => {
        const unitsSold = this.state.soldItems.filter(soldItem => soldItem.created_at > (Date.today - 7)).length
        return unitsSold
    }

    mostRecentItemsSold = () => {
        const recentUnitsSold = this.state.soldItems.sort((a,b) => a.created_at - b.created_at)
        console.log(recentUnitsSold)
    }

   
    render() {
        return (
            <div>
                { this.props.currentUser && <h1> { this.props.currentUser.name }</h1> }
                <h2> Store Analytics </h2>

                <p> You have sold { this.state.soldItems.length } items since your store began! </p>
                <p>In the last day, you have sold { this.mostRecentItemsSold() } items.</p>
                <p>In the last seven days, you have sold { this.unitsSoldInLast7Days() } items.</p>


            </div>
        )
    }
}

export default AnalyticsContainer