<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-5 offset-md-3 col-sx-12'>
          <h1 class='text sx center'>Sign Up</h1>
          <p class='text sx center'>
            <router-link :to="{name: 'login'}">Have an account?</router-link>
          </p>
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input type='text' class='form-control form-control-lg' placeholder='Username' v-model='username' />
            </fieldset>

            <fieldset class='form-group'>
              <input type='email' class='form-control form-control-lg' placeholder='Email' v-model='email' />
            </fieldset>

            <fieldset class='form-group'>
              <input type='password' class='form-control form-control-lg' placeholder='Password' v-model='password' />
            </fieldset>

            <button class='btn btn-lg btn-primary pull-xs-right' :disabled='isSubmitting'>Sign Up</button>
          </form>
          <validation-errors v-if='validationErrors' :validation-errors='validationErrors' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors';
import { mapState } from 'vuex';

export default {
  name: 'RegisterView',
  components: {
    ValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
      username: '',
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors,
    })
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      this.$store.dispatch('register', user).then(user => {
        if (user) this.$router.push({name: 'globalFeed'});
      });
    }
  }
};
</script>
