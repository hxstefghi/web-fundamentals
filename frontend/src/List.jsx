import './List.css'

function List(props){
    
    const itemList = props.items;
    const category = props.category;

    const listItem = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>)

    return(
        <>
            <h1 className='category'>{category}</h1>
            <ol>
                <div className="item-list">
                    {listItem}
                </div>
            </ol>
        </>
    );
}

export default List