import React from 'react';

class SearchBar extends React.Component{
    
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    //callback from parent component
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> VideoSearch </label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
