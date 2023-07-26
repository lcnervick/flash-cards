import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topics.slice";
import quizzesRedonculator from "../features/quizzes/quizzes.slice";
import cardsReblahblah from "../features/cards/cards.slice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesRedonculator,
    cards: cardsReblahblah
  },
});
