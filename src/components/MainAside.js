import React, { Component } from 'react';

class MainAside extends Component {
    render() { 
        return ( 
            <aside>
                <h3 className='sub-title'>Select Industry types</h3>
                <form>
                    <ul>
                        <li>
                            <input type='checkbox' name='industry' value='IT' id='IT' />
                            <label for='IT'>IT</label>
                        </li>
                        <li>
                            <input type='checkbox' name='industry' value='Financial' id='Financial' />
                            <label for='Financial'>Financial</label>
                        </li>
                        <li>
                            <input type='checkbox' name='industry' value='Education' id='Education' />
                            <label for='Education'>Education</label>
                        </li>
                        <li>
                            <input type='checkbox' name='industry' value='Hospitality' id='Hospitality' />
                            <label for='Hospitality'>Hospitality</label>
                        </li>
                        <li>
                            <input type='checkbox' name='industry' value='Fashion' id='Fashion' />
                            <label for='Fashion'>Fashion</label>
                        </li>
                        <li>
                            <input type='checkbox' name='industry' value='Intern' id='Intern' />
                            <label for='Intern'>Intern</label>
                        </li>
                    </ul>
                </form>
            </aside>
        );
    }
}
 
export default MainAside;