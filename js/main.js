var btn = document.getElementById("click");
var count = 0;

btn.onclick = function()
{
   count += 1;
   btn.innerHTML = "Número de click realizados: " + count;
};
