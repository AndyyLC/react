import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {


    //Hook function tells component that state can change
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //Event Hander Below
    // const handleClick = (clickevent: MouseEvent) => console.log(event);

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
        <h1>{heading}</h1>   
        {getMessage()}
        <ul className="list-group">
            {items.map((item, index) => 
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => { setSelectedIndex(index);
                onSelectItem(item);}}
                >{item}</li>)}
        </ul>
    </Fragment>
    );
}

export default ListGroup;