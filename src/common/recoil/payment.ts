import { atom } from "recoil";

export const expirationPeriodState = atom({
    key: "expirationPeriodState",
    default: {
        firstState: "",
        secondState: "",
    },
});

export const cardPasswordState = atom({
    key: "cardPasswordState",
    default: {
        firstState: "",
        secondState: "",
    },
});
