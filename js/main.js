document.getElementById('button1').addEventListener
('click', loadCSV);

let datas=[];

// Load CSV
function loadCSV(){
    fetch('단어장.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        const spe = /\n\r|\n/;
        const alldatas = data.split(spe);
        for (let i = 1 ; i < alldatas.length ; i++){
            let rows = alldatas[i].split(',');
            let col=[];
            for (let j = 0 ; j < rows.length ; j++){
                col.push(rows[j])
            }
            datas.push(col); 
        }
        console.log(datas)
    })
    .catch(function(error){
        console.log(error);
    })
}