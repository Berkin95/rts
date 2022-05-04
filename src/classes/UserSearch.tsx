import { Component } from 'react';

interface User {
    name: string;
    age: string;
}


interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState( { user: foundUser });
    };

    render() {
        const { name, user } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <input className="form-control" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={this.onClick}>Search User</button>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-12">
                        {user && user.name}
                        {user && user.age}
                    </div>
                </div>
    
            </div>
        )
    }

}

export default UserSearch;