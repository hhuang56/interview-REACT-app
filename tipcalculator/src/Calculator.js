import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //TODO: Add tipping function and attach to calculate button.
    //Requirements:
    // Create a calculateTip function
    //      calculateTip should consider the Bill Amount and Service Quality when making a calculation
    //      Bill Amount and Service Quality should be stored in the component state
    //      Ensure Bill Amount and Service Quality are not empty before doing any calculation
    //      Round to the nearest 2 decimal places

    render() {
      return (
        <div id="container">
        <h1>Tip Calculator</h1>
        <div id="calculator">
            <form>
                <p>How much was your bill?</p>
                    <p>
                        $ <input id="billamt" type="text" placeholder="Bill Amount"></input>
                    </p>
            
                    <p>How was your service?</p>
                    <p>
                    <select id="serviceQual">
                    <option default value="0">Choose an Option</option>
                    <option value="0.3">30&#37; &#45; Outstanding</option>
                    <option value="0.2">20&#37; &#45; Good</option>
                    <option value="0.15">15&#37; &#45; It was OK</option>
                    <option value="0.1">10&#37; &#45; Bad</option>
                    <option value="0.05">5&#37; &#45; Terrible</option>
                </select>
                </p>
            </form>
            <button type="button" id="calculate">Calculate!</button>
        
        </div>
        <div id="totalTip">
            <sup>$</sup><span id="tip">0.00</span>
        </div>
        
        </div>
      )
    }
}

export default Calculator;