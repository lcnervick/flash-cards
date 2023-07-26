import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topics.slice';

export const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes: {}
	},
	reducers: {
		addQuiz: (state, action) => {
			const { id, topicId, name, cardIds } = action.payload;
			state.quizzes[id] = {
				id: id,
				topicId: topicId,
				name: name,
				cardIds: cardIds
			};
			console.log("Quiz Added", state.quizzes);
		},

	}
});

export const addQuizThunk = payload => {
	// payload = { name: 'name  of quiz', topicId: '123', cardIds: ['4', '5', '6'], id: '789', }
	return (dispatch, getState) => {
		console.log("Starting Quiz Add", payload);
		const { id, name, cardIds, topicId } = payload;
		dispatch(addQuiz({
			id: id,
			topicId: topicId,
			name: name,
			cardIds: cardIds
		}));
		dispatch(addQuizId({
			quizId: id,
			topicId: topicId
		}));
		console.log("Add Quiz Complete", getState());
	}
}

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;