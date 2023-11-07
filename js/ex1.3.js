const node_for_click_all = document.getElementById("for_click_all")

function edit_all(){

    document.getElementsByTagName('input')[3].value='Ivanov'
    document.getElementsByTagName('input')[4].value='Ivan'
    document.getElementsByTagName('input')[6].value='2023-09-20'
}
node_for_click_all.addEventListener("click",edit_all)

function default_all(){
    document.getElementsByTagName('input')[3].value=document.getElementsByTagName('input')[3].defaultValue
    document.getElementsByTagName('input')[4].value=document.getElementsByTagName('input')[4].defaultValue
    document.getElementsByTagName('input')[6].value=document.getElementsByTagName('input')[6].defaultValue
}
node_for_click_all.addEventListener("click",default_all)