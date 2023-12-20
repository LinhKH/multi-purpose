import Dashboard from './components/Dashboard.vue';
import ListAppointments from './pages/appointments/ListAppointments.vue';
import AppointmentForm from './pages/appointments/AppointmentForm.vue';
import UsersList from './pages/users/UsersList.vue';
import UpdateSetting from './pages/settings/UpdateSetting.vue';
import UpdateProfile from './pages/profile/UpdateProfile.vue';


export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard
    },
    {
        path: '/admin/appointments',
        name: 'admin.appointments',
        component: ListAppointments
    },
    {
        path: '/admin/appointments/create',
        name: 'admin.appointments.create',
        component: AppointmentForm,
    },
    {
        path: '/admin/appointments/:id/edit',
        name: 'admin.appointments.edit',
        component: AppointmentForm,
    },
    {
        path: '/admin/users',
        name: 'admin.users',
        component: UsersList
    },
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: UpdateSetting
    },
    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: UpdateProfile
    },
]
