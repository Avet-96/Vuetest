<template>
  <div class="inbox_people">
    <div class="headind_srch">
      <div class="recent_heading">
        <h4>Recent</h4>
      </div>
      <div class="srch_bar">
        <div class="stylish-input-group">
          <input type="text" class="search-bar" placeholder="Search">
        </div>
      </div>
    </div>
    <div class="inbox_chat scroll">
      <div class="chat_list" v-for="list in usersData">
        <div class="chat_people">
          <div class="chat_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></div>
          <div class="chat_ib">
            <h5>{{ list.name }} </h5>
            <p>Test, which is a new approach to have all solutions
              astrology under one roof.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InboxPeople",
  data: () => ({
    usersData: [],
  }),
  methods: {},
  mounted() {
    setTimeout(() => this.usersData = this.$store.getters.getUserData, 300)
  }
}
</script>

<style scoped>

</style>
