import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userQuery: "",
};
export const userSlices = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {

            return {
                ...state,
                ...action.payload,
            }
        },
    },
});

export default userSlices.reducer;
export const { setUser } = userSlices.actions;