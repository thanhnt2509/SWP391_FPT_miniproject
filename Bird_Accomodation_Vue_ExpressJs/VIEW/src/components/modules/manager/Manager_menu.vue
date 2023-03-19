<template>
    <a-layout>
        <a-layout-content style="padding: 0 50px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>Manage</a-breadcrumb-item>
                <a-breadcrumb-item>{{ `${selectedKeys[0].charAt(0).toUpperCase()}${selectedKeys[0].slice(1)}`
                }}</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout style="padding: 24px 0; background: #fff">
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu v-model:selectedKeys="selectedKeys" mode="inline" style="height: 100%">
                        <a-menu-item key="dashboard">
                            <account-book-outlined />
                            <span>Dashboard</span>
                        </a-menu-item>
                        <a-menu-item key="transaction">
                            <account-book-outlined />
                            <span>Manage Transaction</span>
                        </a-menu-item>
                        <a-menu-item key="service">
                            <video-camera-outlined />
                            <span>Manage Service</span>
                        </a-menu-item>
                        <a-menu-item key="account">
                            <solution-outlined />
                            <span>Manage Account</span>
                        </a-menu-item>
                        <a-menu-item key="post">
                            <fund-view-outlined />
                            <span>Manage Post</span>
                        </a-menu-item>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                    <Manager_Dashboard v-if="selectedKeys == 'dashboard'" />
                    <Manage_Transaction v-if="selectedKeys == 'transaction'" />
                    <Manage_Service v-if="selectedKeys == 'service'" />
                    <Manage_Account v-if="selectedKeys == 'account'" />
                    <Manage_Post v-if="selectedKeys == 'post'" />
                </a-layout-content>
            </a-layout>
        </a-layout-content>
    </a-layout>
</template>
<script>
import { AccountBookOutlined, VideoCameraOutlined, SolutionOutlined, FundViewOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import Manager_Dashboard from './Manager_Dashboard.vue';
import Manage_Transaction from './Manage_Transaction.vue';
import Manage_Service from './Manage_Service.vue';
import Manage_Account from './Manage_Account.vue';
import Manage_Post from './Manage_Post.vue';
export default defineComponent({
    components: {
        AccountBookOutlined,
        VideoCameraOutlined,
        SolutionOutlined,
        FundViewOutlined,
        Manager_Dashboard,
        Manage_Transaction,
        Manage_Service,
        Manage_Account,
        Manage_Post
    },
    setup() {
        return {
            selectedKeys: ref(['dashboard']),
        };
    },
});
</script>
<style>
#components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>