<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Killer</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4" v-for="killer in killerData" :key="killer.name">
        <v-card>
          <v-row>
            <v-col sm="6">
              <v-card-title>{{killer.name}}</v-card-title>
              <v-card-subtitle>{{killer.description}}</v-card-subtitle>
            </v-col>
            <v-col sm="6">
              <v-img height="140" width="100" :src="killer.img"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn
            color="red"
            elevation="3"
            rounded
            x-large
            to="/"
        > Volver al Inicio </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
  import Trampero from "../assets/Trampero.png"
  import Enfermera from "../assets/Enfermera.png"
  import Hillbilly from "../assets/Hillbilly.png"
  import Cerda from "../assets/Cerda.png"
  import Pesadilla from "../assets/Pesadilla.png"
  import Doctor from "../assets/Doctor.png"
  export default{
    name: "Killer",
    data(){
      return{
        killerData:[
          {
            name: "Trampero",
            description: "Coloca trampas",
            img: Trampero
          },
          {
            name: "Enfermera",
            description: "Se teleporta",
            img: Enfermera
          },
          {
            name: "Hillbilly",
            description: "Usa su motocierra",
            img: Hillbilly
          },
          {
            name: "Pesadilla",
            description: "La pesadilla",
            img: Pesadilla
          },
          {
            name: "Doctor",
            description: "El doctor",
            img: Doctor
          },
          {
            name: "Cerda",
            description: "La cerda",
            img: Cerda
          }
        ]
      }
  }
  };
</script>