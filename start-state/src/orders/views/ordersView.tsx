import * as React from 'react';
import {Store} from '../infrastructure/store';
import {Reducers} from '../store/reducers';
import {SideEffects} from '../store/sideEffects';

export default class OrdersView extends React.Component<any, any> {
    private store: Store<any>;
    resultObjCss: { fontSize: string; };

    constructor(props: any) {
        super(props);
        
    
        const initialState: any = {
            amount: '1m',
            currencyPair: 'USDGBP',
            isBooking: false,
            bookingResults: null,
        };

        this.store = new Store(
            initialState,
            Reducers,
            SideEffects,
            (nextState: any) => this.setState(nextState)
        );

        // set initial state
        this.state = this.store.currentState;

        this.resultObjCss = {
            fontSize: '1.5rem'
        }
    }

    onAmountChanged = (amount: any) => {
        this.store.dispatchAction('onAmountChanged', amount);
    };

    onCurrencyPairChanged = (ccyPair: string) => {
        this.store.dispatchAction('onCurrencyPairChanged', ccyPair);
    };

    onBookRequested = () => {
        this.store.dispatchAction('book');
    };

    bookingStatus = () => {
        const {isBooking, bookingResults} = this.state
        if(isBooking){
            return <span>Booking is in Progress</span>
        }

        if(bookingResults === null){
            return ''
        }

        if(bookingResults){
            return  <span style={{"color": "green"}}>Booking Success</span>
        }else{
            return  <span style={{"color": "red"}}>Booking Failed</span>
        }

    }

    render() {
        return (
            <div>
                <h1>OrdersList</h1>
                Amount: <input type="text" value={this.state.amount}
                               onChange={(e) => this.onAmountChanged(e.target.value)}/>
                <br/>
                Currency:
                <select value={this.state.currencyPair} onChange={(e) => this.onCurrencyPairChanged(e.target.value)}>
                    <option value="EURUSD">EURUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="USDGBP">USDGBP</option>
                </select>
                <br/>
                Order summary: <br/>
                Amount({this.state.amount})
                <br/>
                <button onClick={(e) => this.onBookRequested()}>
                    Book
                </button>
                <div style={{"fontSize": "2rem" }}>{this.bookingStatus()}</div>
            </div>
        );
    }
}
