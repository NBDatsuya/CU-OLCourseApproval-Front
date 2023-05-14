import {defineStore} from 'pinia'

export const useUserStore
	= defineStore('userInfo', {
	state: () => {
		return {
			uid: 2,
			uName: "zhangsan",
			realName: '张三',
			role: 1
		}
	},
	getters: {},
	actions: {
		setName(value: string) {
			this.uName = value
		},
		setRole(value: number) {
			this.role = value
		},
		getRole() {
			switch (this.role) {
				case 0:
					return '管理员'
				case 1:
					return '教师'
				case 2:
					return '学生'
			}
		}
	}
})