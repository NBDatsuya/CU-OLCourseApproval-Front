<script setup lang="ts">
import {reactive} from "vue";
import {useUserStore} from "../ts/storage.ts";

const userStore = useUserStore()
const courseList = reactive([{
	c_id: 0,
	c_name: '测试',
	instr: '老师',
	sched: '安排'
}])


async function getList() {

}

/*
* buttonType:
*   0 = withdraw
*   1 = enroll
*   2 = edit
*   3 = delete
*/
function buttonShow(buttonType: number, canBeWithdraw: boolean) {
	switch (userStore.role) {
		case 2:
			return ((buttonType == 0 && canBeWithdraw) || (buttonType == 1))
            break
        case 0:
        case 1:
			return (buttonType >= 2)
	}
}

</script>

<template>
    <v-card>
        <v-card-title>课程列表</v-card-title>
        <v-card-text>
            <v-table>
                <thead class="text-center">
                <tr class="text-center">
                    <th class="text-center">课程编号</th>
                    <th class="text-center">课程名称</th>
                    <th class="text-center">授课教师</th>
                    <th class="text-center">课程安排</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody class="text-center">
                <tr v-for="item in courseList" :key="item.c_id">
                    <td>{{ item.c_id }}</td>
                    <td>{{ item.c_name }}</td>
                    <td>{{ item.instr }}</td>
                    <td>{{ item.sched }}</td>
                    <td>
                        <v-btn-group>
                            <v-btn v-if="buttonShow(0,true)">退课</v-btn>
                            <v-btn v-if="buttonShow(1,false)">选课</v-btn>
                            <v-btn v-if="buttonShow(2,false)">修改</v-btn>
                            <v-btn v-if="buttonShow(3,false)">删除</v-btn>
                        </v-btn-group>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<style scoped>

</style>