<template>
    <section id="wrapper">
        <h1>Login</h1>
        <div id="fromData">
            <div v-if="isIncorrect">
                <p style="color: red">Incorrect email or password</p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="fields.email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="fields.password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button @click="submitForm" type="submit" class="button is-success">
                        <div v-if="loading" class="ui text loader" />
                        Login
                    </button>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import { message } from 'ant-design-vue';
export default {
    name: 'Login',
    data() {
        return {
            fields: {
                // admin login
                email: 'U1@gmail.com',
                password: '12345',
                // user login
                // email: 'U3@gmail.com',
                // password: '123456',
                remember_me: false
            },
            isIncorrect: false,
            loading: false
        }
    },
    methods: {
        submitForm(evt) {
            // validation fields
            if (this.fields.email == '' || this.fields.password == '') {
                message.error('Please fill in all fields');
                return;
            } else {
                evt.preventDefault();
                this.loading = true;
                try {
                    const res = this.$store.dispatch('login', this.fields)
                    this.loading = false;
                    message.success('Login successfully');
                    this.$router.push('/');
                    // if (res.status == 200) {
                    // } else {
                    // this.loading = false;
                    // this.isIncorrect = true;
                    // message.error('Incorrect email or password');
                    // }
                } catch (err) {
                    this.loading = false;
                    this.isIncorrect = true;
                    message.error('Incorrect email or password');
                }
            }
        }
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