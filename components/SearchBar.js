app.component('searchbar', {
    template: 
    /*html*/
    `<div class="searchbar">
        <div class="search">
            <input v-model="text" placeholder="Ex : clefairy">
            <button @click="show = true">Show me my Pokemon</button>
            <button @click="show = false">Cancel search</button>
        </div>

        <div v-if="show">
            <div class="morepokemon">
                {{getJson()}}
                <div class="picture"><img :src="getpicture()"/></div>
                <div class="id"><b>ID :</b> {{getid()}}</div>
                <div class="name"><b>Name :</b> {{getName()}}</div>
                <div class="weigth"><b>Weight :</b> {{getWeight()}}</div>
                <div class="height"><b>Height :</b> {{getHeight()}}</div>
                <div class="baseexpe"><b>Base experience :</b> {{getBaseExperience()}}</div>
                <div class="ability"><b>Ability :</b> {{getAbility()}}</div>
                <div class="hp"><b>HP :</b> {{getHp()}}</div>
                <div class="attack"><b>Attack :</b> {{getAttack()}}</div>
                <div class="defense"><b>Defense :</b> {{getDefense()}}</div>
                <div class="speed"><b>Speed :</b> {{getSpeed()}}</div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            text: '',
            show: false,
            datajson: [],
        }
    },
    methods: {
        getJson(){
            P.getPokemonByName(this.text)
                .then(resp => {this.datajson = resp})
        },
        getpicture(){
            return this.datajson.sprites.front_default
        },
        getid(){
            return this.datajson.id
        },
        getName(){
            return this.datajson.name
        },
        getAbility(){
            return this.datajson.abilities[0].ability.name
        },
        getWeight(){
            return this.datajson.weight
        },
        getHeight(){
            return this.datajson.height
        },
        getBaseExperience(){
            return this.datajson.base_experience
        },
        getHp(){
            return this.datajson.stats[0].base_stat
        },
        getAttack(){
            return this.datajson.stats[1].base_stat
        },
        getDefense(){
            return this.datajson.stats[2].base_stat
        },
        getSpeed(){
            return this.datajson.stats[5].base_stat
        },

    }
})
