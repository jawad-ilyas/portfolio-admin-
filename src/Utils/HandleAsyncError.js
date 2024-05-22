const handleAsyncError = (thunkAPI, error) => {
  if (error.response) {
    return thunkAPI.rejectWithValue(error.response.data);
  } else {
    // Handle network errors, etc.
    // You can log the error or perform other actions as needed.
    console.error("Async operation failed:", error.message);
    return thunkAPI.rejectWithValue("An error occurred");
  }
};


export {handleAsyncError}
