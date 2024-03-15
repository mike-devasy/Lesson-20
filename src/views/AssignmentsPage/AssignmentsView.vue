<template>
  <main-master-page>
    <div class="container">
      <h2>Призначення подарунків:</h2>
			<!-- getAssignmentsListById:{{ getAssignmentsListById }} -->
			<!-- assignmentsFoolList: {{ assignmentsFoolList }} -->
      <ol v-if="!isFriends">
        <li v-for="{ person, present, id } in assignmentsFoolList" :key="id" class="friend">
          <div class="friend-content">
            <span> {{ person.category }} {{ person.name }} ---- {{ present.title }} </span>
            <button v-if="getCurrentUserPermissions.delete" @click="onDelete(id)">Видалити</button>
          </div>
        </li>
      </ol>
      <div v-if="getCurrentUserPermissions.create" class="new-friend">
        <label>
          Нове призначення
          <select v-model="assignment.personId">
            <option v-for="friend in getFriendsList" :key="friend.id" :value="friend.id">
              {{ friend.category }} {{ friend.name }}
            </option>
          </select>

          <select v-model="assignment.presentId">
            <option v-for="present in getPresentsList" :key="present.id" :value="present.id">
              {{ present.title }}
            </option>
          </select>
        </label>
        <button   @click="onAdd(assignment)">Додати</button>
      </div>
    </div>
  </main-master-page>
</template>
 
<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { storeToRefs } from 'pinia'
import {ref, reactive, onMounted, computed } from 'vue'
import { useUsersStore } from '@/stores/users'
const { getCurrentUserPermissions } = storeToRefs(useUsersStore())
import { useAssignmentsStore } from '@/stores/assignments'
import { useFriendsStore } from '@/stores/friends'
import { usePresentsStore } from '@/stores/presents'
let assignment = reactive({})
const friendsStore = useFriendsStore()
const presentsStore = usePresentsStore()
const assignmentsStore = useAssignmentsStore()
const getFriendsList = computed(() => friendsStore.getItemsList)
const getPresentsList = computed(() => presentsStore.getItemsList)
const assignmentsFoolList = ref([])
 
// const getAssignmentsListById = computed(() => { return loadAssignmentsFoolList()} )
const isFriends = computed(() => friendsStore.getItemsList.length === 0)
onMounted(async () => {
  await assignmentsStore.loadItemsList();
  await friendsStore.loadItemsList();
  await presentsStore.loadItemsList();

	const assignments = await loadAssignmentsFoolList();
  assignmentsFoolList.value = assignments;
});
async function loadAssignmentsFoolList() {
  const assignments = [];
  const itemsList = assignmentsStore.getItemsList;

  for (const assignment of itemsList) {
    const person = await friendsStore.loadItemById(assignment.personId);
    const present = await presentsStore.loadItemById(assignment.presentId);
    assignments.push({
      person: {
        name: person.name,
        category: person.category
      },
      present: {
        title: present.title
      },
			id:assignment.id
    });
  }
console.log('assignments');
console.log(assignments);
  return assignments;
}
async function onAdd(item) {
  await assignmentsStore.addItem(item)
  assignment = {} // Скидання форми після додавання елемента
  assignmentsFoolList.value.push(await loadAssignmentsFoolItem(item)) // Додавання нового елемента до списку
}
async function loadAssignmentsFoolItem(item) {
  const person = await friendsStore.loadItemById(item.personId);
  const present = await presentsStore.loadItemById(item.presentId);
  return {
    person: {
      name: person.name,
      category: person.category
    },
    present: {
      title: present.title
    }
  };
}
  function onDelete(id) {
	// console.log('id');
	// console.log(id);
	
	 assignmentsFoolList.value = assignmentsFoolList.value.filter((item) => item.id !== id)
    assignmentsStore.deleteItem(id)
	//  console.log('7777777777777777');
	 
}
</script>

<style lang="scss" scoped>
.friend {
  width: 600px;
  font-size: 25px;
  text-align: left;
  margin: 30px auto;
}
.friend-content {
  width: 500px;
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
  font-size: 25px;
}
select {
  width: 200px;
  margin-right: 20px;
  height: 30px;
  font-size: 20px;
}
input {
  margin-right: 20px;
  width: 200px;
}
</style>
