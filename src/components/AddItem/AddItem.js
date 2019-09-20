import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class AddItem extends Component {

    state = {
        inputValue: '',
        disableSubmit: true
    };

    render() {
        const { onItemAdd } = this.props;
        return(
            <form className="d-flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onItemAdd(this.state.inputValue);
                        this.setState({
                            inputValue: '',
                            disableSubmit: true
                        });
                    }}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">New item</span>
                    </div>
                    <input type="text" value={this.state.inputValue} onChange={this.validateInput} className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark mb-3" disabled={this.state.disableSubmit} >Add</button>
            </form>
    
        );
    }

    validateInput = (event) => {
        this.setState({
            inputValue: event.target.value,
            disableSubmit: event.target.value !== '' ? false : true
        });
    }
}