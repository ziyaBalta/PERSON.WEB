<template>
  <div class="mt-6">
    <!-- <div class="flex justify-end">
      <button class="btn btn-primary btn-rounded mr-6" @click="buttonModalPreview = true">
        
        Yeni Kullanıcı
      </button>
    </div> -->
    <div class="mt-2 text-right"></div>
    <div class="intro-y box mt-5">
      <div class="p-5">
        <div>
          <div class="overflow-x-auto">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="text-black">Sokak</th>
                  <th class="text-black">ilçe</th>
                  <th class="text-black">il</th>
                  <th class="text-black">Address</th>
                  <th class="text-black">Telefon</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="ContactInformation in contactInformation"
                  :key="ContactInformation.Id"
                >
                  <td>{{ ContactInformation.street }}</td>
                  <td>{{ ContactInformation.district }}</td>
                  <td>{{ ContactInformation.province }}</td>
                  <td>{{ ContactInformation.address }}</td>
                  <td>{{ ContactInformation.phone }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Modal
      :show="buttonModalPreview"
      @hidden="buttonModalPreview = false"
      backdrop="static"
    >
      <a
        @click="buttonModalPreview = false"
        class="absolute right-0 top-0 mt-3 mr-3"
        href="javascript:;"
      >
        <XIcon class="w-8 h-8 text-slate-400" />
      </a>
      <ModalBody class="p-4">
        <form @submit.prevent="saveUser">
          <div class="mt-2">
            <label class="form-label font-bold">TCNo</label>
            <input
              type="text"
              class="form-control form-control-rounded"
              v-model="newUser.data.TCNo"
            />
          </div>
          <div class="mt-2">
            <label class="form-label font-bold">Name</label>
            <input
              type="text"
              class="form-control form-control-rounded"
              v-model="newUser.data.Name"
            />
          </div>
          <div class="mt-2">
            <label class="form-label font-bold">Surname</label>
            <input
              type="text"
              class="form-control form-control-rounded"
              v-model="newUser.data.Surname"
            />
          </div>

          <div class="text-center mt-4 mb-4">
            <button class="btn btn-primary w-24 mr-4" type="submit">Kaydet</button>

            <button
              type="button"
              @click="buttonModalPreview = false"
              class="btn btn-secondary w-24"
            >
              Vazgeç
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import ServiceClient from "../../utils/ServiceClient";

onMounted(() => {
  debugger;
  ServiceClient.contact.contact().then((result) => {
    contactInformation.value = result.data;
    debugger;
  });
});

const contactInformation = ref([]);

const buttonModalPreview = ref(false);

const newUser = reactive({
  data: {
    Id: 0,
    Street: "",
    District: "",
    Province: "",
    Address: "",
    Phone: "",
  },
});

const saveUser = () => {
  {
    buttonModalPreview.value = false;
  }

  ServiceClient.personn.personadd(newUser.data).then((response) => {
    if (response.status == 200) {
    }
  });
};
</script>
