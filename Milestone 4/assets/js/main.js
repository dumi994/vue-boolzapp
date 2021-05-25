
const app = new Vue({
    el: "#root",
    data:{
		activeUser:0,
		nuovoMessaggio:'',
		cercaAmico:'',
		
		oraAttuale: function () {
            let d = new Date();
            let giorno = d.getDate();
            let mese = d.getMonth();
            let minuti = d.getMinutes();
            let anno = d.getFullYear();
            let ore = d.getHours();
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
		/** 
		 * funzione che costruisce la foto profilo
		 * 
		*/
        percorsoFoto(index){
            const contatto = this.contacts[index]; //contatto è ogni singolo contatto ciclato nell'array
            const percorso = this.image + contatto.avatar + ".jpg"; //prendel'immagine del array + l'avatar di ogni contatto + jpg e crea il percorso della foto
            console.log(percorso);
            return percorso;
        },
		changeActiveUser(index){
			this.activeUser = index;
		},

		/**
		 * funzione che aggiunge un messaggio e il bot risponde automaticamente dopo 3 secondi.
		 * a ogni oggetto dell'array (this.activeUser)nell'elemento messagges, nell'array contacts, aggiorna l'elemento data con l'ora attuale, l'elemento text con il this.nuovoMessaggio(input) e lo status sent */ 
		aggiungiMessaggio(){ 
            //Pusha nuovoMEssaggio in array messages
		
				this.contacts[this.activeUser].messages.push(
				{
					/* date: dayjs().fornat('DD/MM/YYYY HH:mm:ss'), */
				date: this.oraAttuale(),
				text: this.nuovoMessaggio,
				status: 'sent',
				
			},
		
			
			);
			this.nuovoMessaggio = ''; //impostiamo niente agli elementi di nuovoMessaggio 
			setTimeout(() => {
				
				this.contacts[this.activeUser].messages.push(
					{
				/* 	date: dayjs().fornat('DD/MM/YYYY HH:mm:ss'), */
					date: this.oraAttuale(),//funzione che ci da l'ora attuale
					text: 'Ancora te?',//risposta del bot
					status: 'received', //a seconda dello status va nel riquadro verde o bianco
					},
				)
			}, 3000); //tempo da attendere finché il bot risponda

        },
		/** 
		 * funzione che cerca i contatti nell'array
		 * */ 

		cercaContatto(){
				this.contacts.forEach(element => { 
					if (element.name.toLowerCase().includes(this.cercaAmico.toLowerCase())){
						element.visible = true;
						console.log(element);
					}else {
						element.visible = false;
					}
				});
		}
    },
	/**
	 *funzione che al rilascio di "enter" invia un messaggio  */ 
	mounted(){
		document.addEventListener('keydown', (e) =>{
            console.log(e.key);
            if(e.key === 'Enter'){
                this.aggiungiMessaggio(this.i)
            }
		})
	}
        
})


/* 
Ricerca utenti:scrivendo qualcosa nell’input a sinistra,vengono visualizzati solo 
icontatti il cui nome contiene le lettere inserite(es, Marco, Matteo Martina ->
Scrivo“mar” rimangono solo Marco e Martina
 */
