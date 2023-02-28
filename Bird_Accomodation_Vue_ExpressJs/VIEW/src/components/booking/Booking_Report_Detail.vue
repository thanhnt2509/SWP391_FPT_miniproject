<template>
    <a-layout>
        <a-layout-content style="padding: 0">
            <a-layout style="padding: 24px 0; background: #fff">
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                        style="height: 100% margin: 0px">
                        <a-sub-menu key="sub1">
                            <template #title>
                                <span>
                                    <user-outlined />
                                    subnav 1
                                </span>
                            </template>
                            <a-menu-item key="1">day1</a-menu-item>
                            <a-menu-item key="2">day2</a-menu-item>
                            <a-menu-item key="3">day3</a-menu-item>
                            <a-menu-item key="4">day4</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <template #title>
                                <span>
                                    <laptop-outlined />
                                    subnav 2
                                </span>
                            </template>
                            <a-menu-item key="5">day5</a-menu-item>
                            <a-menu-item key="6">day6</a-menu-item>
                            <a-menu-item key="7">day7</a-menu-item>
                            <a-menu-item key="8">day8</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <template #title>
                                <span>
                                    <notification-outlined />
                                    subnav 3
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                    Content
                </a-layout-content>
            </a-layout>
        </a-layout-content>
    </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
    },
    setup() {
        return {
            selectedKeys1: ref(['2']),
            selectedKeys2: ref(['1']),
            openKeys: ref(['sub1']),
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