<template>
  <div>
    <h2>聯絡我們</h2>
    <form @submit.prevent="submit">
      <div>
        <label>姓名 <input v-model="form.name" required /></label>
      </div>
      <div>
        <label>Email <input type="email" v-model="form.email" required /></label>
      </div>
      <div>
        <label>訊息 <textarea v-model="form.message" required /></label>
      </div>
      <button type="submit">送出</button>
      <p v-if="sent" style="color:green">已送出，我們會盡快回覆。</p>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const form = reactive({ name:'', email:'', message:'' });
const sent = ref(false);
function submit(){
  sent.value = true;
  setTimeout(()=>{ sent.value=false; form.name=''; form.email=''; form.message=''; }, 3000);
}
</script>
