import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class AddItem extends Component {

    state = {
        inputValue: '',
        enableSubmit: false
    };

    render() {
        const { addNewItem } = this.props;
        const enableSubmit = this.state.enableSubmit ? false : true;
        return(
            <form className="d-flex"
                    onSubmit={addNewItem}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">New item</span>
                    </div>
                    <input type="text" value={this.state.inputValue} onChange={this.validateInput} className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark mb-3" disabled={enableSubmit} >Add</button>
            </form>
    
        );
    }

    validateInput = (event) => {
        this.setState({
            inputValue: event.target.value,
            enableSubmit: event.target.value !== '' ? true : false
        });
    }
}