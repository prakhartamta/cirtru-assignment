import React from 'react';
import CarList from "./Components/CarList";
import SearchCar from "./Components/SearchCar";
import { carsdata } from './carsdata';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: carsdata,
      make_data: [],
      price_data: [],
      year_data: [],
      model_data: []
    }
  }

  componentDidMount() {
    const makeValue = new Set(carsdata.map((car) => car.make));
    this.setState({ make_data: [...makeValue] })


    const priceValue = new Set(carsdata.map((car) => car.price));
    this.setState({ price_data: [...priceValue] })


    const modelValue = new Set(carsdata.map((car) => car.model));
    this.setState({ model_data: [...modelValue] })


    const yearValue = new Set(carsdata.map((car) => car.year));
    this.setState({ year_data: [...yearValue] })
  }

  onSearchSubmit = (make, model, price, year) => {
    console.log(make, model, price, year, "data");
    const filteredData = carsdata.filter((car) => (make === "" || car.make === make) && (model === "" || car.model === model) && (price === "" || car.price === Number(price)) && (year === "" || car.year === Number(year)));
    this.setState({ cars: filteredData })
  }


  render() {
    return (
      <>
        <SearchCar onSearch={this.onSearchSubmit} make_data={this.state.make_data} year_data={this.state.year_data} price_data={this.state.price_data} model_data={this.state.model_data} />
        <div className="th-container">
          <div className='th-cards-list'>
            {this.state.cars.map((car, index) => {
              return (
                <CarList car={car} id={index} />
              )
            })}
          </div>
        </div>
      </>
    );
  }
}
export default App;