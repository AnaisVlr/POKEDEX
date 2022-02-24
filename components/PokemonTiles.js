app.component('pokemontiles', {
    template :
    /*Html*/
    `<div class="pokemontiles">
        <div v-for="(dj,index) in datajson ">
            <div class="pokemon">
                <div class="picture"><img :src="dj.sprites.front_default"/></div>
                <div class="id"><b>ID :</b> {{dj.id}}</div>
                <div class="name"><b>Name :</b> {{dj.name}}</div>
                <button @click="hover[index] = true">Show more</button>
                
                <div v-if="hover[index]">
                        <div class="weigth"><b>Weight :</b> {{dj.weight}}</div>
                        <div class="height"><b>Height :</b> {{dj.height}}</div>
                        <div class="baseexpe"><b>Base experience :</b> {{dj.base_experience}}</div>
                        <div class="ability"><b>Ability :</b> {{dj.abilities[0].ability.name}}</div>
                        <div class="hp"><b>HP :</b> {{dj.stats[0].base_stat}}</div>
                        <div class="attack"><b>Attack :</b> {{dj.stats[1].base_stat}}</div>
                        <div class="defense"><b>Defense :</b> {{dj.stats[2].base_stat}}</div>
                        <div class="speed"><b>Speed :</b> {{dj.stats[5].base_stat}}</div>
                        <button @click="hover[index] = false">Close</button>
                </div>
            </div>
        </div>
    </div>
     `,
    
    data(){
        return{
            datajson: [],
            hover: [],
            numberofpokemon: 50,
        }
    },
    methods: {
        getJson(numberofpokemon){
            for (let i = 0; i < numberofpokemon; i++) {
                P.getPokemonByName(Math.ceil((Math.random()*649)))
                .then(resp => {this.datajson.push(resp)})
            }
        },
        hoverNumber(numberofpokemon){
            for (let i = 0; i < numberofpokemon; i++) {
                this.hover.push(false)
            }
        }
    },
    created(){
        this.getJson(this.numberofpokemon)
        this.hoverNumber(this.numberofpokemon)
    }
})