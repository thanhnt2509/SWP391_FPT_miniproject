<template>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Account</a-breadcrumb-item>
            <a-breadcrumb-item>Bird</a-breadcrumb-item>
            <a-breadcrumb-item>Register</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">

            <a-row type="flex">
                <a-col :flex="2">
                    <h2 class="text_center xxlarge">Bird Register</h2>
                    <a-form v-bind="layout">
                        <a-form-item label="Birdname">
                            <a-input></a-input>
                        </a-form-item>
                        <a-form-item label="Species">
                            <a-select ref="select" style="width: 120px" @focus="focus" @change="handleChange">
                                <a-select-option value="Ostrich">Ostrich</a-select-option>
                                <a-select-option value="Cockatiel">Cockatiel</a-select-option>
                                <a-select-option value="Penguin">Penguin</a-select-option>
                                <a-select-option value="Seagull">Seagull</a-select-option>
                            </a-select>
                        </a-form-item>

                        <a-form-item label="Age">
                            <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
                        </a-form-item>

                        <a-form-item label="Gender">
                            <a-select ref="select" style="width: 120px" @change="handleChange">
                                <a-select-option value="Ostrich">Male</a-select-option>
                                <a-select-option value="Cockatiel">Female</a-select-option>

                            </a-select>
                        </a-form-item>

                        <a-form-item label="Breed">
                            <a-input></a-input>
                        </a-form-item>

                        <a-form-item label="Descrition">
                            <a-textarea placeholder="place your descripton" allow-clear />
                        </a-form-item>
                        <a-button class="submit_btn" type="primary" @click="onSubmit">Create</a-button>
                    </a-form>
                </a-col>
                <a-col :flex="3">

                </a-col>
            </a-row>

        </a-layout-content>
    </a-layout>

</template>

<script setup>

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
</script>

<style scoped>
.submit_btn{
    margin-left: 40%;
}
.text_center {
    text-align: center;
}

.xxlarge {
    font-size: xx-large;
}
</style>