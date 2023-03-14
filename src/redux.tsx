import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getShortenLink = createAsyncThunk(
    "shortenUrlApi/getShortenLink",
    async (longUrl: string) => {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
        return (await response.json());
    }
);

interface ShortLinkInterface{
    id:number,
    longUrl: string,
    shortUrl: string,
}

export interface ShortenUrlState {
    loading: boolean,
    error: any,
    data: ShortLinkInterface[],
};

export const shortenUrlSlice = createSlice({
    name: "shortenUrl",
    reducers: {},
    initialState: {
        loading: false,
        error: null,
        data: [],
    } as ShortenUrlState,
    extraReducers: (builder) => {
        builder
            .addCase(getShortenLink.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShortenLink.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.ok === true){
                    state.data.push(
                        {
                            id: state.data.length,
                            longUrl: action.payload.result.original_link,
                            shortUrl: action.payload.result.full_short_link
                        }
                    );
                }
                else{
                    state.error = "This url is not valid";
                }
            })
            .addCase(getShortenLink.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        shortenUrl: shortenUrlSlice.reducer,
    }
})
