<template>
    <div>
        <!-- :confirm-loading="confirmLoading" @ok="handleOk" -->
        serviceSelected: {{ serviceSelected }}
        <table>
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>HighLight</th>
                    <th>Service Pack</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a-input v-model:value="serviceSelected.name" />
                    </td>
                    <td>
                        <a-input v-model:value="serviceSelected.price" />
                    </td>
                    <td >
                        <!-- <a-input v-model:value="serviceSelected.image" /> -->
                        <input style="width: 200px; overflow: scroll;" type="file" accept="images/jpg">
                    </td>
                    <td>
                        <a-input v-model:value="serviceSelected.description" />
                    </td>
                    <td>
                        <a-select v-model:value="serviceSelected.isHighlight">
                            <a-select-option value="1">Hot</a-select-option>
                            <a-select-option value="0">Normal</a-select-option>
                        </a-select>
                    </td>
                    <td>
                        <a-select v-model:value="serviceSelected.isPack">
                            <a-select-option value="1">Service Pack</a-select-option>
                            <a-select-option value="0">Service Quantity</a-select-option>
                        </a-select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Manage_ServiceUpdate",
    props: {
        serviceSelected: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {
            
        };
    },
}
</script>