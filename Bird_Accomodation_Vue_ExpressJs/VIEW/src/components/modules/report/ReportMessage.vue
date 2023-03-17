<template>
    <!-- feedback content{{ newFeedback }} -->
    <!-- newReportFeedback: {{ getNewReportFeedback }} -->

    <div class="report">
        <h1 class="title">Report Message</h1>
        <div class="report_title">
            <p>Bird Oasis</p>
        </div>
        <div class="report_message">
            <div class="report_message_staff_title">
                <a-avatar>
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
                <p>Staff_01</p>
            </div>
            <div class="report_message_staff_message_box">
                <div class="report_message_staff_message">
                    <p>{{ reportData.service_report_text }}</p>
                </div>
            </div>

            <div class="report_message_user_title">
                <a-avatar style="background-color: #87d068">
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
            </div>
            <div class="report_message_user_message">
                <p v-if="reportData.feedback_content">{{ reportData.feedback_content }}</p>
            </div>
        </div>
        <a-input-group compact width="100%" v-if="$store.getters.getUser.role === 0">
            <a-input v-if="reportData.feedback_content !== null" disabled v-model:value="reportData.feedback_content"
                placeholder="Leave your daily feedback here !" style="width: calc(100% - 67px)" />

            <a-input v-else v-model:value="newFeedback" placeholder="Leave your daily feedback here !"
                style="width: calc(100% - 67px)" />
            <a-button type="primary" @click="onSendFeedback">Send</a-button>
        </a-input-group>

    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { setTransitionHooks } from 'vue';
import { mapGetters } from 'vuex';
export default {
    name: "ReportMessage",
    data() {
        return {
            newFeedback: ''
        }
    },
    watch: {
        newFeedback: function () {
            this.$store.commit('SET_NEW_REPORT_FEEDBACK', this.newFeedback)
        }
    },
    computed: {
        ...mapGetters({
            getNewReportFeedback: 'getNewReportFeedback'
        })
    },
    methods: {
        onSendFeedback() {
            setTimeout(() => {
                // handle fields data
                if (this.getNewReportFeedback === '') {
                    Modal.error({
                        title: 'Error',
                        content: 'Please enter your feedback!',
                    });
                    return;
                } else {
                    const payload = {
                        dreport_id: this.reportData.dreport_id,
                        feedback_content: this.getNewReportFeedback
                    }
                    const success = this.$store.dispatch('submitNewReportFeedback', payload); 
                    if(success) {
                        Modal.success({
                            title: 'Success',
                            content: 'Your feedback has been sent!',
                        });
                        this.$store.dispatch('clearNewReportFeedback');
                        this.$router.push(`/account/transaction`)
                    } else {
                        Modal.error({
                            title: 'Error',
                            content: 'Your feedback has not been sent!',
                        });
                    }
                    
                }
                // console.log(`dreport_id: ${this.reportData.dreport_id}`);
                // console.log(`feedback_content: ${this.getNewReportFeedback}`);
            }, 2000);
        }
    },
    props: {
        reportData: {
            type: Object,
            required: true
        }
    },
    components: {
        UserOutlined
    },
}
</script>

<style scoped>
.report {
    /* padding: 20px; */
    /* border: 1px solid #e8e8e8; */
    border-radius: 4px;
    background-color: #fff;
}

.report_title {
    height: 35px;
    width: 100%;
    background-color: #3FA9FF;    opacity: 0.3;
    color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.report_title p {
    font-size: large;
}

.report_message {
    width: 100%;
    position: relative;
    height: 420px;
    background-color: #F5F5F5;
}

.report_message * {
    margin: 0;
    padding: 0;
    /* color: white; */
}

.report_message_staff_title {
    position: absolute;
    display: flex;
    top: 1%;
    left: 1%;
}

.report_message_staff_title p {
    padding-left: 10px;
    padding-top: 2.5px;
}

.report_message_staff_message {
    position: absolute;
    background-color: #3FA9FF;
    max-height: 265px;
    height: fit-content;
    overflow: hidden;
    width: 70%;
    border-radius: 20px;
    top: 10%;
    left: 10%;
}

.report_message_staff_message p {
    padding: 10px 20px;
    color: white;
    text-align: left;
    word-wrap: break-word;
    text-justify: kashida;
}

.report_message_user_message {
    position: absolute;
    background-color: #3FA9FF;
    overflow: hidden;
    width: 70%;
    border-radius: 20px;
    top: 82%;
    left: 20%;
}

.report_message_user_message p {
    padding: 10px 20px;
    color: white;
    text-align: left;
    word-wrap: break-word;
    text-justify: kashida;
}

.report_message_user_title {
    position: absolute;
    top: 87%;
    left: 91%;
}
</style>