function Message() {
    const name = 'Andy';
    if (name)
        return <h1> Hello {name}</h1>
    return<h1>Hi</h1>
}

export default Message;