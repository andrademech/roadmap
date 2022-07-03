var item = document.getElementById("lista-today");

function adicionarTarefa() {
    if (document.getElementById("add").value !== "") {
        var tarefa = document.createElement("li");
        const tarefasSalvas = [];
        tarefa.push(tarefasSalvas);
        console.log(tarefasSalvas);

        const tarefasJSON = JSON.stringify(tarefasSalvas);
        localStorage.setItem('tarefas', tarefasJSON);
        tarefa.innerHTML = document.getElementById("add").value;

        item.appendChild(tarefa);

    }
}