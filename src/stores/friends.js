import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'

export const useFriendsStore = defineStore('friends', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  return getStoreTemplate('friends', generalApiOperation)
})
// import { defineStore } from 'pinia'
// import { reactive, computed } from 'vue'
// export const useFriendsStore = defineStore('friends', () => {
// let friendsList = reactive([])
// let friends = reactive([
// 	{
// 		id:1,
// 		name:'Галя',
// 		category:'баба'
// 	},
// 	{
// 		id:2,
// 		name:'Іван',
// 		category:'дід'
// 	},
// 	{
// 		id:3,
// 		name:'Оленка',
// 		category:'онука'
// 	},
// ])
// const getFriendsList = computed(() => friendsList)
// const getFriendById = computed((friendId) => friendsList.find(item => item.id == friendId))
// function 	loadList(){ 
 

// 	if (friendsList.length === 0) {
 
// 		 friends.forEach(friend => friendsList.push(friend));
// }
// }
// function addItem(item) {
// 	const newId = friendsList.length > 0 ? friendsList[friendsList.length - 1].id + 1 : 1;
// 	friendsList.push({ ...item, id: newId });
// }
// function deleteItem(itemId){
// 	friendsList = friendsList.filter(item => item.id !== itemId)
// }
 
// return {friendsList, friends, getFriendsList, getFriendById, loadList, addItem, deleteItem}
// })