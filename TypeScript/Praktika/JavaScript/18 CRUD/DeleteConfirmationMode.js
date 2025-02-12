class DeleteConfirmationMode{
    constructor(id, card){
        this.id = id;
        this.card = card;
        return this.render()
    }
    render(){
        const dialog = document.createElement('dialog');

        const par = document.createElement('p');
        par.textContent = `Ar tikrai norite ištrinti šitą restoraną?`

        const yesButton = document.createElement('button');
        yesButton.textContent = `Taip`;
        yesButton.addEventListener('click', () => {
            dialog.remove();
            this.card.remove();
            fetch(`http://localhost:3000/restaurants/${this.id}`, {
                method: "DELETE"
              });
        });

        const noButton = document.createElement('button');
        noButton.textContent = `Ne`;
        noButton.addEventListener('click', () => {
            dialog.remove();
        });

        dialog.append(par, yesButton, noButton)
    }
}

export default DeleteConfirmationMode;