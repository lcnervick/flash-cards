import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
	name: 'topics',
	initialState: {
		topics: {}
	},
	reducers: {
		addTopic: (state, action) => {
			const data = action.payload;
			data.quizIds = [];
			console.log(state.topics)
			state.topics[data.id] = data;
		},
		addQuizId: (state, action) => {
			state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
			console.log("Quiz ID Added", state.topics);
		}
	}
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;