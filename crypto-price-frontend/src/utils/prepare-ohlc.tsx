import OHLC from "../models/ohlc";

const prepareOHLC = (data: OHLC[]): any[] => {
    return data.map(({ open, close, ...other }) => {
        return {
            ...other,
            openClose: [open, close]
        };
    });
};

export default prepareOHLC;