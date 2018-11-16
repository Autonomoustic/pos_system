import React from 'react'

import Analytic from '../Components/Analytic'


class AnalyticsContainer extends React.Component {

    state = {
        storeSoldItems: [],
        recentItems: false
    }

    componentWillMount () {
        let { currentUser } = this.props
        if (currentUser) {
            this.props.getSoldItems(currentUser.name)
                .then(storeSoldItems => this.setState({ storeSoldItems: storeSoldItems.sold_items_data }))
        }else{
            console.log('no current user')
        }
    }

    showRecentTransactions = () => {
        this.setState({ recentItems: true })
    }

    showSoldItems = () => {
        this.setState({ recentItems: false })
    }

    listSoldItems = () => {
        let { storeSoldItems } = this.state
        console.log(storeSoldItems)
        return storeSoldItems.map(analytic => <Analytic analytic={analytic}/>)
    }


    recentTransaktions = () => {
        const recentTransaktions = this.props.currentUser.transaktions
        if (recentTransaktions) {
            let transaktionSoldItems = this.props.getTransaktionSoldItems()
            return recentTransaktions.map(transaction => <Analytic transaction={transaction} transaktionSoldItems={this.props.getTransaktionSoldItems(transaction.id)} soldItems={transaction.sold_items}/>)
            }
        }
    

    topSoldItem = () => {
        let storeSoldItemsCopy = [...this.state.storeSoldItems]
        let topItem = storeSoldItemsCopy.reduce(
            (a, b, i, arr) =>
                (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
            null)
        return topItem ? topItem.itemName : "Unknown"
    }
    

    render() {

        const { showSoldItems, showRecentTransactions, topSoldItem } = this
        return (
            <div className="analytics-container">
                { this.props.currentUser && 
                    <div><h1>{ this.props.currentUser.name } Store Analytics </h1>
                    { topSoldItem() !== null ? <h4> Your top selling item is { topSoldItem() } </h4> : <h4> </h4> }
                    {this.state.storeSoldItems ? <h4> You have sold {this.state.storeSoldItems.length} items </h4> : <h4> </h4> }
                    <div>
                    <button className="btn" onClick={() => showRecentTransactions()}>Recent Transactions</button>
                    <button className="btn" onClick={() => showSoldItems()}>Recently Sold Items</button>
                    </div>
                    {this.state.recentItems ? this.recentTransaktions() : this.listSoldItems() }
                </div>
                }
            </div>
        )
    }
}
     
export default AnalyticsContainer