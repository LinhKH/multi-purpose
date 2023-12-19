<script setup >
import { computed, ref } from "vue";
import { formatDate } from "../../helper";
import { useToastr } from "../../toastr";
const toastr = useToastr();

const userIdBeingDeleted = ref();

const props = defineProps({
	user: Object,
	index: Number,
	selectedUsers: Array,
});
const emit = defineEmits([
	"confirmUserDeletion",
	"editUser",
	"toggleSelection",
]);

const roles = ref([
	{
		name: "ADMIN",
		value: 1,
	},
	{
		name: "USER",
		value: 2,
	},
]);

const changeRole = (user, role) => {
	axios
		.patch(`/api/users/${user.id}/change-role`, {
			role: role,
		})
		.then(() => {
			toastr.success("Role changed successfully!");
		});
};

const userSelected = computed(() => {
	return props.selectedUsers.includes(props.user.id);
});
</script>

<template>
	<tr>
		<td>
			<input
				type="checkbox"
				:checked="userSelected"
				@change="$emit('toggleSelection', props.user)"
			/>
		</td>
		<td>{{ index + 1 }}</td>
		<td>{{ user.name }}</td>
		<td>{{ user.email }}</td>
		<td>{{ formatDate(user.created_at) }}</td>
		<td>
			<select
				class="form-control"
				@change="changeRole(user, $event.target.value)"
			>
				<option
					v-for="role in roles"
					:key="role"
					:value="role.value"
					:selected="user.role === role.name"
				>
					{{ role.name }}
				</option>
			</select>
		</td>
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
