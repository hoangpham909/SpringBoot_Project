import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import TransactionItem from "./TransactionItem";

const TransactionList = ({transactions}) => {
    const [transactionsList, setTransactionsList] = useState(Array.from({length:10}));
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        setTransactionsList(transactions);
    },[transactions])

    const fetchMoreData = () => {
        setTimeout(() => {
            setTransactionsList(transactionsList.concat(Array.from({length : 10})))
        }, 500)
    }

    return (
        <div className="transaction-list">
            <h3>Transactions List</h3>
            <InfiniteScroll
                dataLength={transactionsList.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                height={500}>
                {transactionsList.map((item,index) => {
                    return <TransactionItem index={index} item={item}/>
                })}
            </InfiniteScroll>
        </div>
    );
};

export default TransactionList;