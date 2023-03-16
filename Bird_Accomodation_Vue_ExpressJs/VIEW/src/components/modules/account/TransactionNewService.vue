<template>
    <div>
        <!-- <h1 class="title">Customize your service</h1> -->
        <div class="has-text-centered">
            <button class="button is-primary" type="primary" @click="showModal">Register new service</button>
        </div>
        <a-modal width="1000px" v-model:visible="visible" title="Add new Service" :confirm-loading="confirmLoading" @ok="handleOk">
            <!-- <p>{{ modalText }}</p> -->
            <TransactionNewServiceList />
        </a-modal>
    </div>
</template>
<script>
import TransactionNewServiceList from './TransactionNewServiceList.vue';
import { ref, defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const modalText = ref('Content of the modal');
        const visible = ref(false);
        const confirmLoading = ref(false);
        const showModal = () => {
            visible.value = true;
        };
        const handleOk = () => {
            modalText.value = 'The modal will be closed after two seconds';
            confirmLoading.value = true;
            setTimeout(() => {
                visible.value = false;
                confirmLoading.value = false;
            }, 2000);
        };
        return {
            modalText,
            visible,
            confirmLoading,
            showModal,
            handleOk,
        };
    },
    components: {
        TransactionNewServiceList
    },
});
</script>