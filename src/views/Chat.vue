<template>
  <div class="messaging">
    <div class="inbox_msg">
      <InboxPeople/>
      <Messaging/>
    </div>
  </div>
</template>

<script>
import InboxPeople from "@/views/InboxPeople";
import Messaging from "@/views/Messaging";

export default {
  name: "Chat",
  components: {Messaging, InboxPeople},

}
</script>

<style scoped>

</style>
