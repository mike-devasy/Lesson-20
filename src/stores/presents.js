import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'
import { useGeneralStore } from './general'

export const usePresentsStore = defineStore('presents', () => {
  const generalStore = useGeneralStore()
  const { generalApiOperation } = generalStore

  return getStoreTemplate('presents', generalApiOperation)
})
// import { defineStore } from 'pinia'
// import { reactive, computed } from 'vue'

// export const usePresentsStore = defineStore('presents', () => {
// 	let presentsList = reactive([])
// 	const presents = reactive([
// 		{
// 			id:1,
// 			title:'Торт',
// 		},
// 		{
// 			id:2,
// 			title:'Листівка',
// 		},
// 		{
// 			id:3,
// 			title:'Шовдарь',
// 		},
// 	]
// )
// const	getPresentsList = computed(() => presentsList)
// const	getPresentById = computed( (presentId) => presentsList.find(item => item.id == presentId))
// function loadList(){ 
// 		if(presentsList.length === 0)
 
// 			{ presents.forEach(present => presentsList.push(present))}
// 	}
// 	function	addItem(item) {
// 		const newId = presentsList.length > 0 ? presentsList[presentsList.length - 1].id + 1 : 1;
// 		presentsList.push({ ...item, id: newId });
// 	}
// 	function	deleteItem(itemId){
// 			presentsList.splice(presentsList.findIndex(item => item.id === itemId), 1);
// 	}
// 	return {presents, presentsList, getPresentsList, getPresentById, loadList, addItem, deleteItem}
// })