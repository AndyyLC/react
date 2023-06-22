import { Fragment } from "react";

function ListGroup() {

    const items = [
        'Cheese',
        'Quasso',
        'meat',
        'ello'
    ] //test

    if (items.length === 0)
        return 
        <>
        <h1>List</h1>
        <p>No item found</p>
        </>
    return (
    <Fragment>
        <h1>List</h1>   
        <ul className="list-group">
            {items.map(item => 
                <li key={item}>{item}</li>)}
        </ul>
    </Fragment>
    );
}

export default ListGroup;