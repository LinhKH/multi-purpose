<script setup>
import { ref, onMounted, reactive } from "vue";

const users = ref([]);
const searchQuery = ref(null);

const form = reactive({
    name: '',
    email: '',
    password: '',
});

const addUser = () => {
    $('#userFormModal').modal('show');
};

const createUser = () => {
    axios.post('/api/users', form)
        .then((response) => {
            users.value.unshift(response.data);
            $('#userFormModal').modal('hide');
            form.name = '';
            form.email = '';
            form.password = '';
        });
};

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
					<button @click="addUser" type="button" class="mb-2 btn btn-primary">
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

		</div>
	</div>

    <div class="modal fade" id="userFormModal" data-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                        <span>Add New User</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form autocomplete="off" @submit.prevent="createUser">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Enter full name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input v-model="form.email" type="text" class="form-control" id="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="email">Password</label>
                            <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Enter password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
