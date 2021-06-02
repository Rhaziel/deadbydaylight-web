<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Killer</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" v-for="killer in killerData" :key="killer.name">
        <v-card>
          <div class="d-flex">
            <v-row class="pa-3">
              <v-col sm="6">
                <v-row>
                  <v-col sm="12">
                    <v-card-title>{{killer.name}}</v-card-title>
                  </v-col>
                  <v-col sm="4" v-for="perk in killer.perks" :key="perk.name">
                    <v-avatar size="50">
                      <img :src="perk.name"/>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-col>
              <v-col sm="6">
                <v-img height="140" width="100" :src="killer.img"></v-img>
              </v-col>
            </v-row>
          </div>
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
  import PresenciaPerturbadora from "../assets/Presencia-perturbadora.gif"
  import Fuerza from "../assets/Fuerza-brutal.gif"
  import Agitacion from "../assets/Agitacion.gif"
  import Estridor from "../assets/Estridor.gif"
  import Tanatofobia from "../assets/Tanatofobia.gif"
  import Vocacion from "../assets/Vocacion-de-enfermera.gif"
  import Resistente from "../assets/Resistente.gif"
  import Hijodelaluz from "../assets/Hijo-de-la-luz.gif"
  import Reparador from "../assets/Reparador.gif"
  import Enfurecimiento from "../assets/Enfurecido.gif"
  import Recuerdame from "../assets/Recuerdame.gif"
  import Guardian from "../assets/Guardian-de-sangre.gif"
  import PresenciaAbrumadora from "../assets/Presencia-abrumadora.gif"
  import Monitorizacion from "../assets/Monitorizacion-y-abuso.gif"
  import Sobrecarga from "../assets/Sobrecarga.gif"
  import Truco from "../assets/Truco-del-verdugo.gif"
  import Supervision from "../assets/Supervision.gif"
  import Tomaunadecision from "../assets/Toma-una-decision.gif"
  export default{
    name: "Killer",
    data(){
      return{
        killerData:[
          {
            name: "Trampero",
            description: "Coloca trampas",
            img: Trampero,
            perks:[
              {
                name: PresenciaPerturbadora
              },{
                name: Fuerza
              },{
                name: Agitacion
              }
            ]
          },
          {
            name: "Enfermera",
            description: "Se teleporta",
            img: Enfermera,
            perks:[
              {
                name: Estridor
              },{
                name: Tanatofobia
              },{
                name: Vocacion
              }
            ]
          },
          {
            name: "Hillbilly",
            description: "Usa su motocierra",
            img: Hillbilly,
            perks:[
              {
                name: Resistente
              },{
                name: Hijodelaluz
              },{
                name: Reparador
              }
            ]
          },
          {
            name: "Pesadilla",
            description: "La pesadilla",
            img: Pesadilla,
            perks:[
              {
                name: Enfurecimiento
              },{
                name: Recuerdame
              },{
                name: Guardian
              }
            ]
          },
          {
            name: "Doctor",
            description: "El doctor",
            img: Doctor,
            perks:[
              {
                name: PresenciaAbrumadora
              },{
                name: Monitorizacion
              },{
                name: Sobrecarga
              }
            ]
          },
          {
            name: "Cerda",
            description: "La cerda",
            img: Cerda,
            perks:[
              {
                name: Truco
              },{
                name: Supervision
              },{
                name: Tomaunadecision
              }
            ]
          }
        ]
      }
  }
  };
</script>