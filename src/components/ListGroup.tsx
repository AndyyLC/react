import { Fragment } from "react";

function ListGroup() {

    const items = [
        'Cheese',
        'Quasso',
        'meat',
        'ello'
    ] //test

    if (items.length === 0)
        return (
        <>
        <h1>List</h1>
        <p>No item found</p>
        </>
        );

       const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;;
       } 
        
    return (
    <Fragment>
        <h1>List</h1>   
        {getMessage()}
        <ul className="list-group">
            {items.map(item => 
                <li className="list-group-item" key={item} onClick={() => console.log('Clicked')}
                >{item}</li>)}
        </ul>
    </Fragment>
    );
}

export default ListGroup;