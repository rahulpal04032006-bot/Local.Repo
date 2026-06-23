function generateTable()
{
    let num = document.getElementById("num").ariaValueMax;
    let output = "";
    for(let i=0;i<=10;i++)
    {
        output += num + "*" + i + "=" +(num*i)+"<br>";
    }
    document.getElementById("result").innerHTML = output;
}