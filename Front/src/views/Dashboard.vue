<template>
  <div>
    <div class="container izquierda">
      <button class="btn btn-primary" v-on:click="nuevo()">New Todo</button>
      <br /><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="Todos in Todoslist"
            :key="Todos.id"
            v-on:click="editar(Todos.id)"
          >
            <th scope="row">{{ Todos.id }}</th>
            <td>{{ Todos.title }}</td>
            <td>{{ Todos.description }}</td>
            <td>{{ Todos.completed == "true" ? "Yes" : "No" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      Todoslist: null,
    };
  },
  components: {},
  methods: {
    editar(id) {
      this.$router.push("/editar/" + id);
    },
    nuevo() {
      this.$router.push("/nuevo");
    },
  },
  mounted: function () {
    let direccion = "http://127.0.0.1:4000/api/Todos";
    axios.get(direccion).then((data) => {
      this.Todoslist = data.data;
    });
  },
};
</script>
<style  scoped>
.izquierda {
  text-align: left;
}
</style>