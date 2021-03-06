
const app = new Vue({
    el: "#root",
    data:{
		activeUser:0,
		nuovoMessaggio:'',
		
		oraAttuale: function () {
            let d = new Date();
            let giorno = d.getDate();
            let mese = d.getMonth();
            let anno = d.getFullYear();
            let ore = d.getHours();
            let minuti = d.getMinutes();
			let secondi = d.getSeconds()
            let dataCompleta = `${giorno}/${mese}/${anno}  ${ore}:${minuti}:${secondi}`;
            return dataCompleta;
        }, 

        image:"../img/avatar",

        contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						text: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						text: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},

			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						text: 'La Marianna va in campagna',
						status: 'received'
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
		]
    },
    methods:{
	/* 	oraAttuale() {
			var d = new Date();
			var h = addZero(d.getHours());
			var m = addZero(d.getMinutes());
			var s = addZero(d.getSeconds());
			let dataComleta = `${d}, ${h}/${m}/${s}`
			return dataComleta;
		}, */
        percorsoFoto(index){
            const contatto = this.contacts[index];
            const percorso = this.image + contatto.avatar + ".jpg";
            console.log(percorso);
            return percorso;
        },
		
		changeActiveUser(index){
			this.activeUser = index;
		},
		aggiungiMessaggio(){ 
            //Pusha nuovoMEssaggio in array messages
		
				this.contacts[this.activeUser].messages.push(
				{
				date: this.oraAttuale(),
				text: this.nuovoMessaggio,
				status: 'sent',
				
			},
		
			
			);
			this.nuovoMessaggio = '';
			setTimeout(() => {
				
				this.contacts[this.activeUser].messages.push(
					{
					/* date: dayjs().fornat('DD/MM/YYYY HH:mm:ss'), */
					date: this.oraAttuale(),
					text: 'Ancora te?',
					status: 'received',
					},
				)
			}, 3000)
		
        },
    },
	mounted(){
		document.addEventListener('keydown', (e) =>{
            console.log(e.key);
            if(e.key === 'Enter'){
                this.aggiungiMessaggio(this.i)
            }
		})
	}
        
})

//milestone 3
/* Aggiunta di un messaggio: l???utente scrive un testo nella parte bassa e digitando ???enter??? il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall???interlocutore: ad ogni inserimento di un messaggio, l???utente ricever?? un ???ok??? come risposta, che apparir?? dopo 1 secondo. */