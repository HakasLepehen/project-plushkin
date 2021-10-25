import './App.scss';
import Navbar from "./components/Navbar";
import {createTheme} from "@mui/material";

const theme = createTheme();

theme.spacing(4); // `${8 * 2}px` = '16px'

function App() {
    return (
        <div className='wrapper'>
            <Navbar/>
        </div>
    );
}

export default App;
