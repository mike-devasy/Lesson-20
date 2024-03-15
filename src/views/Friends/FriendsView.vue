<template>
	<main-master-page>
		<div class="container">
    <h3>Список друзів:</h3>
    <ol>
      <li v-for="{ name, category, id } in getFriendsList" :key="id" class="friend">
        <div class="friend-content">
          <span>{{ category }} {{ name }}</span>
          <button  v-if="getCurrentUserPermissions.delete" @click="onDelete(id)">Видалити</button>
        </div>
      </li>
 
    </ol>

    <div class="new-friend">
      <label>
        <span>Новий друг</span>
        <input
          v-model="newFriend.category"
          type="text"
          class="family"
          placeholder="Ступінь рідства"
        />
        <input v-model="newFriend.name" type="text" placeholder="Им'я" />
      </label>
      <button  @click="onAdd(newFriend)" class="button-friend">Додати</button>
    </div>
  </div>

	</main-master-page>
 
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { reactive, onMounted, computed } from 'vue'
import { useFriendsStore } from '@/stores/friends'
// import { useAssignmentsStore } from '@/stores/assignments'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
const { getCurrentUserPermissions } = storeToRefs(useUsersStore())
// const { deleteAssignmentByFriend } = useAssignmentsStore()
const friendsStore = useFriendsStore()
const { deleteItem, addItem, loadItemsList } = friendsStore
const getFriendsList = computed(() => friendsStore.getItemsList ?? [])
let newFriend = reactive({})
 
onMounted(() => {
	loadItemsList()
})
 
 
function onAdd(newFriend) {
  addItem(newFriend)
	newFriend.category = ''
  newFriend.name = ''
	loadItemsList()
}
function onDelete(id){
	// deleteAssignmentByFriend(id)
	deleteItem(id)
}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
flex-direction: column;
}
.friend {
	
  width: 400px;
  font-size: 20px;
  text-align: left;
  margin: 0 auto;
}
.new-friend{
	margin-top: 30px;
	width: 570px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
 
}
.button-friend{
	margin-right: 0;
}
 
.friend-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

button {
  cursor: pointer;
  width: 150px;
  font-size: 20px;
  padding: 5px 10px;
}
label {
	display: flex;
	gap: 20px;
	width: 600px;
  font-size: 25px;
}
input {
	display: inline-block;
  font-size: 20px;
  width: 200px;
  height: 30px;
}
</style>
