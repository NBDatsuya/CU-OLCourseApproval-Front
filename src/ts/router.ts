import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: '/',
		component: () => import('../pages/Main.vue'),
		children: [{
			path: '/',
			component: () => import('../pages/mainframe/Home.vue'),
			alias: ['/main', '/index'],
			meta: {
				title: '主页 - 加里敦大学在线课程审批系统'
			}
		}]
	}, {
		path: '/login',
		component: () => import('../pages/Login.vue'),
		meta: {
			title: '登陆 - 加里敦大学在线课程审批系统'
		}
	}]

let router = createRouter({
	history: createWebHistory(),
	routes: routes
})

// @ts-ignore
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		// @ts-ignore
		document.title = to.meta.title
	}
	next()
})

export default router