<template>

    <div class="box_sizing">
        <a-divider orientation="left">BOOK NOW</a-divider>
        <a-row type="flex">
            <a-col :flex="2">
                <a-form :model="formState" v-bind="layout" name="nest-messages" :validate-messages="validateMessages"
                    @finish="onFinish">
                    <a-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
                        <a-input v-model:value="formState.user.name" />
                    </a-form-item>
                    <a-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
                        <a-input v-model:value="formState.user.email" />
                    </a-form-item>
                    <a-form-item :name="['user', 'email']" label="Phone" :rules="[{ type: 'tel' }]">
                        <a-input v-model:value="formState.user.phone" />
                    </a-form-item>
                    <a-form-item :name="['user', 'email']" label="Birds" :rules="[{ type: '' }]">
                        <a-select :value="value" show-search placeholder="Select a Bird" style="width: 200px"
                            :options="bird_options" @focus="handleFocus" @blur="handleBlur"
                            @change="handleChange"></a-select>
                    </a-form-item>
                    <a-form-item :name="['user', 'email']" label="Service pack" :rules="[{ type: '' }]">
                        <a-select :value="value" show-search placeholder="Select a pack" style="width: 200px"
                            :options="service_options" @focus="handleFocus" @blur="handleBlur"
                            @change="handleChange"></a-select>
                    </a-form-item>
                    <a-form-item :name="['user', 'time']" label="Time" :rules="[{}]">
                        <a-range-picker :value="hackValue || value" :disabled-date="disabledDate" @change="onChange"
                            @openChange="onOpenChange" @calendarChange="onCalendarChange" />
                    </a-form-item>
                    <a-form-item label="Notification">
                        <a-checkbox :checked="true">Send me daily report information</a-checkbox>
                    </a-form-item>
                    
                    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                        <a-button type="primary" html-type="submit">Submit</a-button>
                    </a-form-item>

                </a-form>
            </a-col>
            <a-col :flex="3"></a-col>
        </a-row>



    </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
    setup() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const bird_options = ref([
            { value: 'bird1-Coca', label: 'bird1-Coca' },
            { value: 'bird2-Pepsi', label: 'bird2-Pepsi' },
            { value: 'bird3-Golden King', label: 'bird3-Golden King' },
        ]);
        const service_options = ref([
            { value: 'standard', label: 'standard' },
            { value: 'basic', label: 'basic' },
            { value: 'premium', label: 'premium' },
        ])
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };
        const formState = reactive({
            user: {
                name: 'Jenny',
                email: 'jenny@gmail.com',
                phone: '0989882912',
                birds: ['bird1']
            },
        });
        const onFinish = values => {
            console.log('Success:', values);
        };

        // date picker
        return {
            formState,
            onFinish,
            layout,
            validateMessages,
            bird_options,
            service_options
        };
    },
});
</script>


<style scoped>
.box_sizing {
    padding-left: 20%;
    padding-right: 20%;
}
</style>