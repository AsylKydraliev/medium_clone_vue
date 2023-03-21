<template>
  <nav class='navbar navbar-light'>
    <div class='container'>
      <router-link class='navbar-brand' :to="{name: 'globalFeed'}">
        MediumClone
      </router-link>

      <ul class='nav navbar-nav pull-xs-right'>
        <li class='nav-item'>
          <router-link
            class='nav-link'
            :to="{name: 'globalFeed'}"
            active-class='active'
            exact
          >
            Home
          </router-link>
        </li>
        <template v-if='isLoggedIn'>
          <li class='nav-item'>
            <router-link
              class='nav-link'
              :to="{name: 'globalFeed'}"
              active-class='active'
            >
              <i class='ion-compose'></i> &nbsp;
              New article
            </router-link>
          </li>

          <li class='nav-item'>
            <router-link
              class='nav-link'
              :to="{name: 'globalFeed'}"
              active-class='active'
            >
              <i class='ion-gear-a'></i> &nbsp;
              Settings
            </router-link>
          </li>

          <li class='nav-item'>
            <router-link
              class='nav-link'
              :to="{name: 'globalFeed'}"
            >
              <img class='user-pic' :src='currentUser.image' alt='user' />&nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>

        <template v-if='isAnonymous'>
          <li class='nav-item'>
            <router-link
              class='nav-link'
              :to="{name: 'login'}"
              active-class='active'
            >
              Sign In
            </router-link>
          </li>

          <li class='nav-item'>
            <router-link
              class='nav-link'
              :to="{name: 'register'}"
              active-class='active'
            >
              Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ToolbarComponent',
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      isAnonymous: 'isAnonymous',
      currentUser: 'currentUser',
    }),
  },
};
</script>
