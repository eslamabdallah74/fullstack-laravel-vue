<template>
    <div>
        <div class="container">
            <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20 col-md-4">
                <div class="login-header">
                    <h2>Login To Dashboard</h2>
                </div>
                <div>
                    <Input type="email" v-model="data.email" placeholder="Enter Email"  />
                </div>
                    <br>
                <div>
                    <Input type="password" v-model="data.password" placeholder="Enter Password"  />
                </div>
                <div class="login-footer">
                    <Button type="primary" @click="login" >{{isLogging ? 'Login' : 'Login'}}</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                email: '',
                password: ''
            },
            isLogging: false,
        }
    },
    methods: {
        async login(){
        	if(this.data.email.trim()=='') return this.e('Email is required')
			if(this.data.password.trim()=='') return this.e('Pasword is required')    
			if(this.data.password.length < 5) return this.e('Please Check Your Password') 
            this.isLogging = true   
            const res = await this.callApi('post','app/admin_login', this.data)
            if (res.status===200) {
                this.s(res.data.msg)
            }else{
                if (res.status===401) {
                    this.e(res.data.msg)
                }else{
                    this.swr()
                }
            }
            this.isLogging = true
        }
    },
}
</script>

<style lang="css" scoped>
    ._1adminOverveiw_table_recent{
        margin: 0 auto;
        margin-top: 220px;
    }
    .login-header{
        padding: 20px 0;
        text-align: center;
    }
    .login-footer{
        margin-top: 20px;
       text-align: center;
    }
</style>
