<template>
  <div>
    <Header />
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
          <button type="button" class="btn btn-primary" v-on:click="editar()">
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger mx-2"
            v-on:click="eliminar()"
          >
            Delete
          </button>
          <button type="button" class="btn btn-dark" v-on:click="salir()">
            Exit
          </button>
        </div>
      </form>
    </div>
    <!-- <Footer />   -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Editar",
  components: {},
  data: function () {
    return {
      form: {
        id: "",
        title: "",
        description: "",
        completed: "",
      },
    };
  },
  methods: {
    async editar() {
      if (this.form.id) {
        const response = await axios.put(
          `http://localhost:4000/api/Todos/${this.form.id}`,
          {
            ...this.form,
          }
        );
        if (response.data) this.salir();
      }
    },
    salir() {
      this.$router.push("/");
    },
    async eliminar() {
      if (this.form.id) {
        await axios.delete(`http://localhost:4000/api/Todos/${this.form.id}`);
        this.$router.push("/");
      }
    },
  },
  mounted: async function () {
    this.form.id = this.$route.params.id;
    const response = await axios.get(
      `http://localhost:4000/api/Todos/${this.form.id}`
    );
    this.form = response.data;
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
</style>