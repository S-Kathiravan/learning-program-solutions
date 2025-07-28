import React from 'react';
class Cart extends React.Component {
    render() {
        return (
            <table className='tableclass'>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {this.props.items.map((item) => {
                        return(
                            <tr key={item.itemname}>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}
export default Cart;