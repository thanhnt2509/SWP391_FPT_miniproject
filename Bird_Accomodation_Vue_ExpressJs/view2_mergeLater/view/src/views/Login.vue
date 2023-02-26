<template>
    <div>
        <h1>Login</h1>
        <form @submit="submitForm">
            <div v-if="isIncorrect">
                <p style="color: red">Incorrect email or password</p>
            </div>
            <div>
                <label>Email</label>
                <input v-model="fields.email" type="tel" placeholder="example@gmail.com" required>
            </div>

            <div>
                <label>Password</label>
                <input v-model="fields.password" type="password" placeholder="********" required>
            </div>

            <div>
                <input v-model="fields.remember_me" type="checkbox">
                <label>Remember me</label>
            </div>

            <div>
                <button type="submit">Login</button>
                <p>or <router-link to="/register">Sign up</router-link></p>
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