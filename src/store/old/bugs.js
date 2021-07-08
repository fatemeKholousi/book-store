import React from 'react'

function bugs() {
    return (
        <div>
            
        </div>
    )
}

export default bugs

// import { Store } from "@material-ui/icons";
// import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// let lastId = 555;
// const slice = createSlice({
//   name: "bugs",
//   initialState: [],
//   reducers: {
//     //actions=>handlers
//     bugAdded: (bugs, action) =>
//       bugs.push({
//         id: ++lastId,
//         description: action.payload.description,
//         resolve: false,
//       }),
//     //باقی ردیوسر ها
//   },
// });
// console.log(slice);

// export const getUnresolvedBugs = createSelector(
//   (state) => state.entities.bugs,
//   (state) => state.entities.projects,

//   (bugs, projects) => bugs.filter((bug) => !bug.resolved)
// );
// export const { bugAdded } = slice.actions;
// export default slice.reducer;

// // import { createSlice } from "@reduxjs/toolkit";
// // let lastId = 552;
// // const slice = createSlice({
// //   name: "bugs",
// //   initialState: [],
// //   reducers: {
// //     bugAdded: (bug, action) => {
// //     bug.push({ id: ++lastId, description: action.payload.description });
// //     },
// //     // projectUpdate:(project,action)=>{},
// //     // projectDelete:(project,action)=>{project.filter(element => element !== action.payload)}
// //   },
// // });
// // export const { bugsAdded } = slice.actions;
// // export default slice.reducer;
// // //Action Types
// // // export const BUG_ADDED = "bugAdded";
// // //ActionCreators
// // // export const bugAdded = (description) => ({
// // //   type: BUG_ADDED,
// // //   payload: {
// // //     description,
// // //   },
// // // });
// // //
// // // ================================
// // // export const bugAdded = createAction("bugAdded");
// // // export const bugResolved = createAction("bugResolved");
// // // export const bugRemoved = createAction("bugRemoved");

// // //reducer
// // // export function reducer(state = [], action) {
// // //   if (action.type == bugAdded) {
// // //     return [
// // //       ...state,
// // //       { id: ++lastId, description: action.payload.description, resolve: false },
// // //     ];
// // //   }
// // // }
// // // ================================
// // // createReducer([], {
// // //   [bugAdded.type]: (state, action) => {
// // //     state.push({
// // //       id: ++lastId,
// // //       description: action.payload.description,
// // //       resolve: false,
// // //     });
// // //   },
// // // });

// // // ________dispatch__________
// // // on App.js
// // // give a payload actually
// // // it must be object
// // // Store.dispatch(actions.bugAdded({description:'bug1'}))
// // // __________________
