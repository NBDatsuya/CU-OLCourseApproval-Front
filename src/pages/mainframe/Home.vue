<script setup lang="ts">
import CourseList from "../../components/CourseList.vue"
const userContent = "";
</script>

<template>
		<v-container fluid>
				<v-row>
						<v-col>
                <course-list></course-list>
						</v-col>
						<v-col>
								<course-list></course-list>
                <v-container id="userContent">
                </v-container>
						</v-col>
				</v-row>
		</v-container>
</template>

<style scoped>

</style>