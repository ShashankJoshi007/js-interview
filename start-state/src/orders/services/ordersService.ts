export class OrdersService {
    book(amount: string, onResultsReceivedCallback: (success: boolean) => void) {
        setTimeout(() => {
                const bookingSuccess = amount === "1m";
                onResultsReceivedCallback(bookingSuccess);
            },
            2000
        )
    }
}