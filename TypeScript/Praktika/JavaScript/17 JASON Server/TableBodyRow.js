class TableBodyRow{
    constructor(fields){
        this.fields = fields;
        return this.render();
    }
    render(){
        console.log(this.fields);
        const row = document.createElement('tr');
        this.fields.forEach(field => {
            const td = document.createElement('td');
            
            if (field.includes('http')){
                const image = document.createElement('img');
                image.src = field;
                td.appendChild(image);
            } else {
                td.textContent = field;
            }
          
            row.appendChild(td);
        })
        return row;
    } 
}

export default TableBodyRow;