import {OrdersService} from "../services/ordersService";

const ordersService = new OrdersService();

export const SideEffects = {
    book(state: any, onDone: (doneAction: string, bookingSuccess: any) => void) {
        ordersService.book(state.amount, (bookingSuccess: any) => {
            onDone('bookingComplete', bookingSuccess)
        })
    },
};