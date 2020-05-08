import React from 'react'

function WellnessCheck(props) {
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
            
            <h4>Choose All That Apply!</h4>
            <div className="container">
                <ul className="ks-cboxtags">
                    <li>
                        <input type="checkbox" id="checkboxOne" defaultValue="Rainbow Dash" />
                        <label htmlFor="checkboxOne">Rainbow Dash</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxTwo"
                            defaultValue="Cotton Candy"
                            defaultChecked
                        />
                        <label htmlFor="checkboxTwo">Cotton Candy</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxThree"
                            defaultValue="Rarity"
                            defaultChecked
                        />
                        <label htmlFor="checkboxThree">Rarity</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFour" defaultValue="Moondancer" />
                        <label htmlFor="checkboxFour">Moondancer</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFive" defaultValue="Surprise" />
                        <label htmlFor="checkboxFive">Surprise</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxSix"
                            defaultValue="Twilight Sparkle"
                            defaultChecked
                        />
                        <label htmlFor="checkboxSix">Twilight Sparkle</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxSeven" defaultValue="Fluttershy" />
                        <label htmlFor="checkboxSeven">Fluttershy</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxEight" defaultValue="Derpy Hooves" />
                        <label htmlFor="checkboxEight">Derpy Hooves</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxNine"
                            defaultValue="Princess Celestia"
                        />
                        <label htmlFor="checkboxNine">Princess Celestia</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxTen" defaultValue="Gusty" />
                        <label htmlFor="checkboxTen">Gusty</label>
                    </li>
                    <li className="ks-selected">
                        <input type="checkbox" id="checkboxEleven" defaultValue="Discord" />
                        <label htmlFor="checkboxEleven">Discord</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxTwelve" defaultValue="Clover" />
                        <label htmlFor="checkboxTwelve">Clover</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="checkboxThirteen"
                            defaultValue="Baby Moondancer"
                        />
                        <label htmlFor="checkboxThirteen">Baby Moondancer</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFourteen" defaultValue="Medley" />
                        <label htmlFor="checkboxFourteen">Medley</label>
                    </li>
                    <li>
                        <input type="checkbox" id="checkboxFifteen" defaultValue="Firefly" />
                        <label htmlFor="checkboxFifteen">Firefly</label>
                    </li>
                </ul>
            </div>





            <button onClick={props.prevPage}>Prev</button>
            <button onClick={props.nextPage}>Next</button>
            
        </div>
    )
}

export default WellnessCheck
