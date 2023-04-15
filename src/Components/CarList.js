import React from 'react';

class CarList extends React.Component {
    render() {
        const { car, id } = this.props;
        return (
            <div className="th-card flex-container" key={id}>
                <div className="flex-item-left">
                    <img src={car.image} alt="Denim Jeans" style={{ width: '100%' }} />
                </div>
                <div className="flex-item-right my-auto">
                    <h1>{car.make} {car.model}</h1>
                    <p>Year : {car.year}</p>
                    <p className="th-price">${car.price}</p>
                </div>
            </div>
        );
    }
}
export default CarList;