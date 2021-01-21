<template>
  <div class="mesgs">
    <div class="msg_history">
      <div class="incoming_msg">
        <div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>Test which is a new approach to have all
              solutions</p>
            <span class="time_date"> 11:01 AM    |    June 9</span></div>
        </div>
      </div>
      <div class="outgoing_msg">
        <div class="sent_msg">
          <p>Test which is a new approach to have all
            solutions</p>
          <span class="time_date"> 11:01 AM    |    June 9</span></div>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="type_msg">
      <div class="input_msg_write">
        <input type="text" v-model="message" class="write_msg" placeholder="message...."/>
        <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Messaging",
  data: () => ({
    message: '',
    fromToMessage: {
      from_id: null,
      to_id: null,
      message: '',
      date: ''
    }
  }),
  methods: {
    handleSubmit() {
      // this.message
    },
    sendMessage() {
      let messages = []
      messages = [...messages, this.fromToMessage]
      localStorage.setItem('messages', messages)
    }
  },
  mounted() {
    setTimeout(() => console.log(this.$store.getters.getCommentsList), 300)
  }
}
</script>

<style scoped>

</style>
