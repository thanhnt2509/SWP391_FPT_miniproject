<template>
    
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                
                BIRD
              </span>
            </template>
            <a-menu-item @click="$emit('ListBird')" key="1">My Birds</a-menu-item>
            <a-menu-item @click="$emit('Registration')" key="2">Bird Register</a-menu-item>
            <a-menu-item @click="$emit('Tracking')" key="3">Bird Tracking</a-menu-item>
            <!-- <a-menu-item key="4">option4</a-menu-item> -->
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                TRANSACTION
              </span>
            </template>
            <a-menu-item @click="$emit('BookTracking')" key="4">TRACKING</a-menu-item>
            <a-menu-item @click="$emit('Booknow')" key="5">BOOK NOW</a-menu-item>
            <!-- <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item> -->
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span> 
                ACCOUNT
              </span>
            </template>
            <a-menu-item key="9">Edit Profile</a-menu-item>
            <a-menu-item key="10">Feedback</a-menu-item>
            <a-menu-item key="11">Review</a-menu-item>
            <a-menu-item key="12">Notification</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        MailOutlined,
        QqOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
    setup() {
        const selectedKeys = ref(['1']);
        const openKeys = ref(['sub1']);
        const handleClick = e => {
            console.log('click', e);
        };
        const titleClick = e => {
            console.log('titleClick', e);
        };
        watch(() => openKeys, val => {
            console.log('openKeys', val);
        });
        return {
            selectedKeys,
            openKeys,
            handleClick,
            titleClick,
        };
    },
});
</script>