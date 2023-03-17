<template>
    <div>
        <!-- <h1 class="title">Customize your service</h1> -->
        <div class="has-text-centered">
            <button class="button is-primary" type="primary" @click="showModal">Register new service</button>
        </div>
        <a-modal width="1000px" v-model:visible="visible" title="Add new Service" :confirm-loading="confirmLoading"
            @ok="handleOk">
            <!-- <p>{{ modalText }}</p> -->
            <TransactionNewServiceList />
        </a-modal>
    </div>
</template>
<script>
import TransactionNewServiceList from './TransactionNewServiceList.vue';
import { ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router'
import { Modal } from "ant-design-vue";
import { h } from "vue";
export default defineComponent({
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
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
                const newServiceRegisterList = store.getters.getNewServiceRegisterList;
                const payload = {
                    booking_id: route.params.booking_id,
                    data: newServiceRegisterList,
                }
                console.log(payload);
                const success = store.dispatch('registerNewBookingService', payload);
                if (success) {
                    store.dispatch('getAllServiceOfBooking_id', route.params.booking_id);

                    Modal.success({
                        title: 'Checkout successfully !',
                        content: h('div', {}, [
                            h('p', 'Money will be transfered to your account soon !'),
                            h('p', 'Thank you for using our service !'),
                        ]),
                    });

                    router.push(`/report/${route.params.booking_id}`)
                }else{
                    Modal.error({
                        title: 'Checkout failed !',
                        content: h('div', {}, [
                            h('p', 'Please try again !'),
                        ]),
                    });
                }
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