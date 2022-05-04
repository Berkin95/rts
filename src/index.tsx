import ReactDOM from 'react-dom';
// import Parent from '../src/props/Parent';
// import List from '../src/state/List';
// import EventComponent from './events/EventComponent';
import UserSearch from '../src/refs/UserSearch';
import './index.css';


const App = () => {
    return (
        <div>
            <h1>App</h1>
            {/* <List /> */}

            {/* <br /><br />
            <EventComponent /> */}

            <UserSearch />


        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));



// Actually for using React Version 18
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App tab="home" />);