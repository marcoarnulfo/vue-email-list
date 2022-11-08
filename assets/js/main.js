console.log('hello')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            mails : []
        }
    },
    mounted(){
        for (let index = 0; index < 10; index++) {
            //console.log("funziono");
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(element => {
                //console.log(element);
                //console.log(element.data);
                //console.log(element.data.response);
                this.mails.push(element.data.response)
                console.log(this.mails);
            })
        }
    }
}).mount('#app')


/*

Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/