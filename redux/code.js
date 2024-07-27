import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
//create action
export const createUser = createAsyncThunk(
  'createUser',
  async (data, {rejectWithValue}) => {
    const response = await fetch(
      'https://65e05c3cd3db23f762491389.mockapi.io/crud',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);
////////read
export const showUser = createAsyncThunk('showUser', async () => {
  const res = await fetch('https://65e05c3cd3db23f762491389.mockapi.io/crud');
  try {
    const respo = await res.json();
    return respo;
  } catch (error) {
    console.log(error);
  }
});
////////DELETE
export const deleteUser = createAsyncThunk('deleteUser', async id => {
  const res = await fetch(
    https://65e05c3cd3db23f762491389.mockapi.io/crud/${id},
    {method: 'DELETE'},
  );
  try {
    const respo = await res.json();
    return respo;
  } catch (error) {
    console.log(error);
  }
});

//update action
export const updateUser = createAsyncThunk('updateUser', async data => {
  const response = await fetch(
    https://65e05c3cd3db23f762491389.mockapi.io/crud/${data.id},
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

const userDatail = createSlice({
  name: 'userDetail',
  initialState: {
    user: [],
    isloading: false,
    isError: false,
    reducers: {},
  },
  extraReducers: builder => {
    //create
    builder
      .addCase(createUser.pending, state => {
        state.isloading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isloading = false;
        state.isError = action.error.message;
      })
      /////////read
      .addCase(showUser.pending, state => {
        state.isloading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.user = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.isloading = false;
        state.isError = action.error.message;
      })
      /////////delete
      .addCase(deleteUser.pending, state => {
        state.isloading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const {id} = action.payload;
        state.isloading = false;
        state.user = state.user.filter(item => item.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isloading = false;
        state.isError = action.error.message;
      })
      ///////updateeeee
      .addCase(updateUser.pending, state => {
        state.isloading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.user = state.user.map(item =>   item.id === action.payload.id ? action.payload : item,
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isloading = false;
        state.isError = action.error.message;
      });
  },
});
export default userDatail.reducer;