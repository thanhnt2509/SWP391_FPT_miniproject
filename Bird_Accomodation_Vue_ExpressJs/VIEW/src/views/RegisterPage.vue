<template>
    <div class="origin">
        <div class="main">
            <div class="form_input">
                <h1 class="title main_title has-text-centered">Register</h1>
                <form @submit="submitForm">
                    <div class="field">
                        <label class="label">Fullname</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Text input">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="example@gmail.com">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Phone</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Phone">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Address</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Phone">
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" v-model="term_and_condition">
                        <label style="padding-left: 10px;">Term and conditions</label>
                    </div>

                    <div>
                        <button class="button is-success" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            fields: {

            },
        }
    },
    methods: {
        submitForm(evt) {
            evt.preventDefault();
            alert('Not update yet');
            // this.$store.dispatch('login', this.fields)
            //     .then(() => {
            //         this.$router.push('/account/profile')
            //     })
            //     .catch((e) => {
            //         console.log(e);
            //         this.isIncorrect = true
            //     }, 1000)
            // console.log(this.fields);
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
.form_input{
    background-color: rgb(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 20px;
}
.form_input h1, p, label{
    color: white;
}
</style>