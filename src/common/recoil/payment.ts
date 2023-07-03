import { atom } from "recoil";

export const expirationPeriodState = atom({
    key: "expirationPeriodState",
    default: {
        firstState: "",
        secondState: "",
    },
});
