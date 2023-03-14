<template>
    <div class="origin">
        <div class="main">
            <div class="form_input">
                <h1 class="has-text-centered">Login</h1>
                <form @submit="submitForm">
                    <div v-if="isIncorrect">
                        <p style="color: red">Incorrect email or password</p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" v-model="fields.email" placeholder="example@gmail.com"
                                required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control has-icons-left">

                            <input class="input" v-model="fields.password" type="password" placeholder="Password" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div>
                        <label class="checkbox">
                            <input v-model="fields.remember_me" type="checkbox">
                            Remember me
                        </label>
                    </div>

                    <div class="field">
                        <p class="control">
                            <button type="submit" class="button is-success">
                                <div v-if="loading" class="ui text loader" />
                                Login
                            </button>
                            or <router-link to="/register">Sign up</router-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
export default {
    name: 'Login',
    data() {
        return {
            fields: {
                // admin login
                // email: 'U1@gmail.com',
                // password: '12345',
                // user login
                email: 'U2@gmail.com',
                password: '123456',
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
.main {
    padding: 15% 7% 15% 61%;
    margin: 0;
}

.origin {
    background-image: url('../../public/images/wallpaper-bird.jpg');
    background-position: left;
    background-blend-mode: darken;
    background-size: cover;
}

.form_input {
    background-color: rgb(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 20px;
}

.form_input h1,
p,
label {
    color: white;
}
</style>