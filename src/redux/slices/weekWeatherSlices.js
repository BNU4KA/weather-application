import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherForWeekAction = createAsyncThunk(
    'weekWeather/fetch',
    async (payload, {rejectWithValue, getState, dispatch})=>{
        try {
            const {data} = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?id=${payload}&appid=${process.env.REACT_APP_OPEN_WEAHTER_WEEK_KEY}`)
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data)
        }
    }
);

export const weekWeatherSlice = createSlice({
    name:"weekWeather",
    initialState : {},
    extraReducers: (builder)=>{
        builder.addCase(fetchWeatherForWeekAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherForWeekAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherForWeekAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});

// export default weekWeatherSlice.reducer;