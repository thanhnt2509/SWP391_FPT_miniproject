<template>
    <section id="wrapper">
        <h1>Register</h1>
        <div id="fromData">
            <div class="field">
                <label class="label">Fullname</label>
                <div class="control has-icons-left">
                    <input v-model="fields.name" class="input" type="text" placeholder="Text input">
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-user"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input v-model="fields.email" class="input" type="email" placeholder="example@gmail.com">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <p class="control has-icons-left">
                    <input v-model="fields.password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>

            <div class="field">
                <label class="label">Phone</label>
                <div class="control has-icons-left">
                    <input v-model="fields.phone" class="input" type="tel" placeholder="Phone">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Address</label>
                <div class="control has-icons-left">
                    <input v-model="fields.address" class="input" type="text" placeholder="Address">
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-address-book"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success" @click="submitForm" :disabled="isLoading">Register <a-spin
                            v-if="isLoading" /></button>
                </p>
            </div>
        </div>
    </section>
</template>
<script>
import { Modal } from 'ant-design-vue';
export default {
    name: 'Register',
    data() {
        return {
            fields: {
                name: '',
                email: '',
                password: '',
                phone: '',
                address: '',
            },
            isFormValid: true,
            isLoading: false,
        }
    },
    methods: {
        async submitForm(e) {
            e.preventDefault();
            console.log(this.fields);
            this.isLoading = true;
            await this.validation();


            if (this.isFormValid) {
                let secondsToGo = 4;
                setTimeout(async () => {
                    this.isLoading = false;
                    const response = await fetch('/api/auth/register',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: this.fields.name,
                                email: this.fields.email,
                                password: this.fields.password,
                                phone: this.fields.phone,
                                address: this.fields.address,
                            }),
                        })
                    if (response.status === 201) {
                        Modal.success({
                            title: 'Your account registered successfully',
                            content: 'Login now !'
                        });
                        this.fields = {
                            name: '',
                            email: '',
                            password: '',
                            phone: '',
                            address: '',
                        }
                        this.$router.push('/login');
                    }
                }, secondsToGo * 1000);
            }
        },
        async validation() {
            if (this.fields.name === '' || this.fields.email === '' || this.fields.password === '' || this.fields.phone === '' || this.fields.address === '') {
                Modal.error({
                    title: 'Please fill in all fields',
                    content: 'Please try again',
                });
                this.isFormValid = false;
            } else {
                const res = await fetch('/api/auth/isExistAccount',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: this.fields.email,
                            phone: this.fields.phone,
                        }),
                    })

                if (res.status === 409) {
                    this.isFormValid = false;
                    Modal.error({
                        title: `Email or Phone are already exist`,
                        content: 'Please try again',
                    });
                    return;
                }

                this.isFormValid = true;
            }
        },
    }

}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;

}

#wrapper {
    margin-top: 40px;
}

#wrapper h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
}

span i {
    margin-left: 15px;
}

#fromData {
    margin-left: 14%;
}
</style>