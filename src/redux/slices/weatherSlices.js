import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// actions
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, {rejectWithValue, getState, dispatch})=>{
        try {
            // const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${process.env.REACT_APP_OPEN_WEAHTER_KEY}`)
            // const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${process.env.REACT_APP_OPEN_WEAHTER_WEEK_KEY}`)
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${payload}&units=metric&appid=${process.env.REACT_APP_OPEN_WEAHTER_WEEK_KEY}`)
            // const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${process.env.REACT_APP_OPEN_WEAHTER_WEEK_KEY}`)
            // const {weekData} = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?id=${payload}&appid=${process.env.REACT_APP_OPEN_WEAHTER_WEEK_KEY}`)
            return (data);
        } catch (error) {}
    }
);

// slices
const weatherSlice = createSlice({
    name:"weather",
    initialState : {},
    extraReducers: (builder)=>{
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weaather = undefined;
        });
    },
});

export default weatherSlice.reducer;