import { useState } from 'react';
import UserSearchComponent from './UserSearch';

const List: React.FC = () => {
    const [name, setName] = useState(''); //read the input
    const [member, setMember] = useState<string[]>([]); //save the input in a array

    const onClick = () => {
        setName('');
        setMember([...member, name]);
        console.log('clicked')
    };

    return (
        <div>
            <UserSearchComponent />

            <ul>
                {member.map((member) => (
                    <li key={member}>{member}</li>
                ))}
            </ul>

        <div className="row">
            <div className="col-8">
                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-4">
                <button className="btn btn-success" onClick={onClick}>Add Member</button>
            </div>
        </div>
        </div>
    );
};

export default List;