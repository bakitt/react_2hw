

const Btns = ({ status, setKey, item, setData, data }) => {
    const removeTodo = (id) => {
        setData(data.filter(item => {
            return item.id !== id
        }))
    }
    return (

        <>
            {

                status === 'cart'
                    ? <>
                        <button onClick={() => {
                            setKey('deleted', item.id)
                        }}>restore</button>
                        <button onClick={() => {
                            removeTodo(item.id)
                        }}>remove</button>
                    </>
                    : <>
                        <button onClick={() => {
                            setKey('correct', item.id)
                        }}>correct</button>
                        <button>important</button>
                        <button onClick={() => {
                            setKey('deleted', item.id)
                        }}>delete</button>
                    </>

            }

        </>
    );
}

export default Btns;


















