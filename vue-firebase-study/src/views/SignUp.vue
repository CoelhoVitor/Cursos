/* eslint-disable arrow-parens */
<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" placeholder="Email" /><br />
    <input type="password" placeholder="Password" /><br />
    <button>Sign Up</button>
    <p>
      or go back to
      <router-link to="/login">login</router-link>
      .
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Your account has been created !');
          },
          err => {
            alert(`Oops. ${err.message}`);
          }
        );
    },
  },
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
