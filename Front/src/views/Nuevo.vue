<template>
  <div>
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Title</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              v-model="form.title"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Description</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="form.description"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Completed</label>
            <div class="col-sm-7">
              <select
                name="cars"
                id="cars"
                v-model="form.completed"
                class="form-control"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary mr-2" @click="guardar()">
            Save
          </button>
          <button type="button" class="btn btn-dark" @click="salir()">
            Exit
          </button>
        </div>
      </form>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Nuevo",
  data: function () {
    return {
      form: {
        title: "",
        description: "",
        completed: "",
      },
    };
  },
  components: {},
  methods: {
    async guardar() {
      const response = await axios.post("http://localhost:4000/api/Todos/", {
        ...this.form,
      });
      if (response.data) {
        this.salir();
      } else {
        this.makeToast("Error!", "Fail", "error");
      }
    },
    salir() {
      this.$router.push("/");
    },
    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
</style>