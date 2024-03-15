import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'
// import { computed } from 'vue'

export const useAssignmentsStore = defineStore('assignments', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

return {
	// getAssignmentsListById,
	...getStoreTemplate('assignments', generalApiOperation),
}
 
// export const useAssignmentsStore = defineStore('assignments', () => {
//   let  assignmentsList = reactive([])
//   const  assignments = ([
//             {
//                 id: 1,
//                 personId: 3,
//                 presentId: 3,
//             },
//             {
//                 id: 2,
//                 personId: 1,
//                 presentId: 2,
//             },
//             {
//                 id: 3,
//                 personId: 2,
//                 presentId: 1,
//             },

//         ])
    
// const  getAssignmentsList = computed(() => assignmentsList)
// const	 getAssignmentsListById = computed(() => (friends, presents) => {

// 					return assignmentsList.map((assignment) => {
// 							const person = friends.find(friend => friend.id === assignment.personId);
// 							const present = presents.find(present => present.id === assignment.presentId);
			
// 							// Перевіряємо, чи знайдено об'єкт person та present
// 							if (person && present) {
// 									return {
// 											person: {
// 													name: person.name,
// 													category: person.category
// 											},
// 											present: present,
// 											id: assignment.id
// 									};
// 							} else {
// 									// Якщо хоча б один з об'єктів відсутній, повертаємо порожній об'єкт
// 									return {
// 											person: {},
// 											present: {},
// 											id: assignment.id
// 									};
// 							}
// 					});
// 			})
// function  loadList() {
// 					if( assignmentsList.length === 0)
//             assignments.forEach(assignment => assignmentsList.push(assignment)) 
//         }
// 				function  addItem(item) {
//             const newId =
//                 assignmentsList.length > 0 ? assignmentsList[assignmentsList.length - 1].id + 1 : 1
//             assignmentsList.push({ ...item, id: newId })
//         }
// 				function deleteItem(itemId) {
// 					assignmentsList.splice(assignmentsList.findIndex(item => item.id === itemId), 1);
//         }
// 				function deleteAssignmentByFriend(personId) {
// 					const assignments = assignmentsList;
// 					const filteredAssignments = assignments.filter((assignment) => assignment.personId === personId);
// 		     	filteredAssignments.forEach((assignment) => {
// 					deleteItem(assignment.id)
// 					});
// 			}
//     return {assignmentsList, assignments, getAssignmentsList, getAssignmentsListById, loadList, addItem, deleteItem, deleteAssignmentByFriend}
})
