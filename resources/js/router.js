import Router from 'vue-router'
import TaskListComponent from './components/TaskListComponent'
import TaskShowComponent from './components/TaskShowComponent'
import TaskCreateComponent from './components/TaskCreateComponent'
import TaskEditComponent from './components/TaskEditComponent'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskListComponent
    },
    {
      path: '/tasks/create',
      name: 'task.create',
      component: TaskCreateComponent,
    },
    {
      path: '/tasks/:taskId',
      name: 'task.show',
      component: TaskShowComponent,
      props: true
    },
    {
      path: '/tasks/:taskId/edit',
      name: 'task.edit',
      component: TaskEditComponent,
      props: true
    },
  ]
});