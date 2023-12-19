<script setup >
import { ref } from "vue";
import { formatDate } from "../../helper";
import { useToastr } from "../../toastr";
const toastr = useToastr();

const userIdBeingDeleted = ref();

defineProps({
	user: Object,
	index: Number,
});
const emit = defineEmits(["confirmUserDeletion", "editUser"]);
</script>

<template>
	<tr>
		<td>{{ index + 1 }}</td>
		<td>{{ user.name }}</td>
		<td>{{ user.email }}</td>
		<td>{{ formatDate(user.created_at) }}</td>
		<td>{{ user.role }}</td>
		<td>
			<a href="#" @click.prevent="$emit('editUser', user)"
				><i class="fa fa-edit"></i
			></a>
			<a href="#" @click.prevent="$emit('confirmUserDeletion', user.id)"
				><i class="fa fa-trash text-danger ml-2"></i
			></a>
		</td>
	</tr>
</template>
