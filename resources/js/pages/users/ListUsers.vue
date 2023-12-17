<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);

const getUsers = () => {
	axios.get("/api/users").then((res) => {
		users.value = res.data;
	});
};

onMounted(() => {
	getUsers();
});
</script>


<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">Users</h1>
				</div>
				<div class="col-sm-6">
					<ol class="breadcrumb float-sm-right">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item active">Users</li>
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container-fluid">
			<div class="d-flex justify-content-between">
				<div class="d-flex">
					<button type="button" class="mb-2 btn btn-primary">
						<i class="fa fa-plus-circle mr-1"></i>
						Add New User
					</button>
					<div>
						<button type="button" class="ml-2 mb-2 btn btn-danger">
							<i class="fa fa-trash mr-1"></i>
							Delete Selected
						</button>
						<span class="ml-2">Selected users</span>
					</div>
				</div>
				<div>
					<input
						type="text"
						v-model="searchQuery"
						class="form-control"
						placeholder="Search..."
					/>
				</div>
			</div>
			<div class="card">
				<div class="card-body">
					<div class="card-body table-responsive p-0">
						<table class="table table-hover text-nowrap">
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Email</th>
									<th>Registered Date</th>
									<th>Role</th>
									<th>Options</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(user,index) in users" :key="user.id">
									<td>{{ index + 1 }}</td>
									<td>{{ user.name }}</td>
									<td>{{ user.email }}</td>
									<td>John Doe</td>
									<td>John Doe</td>
									<td>John Doe</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Bootstrap4Pagination
				:data="users"
				@pagination-change-page="getUsers"
			/>
		</div>
	</div>

	<div
		class="modal fade"
		id="userFormModal"
		data-backdrop="static"
		tabindex="-1"
		role="dialog"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">
						<span v-if="editing">Edit User</span>
						<span v-else>Add New User</span>
					</h5>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<div
		class="modal fade"
		id="deleteUserModal"
		data-backdrop="static"
		tabindex="-1"
		role="dialog"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">
						<span>Delete User</span>
					</h5>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<h5>Are you sure you want to delete this user ?</h5>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-dismiss="modal"
					>
						Cancel
					</button>
					<button
						@click.prevent="deleteUser"
						type="button"
						class="btn btn-primary"
					>
						Delete User
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
