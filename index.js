let countEl=document.getElementById("count-el")
countEl.innerText=0
let count=0
let entriesEl=document.getElementById("entries-el")
function increment(){
    count++
    countEl.innerText=count 
}
function save()
{
    entriesEl.innerText+=" "+count+" -"
    count=0
    countEl.innerText=count
    
}
function newEntry()
{
    count=0
    countEl.innerText=count
    entriesEl.innerText="Previous entries :"

}