<template>
    <div class="container content">
        <div class="columns">
            <div class="column is-four-fifths">
                <h1 class="title">Manager page</h1>
                <p class="subtitle">Manager can approve or reject a transaction</p>
            </div>

            <!-- table of income for day, month, year -->
            <div class="column">
                <h3>Income</h3>
                <p>Day: 1000$</p>
                <p>Month: 10000$</p>
                <p>Year: 100000$</p>
            </div>
        </div>
        <div class="columns">
            <h1 class="column is-four-fifths">Transaction list</h1>
            <div class="column demo-dropdown-wrap">
                <a-dropdown>
                    <template #overlay>
                        <a-menu @click="handleMenuClick">
                            <a-menu-item key="5">
                                <UserOutlined />
                                All
                            </a-menu-item>
                            <a-menu-item key="0">
                                <UserOutlined />
                                Pending
                            </a-menu-item>
                            <a-menu-item key="1">
                                <UserOutlined />
                                Approved
                            </a-menu-item>
                            <a-menu-item key="2">
                                <UserOutlined />
                                On-going
                            </a-menu-item>
                            <a-menu-item key="3">
                                <UserOutlined />
                                Completed
                            </a-menu-item>
                            <a-menu-item key="4">
                                <UserOutlined />
                                Canceled
                            </a-menu-item>
                        </a-menu>
                    </template>
                    <a-button class="button is-light">
                        Sort by
                        <DownOutlined/>
                    </a-button>
                </a-dropdown>
            </div>
        </div>

        <TransactionList :sort_by="sort_by"/>
    </div>
</template>

<script>
import TransactionList from './TransactionList.vue';
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    components: {
        UserOutlined,
        DownOutlined,
        TransactionList
    },
    setup() {
        const store = useStore();

        const bookingStateItems = store.getters.bookingStateItems

        const sort_by = ref('All');

        const handleButtonClick = e => {
            console.log('click left button', e.key);
        };
        const handleMenuClick = e => {
            console.log('click', e.key);
            sort_by.value = bookingStateItems[e.key]?.state || 'All';
        };
        return {
            handleButtonClick,
            handleMenuClick,
            sort_by
        };
    },
});
</script>