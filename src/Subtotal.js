
import "./Subtotal.css";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';
import CurrencyFormat from 'react-currency-format';
import {useStatevalue} from "./StateProvider.js";

function Subtotal() {


    const history =useHistory();

    const [{basket},dispatch] =useStatevalue();



    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={ e => history.push('./payment')}>Proceed to Checkout</button>
        </div>
    )
};

export default Subtotal;