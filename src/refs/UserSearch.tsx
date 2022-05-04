import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Koray', age: 26 },
    { name: 'Basha', age: 20 },
    { name: 'Michael', age: 29 },
    { name: 'Nick', age: 27 }
]

const UserSearchComponent:React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    }, []);

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (
        <div>

            <div className="row">
                <div className="col-8">
                    <input 
                        ref={inputRef}
                        className="form-control" 
                        value={name} onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div className="col-4">
                    <button className="btn btn-primary" onClick={onClick}>Search User</button>
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
};

export default UserSearchComponent;