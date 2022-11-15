<template>
    <div>
        <template v-if="!editing">
            <span
                :class="{ 'todo-done': done }"
            >{{ text }}</span>
        </template>
        <template v-else>
            <form @submit.prevent="stopEdit">
                <input type="text" :value="text" @input="$emit('action:edit', $event.target.value)">
            </form>
        </template>
        - <button v-on:click="$emit('action:done')">Done</button>
        - <button @click="() => editing ? stopEdit() : startEdit()">Edit</button>
        - <button @click="$emit('action:delete')">Delete</button>
    </div>
</template>

<script setup lang="ts">
/*
V1 : Liaison de style
<span :style="{ textDecorationLine: done ? 'line-through' : '' }">{{ text }}</span>
*/
import { ref } from 'vue';
import { ITodoItem } from '../../interfaces/TodoItem'

const emit = defineEmits(['action:done', 'action:delete', 'action:edit'])

const props = withDefaults(
    defineProps<ITodoItem>(),
    {
        text: 'test',
    }
)

const editing = ref(false)
const newText = ref(props.text)

const startEdit = () => {
    editing.value = true;
}

const stopEdit = () => {
     // reception avec $event sur le parent
    // emit('action:edit', newText.value)
    editing.value = false;
}

</script>

<style scoped>
.todo-done {
    text-decoration-line: line-through;
    color: green;
}
</style>
