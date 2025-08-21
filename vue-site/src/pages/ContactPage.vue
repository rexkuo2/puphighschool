<template>
  <div class="container" style="max-width:640px;">
    <h2 class="h4 mb-4">聯絡我們</h2>
    <form @submit.prevent="submit" class="needs-validation" novalidate>
      <div class="mb-3">
        <label class="form-label">姓名</label>
        <input v-model="form.name" required class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="form.email" required class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">訊息</label>
        <textarea v-model="form.message" required rows="4" class="form-control"></textarea>
      </div>
      <div class="d-flex align-items-center gap-3">
        <button type="submit" class="btn btn-primary px-4">送出</button>
        <div v-if="sent" class="text-success small">已送出，我們會盡快回覆。</div>
      </div>
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
