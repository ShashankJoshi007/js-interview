export const Reducers = {
    onAmountChanged(state: any, amount: string): any {
        console.log(`Amount changed from ${state.amount} to ${amount}`);
        return {
            ...state,
            amount
        };
    },

    onCurrencyPairChanged(state: any, currencyPair: string): any {
        console.log(`currencyPair changed from ${state.currencyPair} to ${currencyPair}`);
        return {
            ...state,
            currencyPair
        };
    },

    book(state: any): any {
        console.log(`booking`);
        return {
            ...state,
            isBooking: true
        }
    },

    bookingComplete(state: any, bookingSuccess: boolean): any {
        console.log(`booking completed`);
        return{
            ...state,
            isBooking: false,
            bookingResults: bookingSuccess
        }
    },
};