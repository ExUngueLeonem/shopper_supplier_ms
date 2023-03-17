import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import CatalogList from '../components/Catalog/CatalogList';
import { catalogStore } from '../store/CatalogStore';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

function Test() {
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(30);
    const [page, setPage] = useState(1);

    //count=30&search=Конфеты&page=1

    const searchConfig = {
        search,
        count,
        page
    }

    const [state, setState] = useState<{ items: any }>({ items: Array.from({ length: 50 }) })

    // const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        //   catalogStore.fetchMoreItemsBySearch({ ...searchConfig, page });
        //   setPage(state => state +1)


        console.log("fetchMoreData")
        setTimeout(() => {
            setState({
                items: state.items.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    }

    return (
        <>

            <div /* className={styles.item_list} */>

                <InfiniteScroll
                    // dataLength={state.items.length}
                    // next={() => fetchMoreData}
                    // hasMore={true}
                    // loader={<h4>Loading...</h4>}

                    dataLength={state.items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}

                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Конец списка</b>
                        </p>
                    }
                >
                    {/* {items?.map(item => (
                            <CatalogItem key={item.id} item={item} />
                        ))} */}

                    {state.items.map((i: string, index: string) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </>

    )
}

export default observer(Test);