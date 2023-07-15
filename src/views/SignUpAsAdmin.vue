<template>
  
    <div class="container p-2">
        <div class="row align-items-center">
            <div class="col-lg-6 px-lg-4" >
                <div class="card">
                    <div class="card-header px-lg-5">
                        <div class="card-heading text-primary"> Register</div>
                    </div>
                    <div class="card-body p-lg-5">
                        <form action="index.html" @submit.prevent="handleSubmit">
                            <div class="form-floating mb-3">
                                <input class="form-control" id="username" v-model="user.username" type="text" placeholder="Username"
                               required >
                                <label for="username">Username</label>
                                <!-- <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div> -->
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="floatingInput" v-model="user.email" type="email"
                                    placeholder="name@example.com" required>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Name" v-model="user.firstName"
                                    required>
                                <label for="name">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="floatingPassword" type="password" placeholder="Password"
                                v-model="user.password"
                                    required>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <!-- <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" name="agree" id="agree">
                                <label class="form-check-label" for="agree">I agree with the <a href="#">Terms &
                                        Conditions</a>.</label>
                            </div> -->
                            <div class="form-group">
                                <button class="btn btn-primary text-light" id="register" type="submit"
                                :disabled="submitted"
                                    name="registerSubmit">Register</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer px-lg-5 py-lg-4">
                        <div class="text-sm text-muted">Already have an account? <a @click="user_login()">
                            
                            Login</a>.
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
data () {
    return {
        user: {
            firstName: '',
            email: '',
            username: '',
            password: '',
            roles:['Admin']
        },
        submitted: false
    }
},
computed: {
    ...mapState('auth', ['status'])
},
methods: {
    ...mapActions('auth', ['register']),
    handleSubmit(e) {
     e.preventDefault()
        this.submitted = true;
        this.register({...this.user,phoneNumber:this.user?.username});
        this.submitted = false;

    }
}
};

</script>
<style scoped>
.card-header:first-child {
border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}

.card-header {
position: relative;
padding: 2rem 2rem;
border-bottom: none;
background-color: white;
box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
z-index: 2;
}

.card {
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: none;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
border-radius: 1rem;
}

.bg-gray-100 {
background-color: #f8f9fa !important;
}

body {
font-family: 'Poppins' !important;
}

.text-primary {
color: #4650dd !important;
}


.text-muted {
color: #6c757d !important;
}


.text-sm {
font-size: .7875rem !important;
}

.page-holder {
display: flex;
overflow-x: hidden;
width: 100%;
min-height: calc(100vh - 72px);

flex-wrap: wrap;
}

a {
color: #4650dd !important;
text-decoration: underline !important;
cursor: pointer;
}</style>