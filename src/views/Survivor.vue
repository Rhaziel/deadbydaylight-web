<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Survivor</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" v-for="survivor in survivorData" :key="survivor.name">
        <v-card>
          <div class="d-flex">
            <v-row  class="pa-3">
              <v-col sm="6">
                <v-row>
                  <v-col sm="12">
                    <v-card-title>{{survivor.name}}</v-card-title>
                  </v-col>
                  <v-col sm="4" v-for="perk in survivor.perks" :key="perk.name">
                    <v-avatar size="50">
                      <img :src="perk.name"/>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-col>
              <v-col sm="6">
                <v-img height="140" width="100" :src="survivor.img" class="mx-auto"></v-img>
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
  import Twide from "../assets/Twide.png"
  import Meg from "../assets/Meg.png"
  import Nea from "../assets/Nea.png"
  import Jake from "../assets/Jake.png"
  import Claudette from "../assets/Claudette.png"
  import Bill from "../assets/Bill.png"
  import Vinculo from "../assets/Vinculo.gif"
  import Demuestra from "../assets/Demuestra-lo-que-vales.gif"
  import Lider from "../assets/Lider.gif"
  import Rapido from "../assets/Rapido-y-silencioso.gif"
  import Impulso from "../assets/Impulso-de-carrera.gif"
  import Adrenalina from "../assets/Adrenalina.gif"
  import ConCalle from "../assets/Con-calle.gif"
  import Caida from "../assets/Caida-equilibrada.gif"
  import Evasion from "../assets/Evasion-urbana.gif"
  import Voluntad from "../assets/Voluntad-de-hierro.gif"
  import Espiritu from "../assets/Espiritu-calmado.gif"
  import Sabotear from "../assets/Sabotear.gif"
  import Empatia from "../assets/Empatia.gif"
  import Autocuracion from "../assets/Autocuración.gif"
  import Conocimientos from "../assets/Conocimientos-de-botanica.gif"
  import Dejado from "../assets/Dejado-atras.gif"
  import Tiempo from "../assets/Tiempo-prestado.gif"
  import Irrompible from "../assets/Irrompible.gif"
  export default{
    name: "Survivor",
    data(){
      return{
        survivorData: [
          {
          name: 'Twide',
          description:'Miedoso',
          img: Twide,
          perks:[
            {name: Vinculo},
            {name: Demuestra},
            {name: Lider}
          ]
        },
          {
          name: 'Meg',
          description:'Corredora nata',
          img: Meg,
          perks:[{
            name: Rapido},
            {name: Impulso},
            {name: Adrenalina
          }]
        },
          {
          name: 'Nea',
          description:'Urbaneando',
          img: Nea,
          perks:[{
            name: Caida},
            {name: Evasion},
            {name: ConCalle
          }]
        },
          {
          name: 'Jake',
          description:'Silencioso',
          img: Jake,
          perks:[{
            name: Voluntad},
            {name: Espiritu},
            {name: Sabotear
          }]
        },
          {
          name: 'Claudette',
          description: 'Sanadora',
          img: Claudette,
          perks:[{
            name: Empatia},
            {name: Conocimientos},
            {name: Autocuracion
          }]
        },
          {
          name: 'Bill',
          description: 'Veterano de guerra',
          img: Bill,
          perks:[{
            name: Dejado},
            {name: Tiempo},
            {name: Irrompible
          }]
        }
        ]
      }
    }

  };
</script>