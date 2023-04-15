import React from 'react';

class SearchCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            make: "",
            price: "",
            year: "",
            model: ""
        }
    }

    render() {
        const makeoptions = this.props.make_data.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ))
        const yearoptions = this.props.year_data.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ))
        const priceoptions = this.props.price_data.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ))
        const modeloptions = this.props.model_data.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ))

        return (
            <div className='row th-searchbar'>
                <div className='col-md-3 col-xs-12 mb-2'>
                    <label className="form-label th-label"><b> Make: </b></label>
                    <select className="form-select" onChange={(e) => this.setState({ make: e.target.value })}>
                        <option key="" value="" style={{ color: '#c0c0c0' }}>Select</option>
                        {makeoptions}
                    </select>
                </div >
                <div className='col-md-3 col-xs-12 mb-2'>
                    <label className="form-label th-label" ><b> Model: </b></label>
                    <select className="form-select" onChange={(e) => this.setState({ model: e.target.value })}>
                        <option key="" value="" style={{ color: '#c0c0c0' }}>Select</option>
                        {modeloptions}
                    </select>
                </div>
                <div className='col-md-3 col-xs-12 mb-2'>
                    <label className="form-label th-label"><b> Price: </b></label>
                    <select className="form-select" onChange={(e) => this.setState({ price: e.target.value })}>
                        <option key="" value="" style={{ color: '#c0c0c0' }}>Select</option>
                        {priceoptions}
                    </select>
                </div>
                <div className='col-md-3 col-xs-12 mb-2'>
                    <label className="form-label th-label"><b> Year: </b></label>
                    <select className="form-select" onChange={(e) => this.setState({ year: e.target.value })}>
                        <option key="" value="" style={{ color: '#c0c0c0' }}>Select</option>
                        {yearoptions}
                    </select>
                </div>
                <div className='col-12 mt-2'>
                    <button className='th-search-btn' onClick={() => this.props.onSearch(this.state.make, this.state.model, this.state.price, this.state.year)}>Search</button>
                </div>
            </div >
        );
    }
}
export default SearchCar;