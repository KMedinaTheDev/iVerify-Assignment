import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    app:{
        loading: boolean
        pageName: string
    },
};

const initialState: UIState = {
    app:{
        loading: false,
        pageName: "HelloWord LLC In-House Tool"
    },
}

const startLoad = createAsyncThunk(
    'ui/startLoad',
    async (payload, thunkAPI) => {
        return true;
    }
)

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAppLoading: (state, action: PayloadAction<boolean>) => {
            state.app.loading = action.payload
        },
        resetUI: (state) => {
            return initialState
        }
    },
    extraReducers: (builder) => {

    }
})

//export actions
export { startLoad };
export const { 
    setAppLoading,
    } = uiSlice.actions;

export default uiSlice.reducer;