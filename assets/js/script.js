let tareas = []

document.body.onload = actualizar_lista

document.getElementById('agregar').onclick = () => {
    let nueva_tarea = document.getElementById('nueva_tarea').value
    let tarea = {
        id:Date.now(),
        tarea:nueva_tarea,
        done:false
    }
    tareas.push(tarea)
    actualizar_lista()
}

function contar_todos(){
    document.getElementById('total').innerText = tareas.length
}

function contar_completados(){
    let d = tareas.filter(obj => obj.done).length
    document.getElementById('done').innerText = d
}

function cambiar_estado(i){
    let id = tareas[i].id
    let check = document.getElementById(id).checked
    tareas[i].done = check
    contar_completados()
}

function borrar(i){
    tareas.splice(i,1)
    actualizar_lista()
}

function actualizar_lista(){
    const t = tareas
    let tabla = '<tr>'+
                '<th>ID</th>'+
                '<th>Tarea</th>'+
                '<th></th>'+
                '<th></th>'+
                '</tr>'
    for (let i = 0; i < t.length; i++) {
        let check = ''
        if (t[i].done){
            check = `checked='${t[i].done}'`
        }
        tabla += `<tr>`+
            `<td>${t[i].id}</td>`+
            `<td>${t[i].tarea}</td>`+
            `<td><input type="checkbox" id='${t[i].id}' onclick='cambiar_estado(${i})' ${check}`+
            `<td><b onclick='borrar(${i})'>❌</b></td>`+
            `</tr>`
    }
    document.getElementById('tareas').innerHTML = tabla
    contar_completados()
    contar_todos()
}