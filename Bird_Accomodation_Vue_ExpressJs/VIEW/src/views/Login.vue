<template>
    <div class="container main">
        <h1 class="title main_title has-text-centered">Login</h1>
        <form @submit="submitForm">
            <div v-if="isIncorrect">
                <p style="color: red">Incorrect email or password</p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" v-model="fields.email" placeholder="example@gmail.com" required>
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
                        Login
                    </button>
                    or <router-link to="/register">Sign up</router-link>
                </p>

            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            fields: {
                email: 'U2@gmail.com',
                password: '123456',
                remember_me: false
            },
            isIncorrect: false
        }
    },
    methods: {
        submitForm(evt) {
            evt.preventDefault();
            this.$store.dispatch('login', this.fields)
                .then(() => {
                    this.$router.push('/account/profile')
                })
                .catch((e) => {
                    console.log(e);
                    this.isIncorrect = true
                }, 1000)
            console.log(this.fields);
        }
    }
}
</script>

<style scoped>
.main {
    /* margin: 20px; */
    padding: 10%;
    /* border-radius: 40px; */
    /* background-color: #f5f5f5; */
}
</style>