<script setup lang="ts">
import Package from '../../package.json'
import naviMenu from '../ts/naviMenu.ts'
import {ref} from "vue";
import {useUserStore} from "../ts/storage.ts";

const userStore = useUserStore()
const drawer = ref(true)
const pageTitle = ref("系统主页")
const userName = userStore.uName
const userRoleText = userStore.getRole()
const userRole = userStore.role

function itemVisible(itemRole: number, userRole: number) {
	return (itemRole === undefined) || (itemRole === userRole)
}

</script>

<template>
    <v-container>
        <v-navigation-drawer
                app
                v-model="drawer"
        >
            <v-list>
                <v-list-item class="align-center text-center">
                    <v-avatar size="width:128,height:128">
                        <img src="../assets/CRU.svg" alt="CRU" width="128" height="128"/>
                    </v-avatar>
                    <v-list-item-title class="title text-center">
                        <span class="font-weight-bold">加里敦大学</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-center">在线课程审批系统</v-list-item-subtitle>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="align-center text-center">
                    <v-list-item-title class="title text-center">
                        <span class="font-weight-bold">{{ userName }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-center">{{ userRoleText }}</v-list-item-subtitle>
                </v-list-item>
                <v-divider></v-divider>

                <v-list v-for="item in naviMenu" :key="item.title" class="text-left">
                    <template v-if="itemVisible(item.role,userRole) && !item.subItems" >
                        <v-list-item :to="item.path">
                            <v-row no-gutters class="align-center"><v-col md="auto"><span :class="item.icon"></span></v-col>
                                <v-col class="text-center" lg="9"><v-list-item-title>{{item.title}}</v-list-item-title></v-col>

                            </v-row>
                        </v-list-item>
                        <v-divider></v-divider>
                    </template>
                    <template v-if="itemVisible(item.role,userRole) && item.subItems">
                        <v-list-group :value="item.title">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props">
                                    <v-row no-gutters class="align-center">
                                        <v-col md="auto"><span :class="item.icon"></span></v-col>
                                        <v-col class="text-right" lg="9"><v-list-item-title>{{item.title}}</v-list-item-title></v-col>
                                    </v-row>
                                </v-list-item>
                            </template>
                            <template v-for="sub in item.subItems" :key="sub.title">
                                <v-list-item :to="sub.path">
                                    <v-row class="align-center" no-gutters>
                                        <v-col md="auto"><span :class="sub.icon"></span></v-col>
                                        <v-col class="text-center" lg="9">
                                            <v-list-item-title>{{sub.title}}</v-list-item-title>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </template>

                        </v-list-group>
                        <v-divider></v-divider>
                    </template>

                </v-list>

            </v-list>
        </v-navigation-drawer>
    </v-container>
    <v-app-bar id="header"
               class="bg-gloria-2 text-center"
               dark>
        <v-row style="align-items: center">
            <v-col class="text-left">
                <v-app-bar-nav-icon @click="drawer = !drawer" class="color-white"></v-app-bar-nav-icon>
            </v-col>
            <v-col class="pa-0 ma-auto">
                <v-spacer></v-spacer>
            </v-col>
            <v-col>
                <v-toolbar-title class="text-center pa-0 ma-auto">{{ pageTitle }}</v-toolbar-title>
            </v-col>
            <v-col class="pa-0 ma-auto">
                <v-spacer></v-spacer>
            </v-col>
            <v-col class="text-right pa-0 ma-auto">
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
        <v-footer class="bg-nenjvlv d-flex flex-column">
            <v-container class="text-center align-center">
                <p>加里敦大学 在线课程审批系统</p>
                <p>Caryton University Online Line Letting System</p>
            </v-container>
        </v-footer>
    </v-main>
</template>

<style scoped>

</style>