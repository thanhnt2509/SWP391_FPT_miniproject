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
                        title: 'Register new service successfully !',
                        content: h('div', {}, [
                            h('p', 'The new service registerd will automatically apply for your booking!'),
                            h('p', 'Feel free to contact us to know more information !'),
                        ]),
                    });
                    this.$store.dispatch('getAllReportOfBooking_id', this.$route.params.booking_id);
                    this.$store.dispatch('getAllServiceOfBooking_id', this.$route.params.booking_id);
                    // clear fields
                    this.$store.commit('SET_NEW_REPORT_FEEDBACK', '');
                    router.push(`/report/${route.params.booking_id}`)
                } else {
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