import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Filter extends Component {
    render() {
        return(
            <div className="btn-group mb-3">
                <button className="btn btn-dark active" onClick={this.onChangeFilter}>All</button>
                <button className="btn btn-dark" onClick={this.onChangeFilter}>Active</button>
                <button className="btn btn-dark" onClick={this.onChangeFilter}>Done</button>
            </div>
        );
    }

    onChangeFilter = (e) => {
        console.log(e.target.innerText)
    }

}