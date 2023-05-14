export default [
	{
		title: '主页',
		icon: 'mdi mdi-home-circle',
		path: '/',
	}, {
		title: '课程申请',
		icon: 'mdi mdi-file-document-outline',
		path: '/courseApply',
		role: 2
	}, {
		title: '课程管理',
		icon: 'mdi mdi-book-open-variant',
		path: '/course',
		role: 1
	}, {
		title: '审批管理',
		icon: 'mdi mdi-file-document-edit',
		path: '/examine',
		role: 1
	}, {
		title: '审批历史',
		icon: 'mdi mdi-account-check-outline',
		path: '/approvalHistory',
	},
	{
		title: '个人中心', icon: 'mdi mdi-account', path: '',
		subItems: [
			{
				title: '个人信息',
				icon: '',
				path: '/personal/info'
			},{
				title: '修改密码',
				icon:'',
				path: '/personal/changePwd'
			}
		]
	},
	{
		title: '使用帮助',
		icon: 'mdi mdi-help',
		path: '/help'
	}, {
		title: '关于本系统',
		icon: 'mdi mdi-information',
		path: '/about'
	}, {
		title: '退出登陆',
		icon: 'mdi mdi-exit-run',
		path: '/logout'
	}
]