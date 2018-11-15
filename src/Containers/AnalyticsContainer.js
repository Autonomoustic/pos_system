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

    topSoldItem = () => {
        let storeSoldItemsCopy = [...this.state.storeSoldItems]
       let topItem = storeSoldItemsCopy.reduce(
                (a, b, i, arr) =>
                    (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
                null)
        return topItem ? topItem.itemName : "Unknown"
    }


    recentTransaktions = () => {
        const recentTransaktions = this.props.currentUser.transaktions
        if (recentTransaktions) {
            return recentTransaktions.map(transaction => <Analytic transaction={transaction} soldItems={transaction.sold_items}/>)
            }
        }
    

    render() {

        const { showSoldItems, showRecentTransactions, topSoldItem } = this
        return (
            <div>
                { this.props.currentUser && 
                    <div><h1>{ this.props.currentUser.name } Store Analytics </h1>
                    { topSoldItem() !== null ? <h4> Your top selling item is { topSoldItem() } </h4> : <h4> </h4> }
                    {this.state.storeSoldItems ? <h4> You have sold {this.state.storeSoldItems.length} items </h4> : <h4> </h4> }
                    <div>
                    <button onClick={() => showRecentTransactions()}>Recent Transactions</button>
                    <button onClick={() => showSoldItems()}>Recently Sold Items</button>
                    </div>
                    {this.state.recentItems ? this.recentTransaktions() : this.listSoldItems() }
                </div>
                }
            </div>
        )
    }
}
     
export default AnalyticsContainer