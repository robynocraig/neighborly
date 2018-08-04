import React, { Component } from 'react';
import API from "../../utils/API";

class Dummy extends Component {
    state = {
        managements: [],
        title: "",
        mockString: ""
    };

    componentDidMount() {
        this.loadManagements();
    }

    loadManagements = () => {
        API.getManagements()
            .then(res =>
                this.setState({ managements: res.data, title: "", mockString: "" })
            )
            .catch(err => console.log(err));
    };

    deleteManagement = id => {
        API.deleteManagement(id)
            .then(res => this.loadManagements())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.mockString) {
            API.saveManagement({
                title: this.state.title,
                mockString: this.state.mockString
            })
                .then(res => this.loadManagements())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <div>
                    <form>
                        <div className="form-group">
                            <input className="form-control"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <input className="form-group"
                                value={this.state.mockString}
                                onChange={this.handleInputChange}
                                name="mockString"
                                placeholder="mockString (required)"
                            />
                            <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success"
                                disabled={!(this.state.title && this.state.mockString)}
                                onClick={this.handleFormSubmit}>
                                Submit Management
                            </button>
                        </div>
                    </form>
                </div>
                {/* <hr />
                <div>

                </div> */}
            </div>
        )
    }
}

export default Dummy;