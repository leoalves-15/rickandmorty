// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import { createProvider } from './vue-apollo'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   apolloProvider: createProvider(),
//   render: h => h(App)
// }).$mount('#app')

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '<https://rickandmortyapi.com/graphql>',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app');
