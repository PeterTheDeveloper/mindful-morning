import React from 'react'

function WellnessCheck(props) {

    const addCustomMood = () =>{

    }
    return (
        <div className='wellnessCheckPage'>
            <h2>How are you feeling today ?</h2>
    
        {/* className='buttons wellness' */}

            <fieldset>
                <legend>CHOOSE ONE THAT APPLIES</legend>

                <input type="checkbox" id="wellnessMoods" name="Happy"></input>
                <label htmlFor="Happy">&#128513;</label><br />

                <input type="checkbox" id="wellnessMoods" name="Alright"></input>
                <label htmlFor="Alright">&#128556;</label><br />

                <input type="checkbox" id="wellnessMoods" name="Meh"></input>
                <label htmlFor="Meh"></label>&#128528;<br />

                <input type="checkbox" id="wellnessMoods" name="Sad"></input>
                <label htmlFor="Sad">&#128532;</label>
            </fieldset>

            <br></br>
            
            <h3>What kind of morning would you like ?</h3>
            <h4>Choose All That Apply!</h4>
            <div className="container">
                <ul className="ks-cboxtags">
                    <li>
                        <input type="checkbox" id="checkboxOne" defaultValue="Inspired" />
                        <label htmlFor="checkboxOne">Inspired</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxTwo"
                            defaultValue="Motivated"
                            defaultChecked
                        />
                        <label htmlFor="checkboxTwo">Motivated</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxThree"
                            defaultValue="Calm"
                            defaultChecked
                        />
                        <label htmlFor="checkboxThree">Calm</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFour" defaultValue="Energertic" />
                        <label htmlFor="checkboxFour">Energertic</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFive" defaultValue="Lit" />
                        <label htmlFor="checkboxFive">Lit</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxSix"
                            defaultValue="Twilight Sparkle"
                            defaultChecked
                        />
                        <label htmlFor="checkboxSix">Appreciative</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxSeven" defaultValue="Happy" />
                        <label htmlFor="checkboxSeven">Happy</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxEight" defaultValue="Chill" />
                        <label htmlFor="checkboxEight">Chill</label>
                    </li>
   
                </ul>
            </div>

            <div><input placeholder='Custom Mood' type="input"/></div>



            <button className='buttons' onClick={props.prevPage}>Prev</button>
            <button className='buttons' onClick={props.nextPage}>Next</button>
            
        </div>
    )
}

export default WellnessCheck