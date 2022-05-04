const app = new Vue({
    el:'#app',
    data: {
        contacts: [
            {
                id:1,
                name: 'Michele',
                avatar: '_1',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                id:2,
                name: 'Fabio',
                avatar: '_2',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        display: false,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                id:3,
                name: 'Sammuele',
                avatar: '_3',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        display: false,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                id:4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
            {
                id:5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    },
                ],
            },
            {
                id:6,
                name: 'Claudia',
                avatar: '_6',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    },
                ],
            },
            {
                id:7,
                name: 'Federico',
                avatar: '_7',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Fa gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    },
                ],
            },
            {
                id:8,
                name: 'Davide',
                avatar: '_8',
                visible: 'true',
                messages: [
                    {
                        display: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi! ',
                        status: 'sent'
                    },
                    {
                        display: false,
                        date: '10/01/2020 15:51:00',
                        message: 'Ok!!',
                        status: 'received'
                    },
                ],
            },
        ],
        currentIndex : 0,
        searchText: '',
    },
    methods:{
        selectChat(id){
            const index = this.contacts.findIndex((contact)=> {
                return contact.id === id;
                
            })
            this.currentIndex = index;
        },
        inviaMessaggio(){
            if(this.message === '' || this.message === ' ') return
            const newMessagge = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.message,
                        status: 'sent'
            }

            /*const lastIndex = this.contacts[this.currentIndex].messages.length - 1;
            const lastMessage = this.contacts[this.currentIndex].messages[lastIndex];*/


            this.contacts[this.currentIndex].messages.push(newMessagge);
            this.message = '';
            const rispostaMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: 'ok',
                status: 'received'
            }
            setTimeout(()=> {
                this.contacts[this.currentIndex].messages.push(rispostaMessage);
            }, 2000)

        },
        // showMenu: function(activeContactIndex, i){
        //     if (this.contacts[activeContactIndex].messages[i].display === false) {
        //         this.contacts[activeContactIndex].messages.forEach((messaggio)=>{
        //             messaggio.display = false
        //         })
        //     } 
        //     this.contacts[activeContactIndex].messages[i].display = !this.contacts[activeContactIndex].messages[i].display
        // },

        dropDownMenu(currentIndex, index){
            if(this.contacts[currentIndex].messagges.length > 0){
                this.contacts[currentIndex].messagges.splice(index, 1)
            }
            else {
                return
            }
        }
    },
    computed: {
        contattiFiltrati(){
            return this.contacts.filter((contact)=> {
                if(contact.name.toLowerCase().includes(this.searchText.toLowerCase())){
                    return true
                }
                else {
                    return false
                }
                
            })
        }
    }
})

