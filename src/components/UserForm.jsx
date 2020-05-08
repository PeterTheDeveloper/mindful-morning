import React, {useState, useContext} from 'react'
import LandingPage from './LandingPage';
import WellnessCheck from './WellnessCheck';
import VideoPage from './VideoPage';

function UserForm() {
    const [formState, setformState] = useState({ 
        page: 1,
        name: '',
        wellness: '',
        searchWords: [],
        video: ''
    })
    
    // function addSearchWord(str){
    //     setformState({ searchWords: formState[searchWords].push(str)})
    // }


    // Move to next Page
    const nextPage = () => {
        const { page } = formState;
        setformState({
            page: page + 1
        })
    }
    
    // Go back to prev page
    const prevPage = () => {
        const { page } = formState;
        setformState({
            page: page - 1
        })
    }

    // Update form state
    const handleChange = (input) => e => {
        setformState({[input]: e.target.value}) 
    }

        function logMe() {
            console.log('Me')
        }
    const renderForm = (page) => {
        switch (page) {
            case 1:
                return (<LandingPage nextPage={nextPage}/>)
            case 2:
                return (<WellnessCheck nextPage={nextPage} prevPage={prevPage}/>)
            case 3:
                return (<VideoPage prevPage={prevPage}/>)
            default:
                return (<LandingPage />);
        }
    }

    const { page } = formState;

    return (
        <div>
            {renderForm(page)}
        </div>
    )
}

export default UserForm
