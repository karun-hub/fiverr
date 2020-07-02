function buttonstyle(x)
{
    document.getElementById("screen").value+=x
}
function erasing()
{
    document.getElementById("screen").value=""
}
function buttonequal()
{
    var y=document.getElementById("screen").value
     var result=eval(y)
     document.getElementById("screen").value=result
}
