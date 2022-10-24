import { UserEmptyState, User } from '@/models';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

export const UserKey = 'user';

export const userSlice = createSlice({
	name: 'user',
	initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserEmptyState,
	reducers: {
		createUser: (state, action) => {
			persistLocalStorage<User>(UserKey, action.payload);
			return action.payload;
		},
		modifyUser: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage<User>(UserKey, result);
			return result;
		},
		resetUser: () => {
			clearLocalStorage(UserKey);
			return UserEmptyState;
		}
	}
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;