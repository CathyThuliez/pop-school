69 lines (56 sloc) 1.6 KB
var default_months = 5;
var min_months = 1;
var max_months = 20;

function set_default_months()
{
  set_months(default_months);
}

function set_months(nb_months)
{
  if(check_months(nb_months))
    document.getElementById('nb_months').innerHTML = nb_months;
}

function check_months(nb_months)
{
  return (nb_months >= min_months && nb_months <= max_months) ? true : false;
}

function update_months(add)
{
  set_months(parseInt(document.getElementById('nb_months').innerHTML) + ((add) ? 1 : -1));
}

function unleash_rabbits(nb_months)
{
  var nb_months = parseInt(document.getElementById('nb_months').innerHTML);

  if(check_months(nb_months))
  {
    var rabbits = document.querySelector('.rabbits');
    rabbits.innerHTML = "";

    var nb_1 = 0, nb_2 = 1;

    for(var i = 0; i < nb_months; i++)
    {
      var caption = document.createElement("div");
      caption.classList.add("caption");
      caption.innerHTML = "Month #" + (i + 1);
      rabbits.appendChild(caption);

      var result = nb_1 + nb_2;
      nb_1 = nb_2;
      nb_2 = result;

      for(var j = 0; j < result; j++)
      {
        var couple = document.createElement("div");
        couple.classList.add("couple");
        var rabbit_1 = document.createElement("div");
        rabbit_1.classList.add("rabbit");
        rabbit_1.classList.add("look_right");
        var rabbit_2 = document.createElement("div");
        rabbit_2.classList.add("rabbit");

        couple.appendChild(rabbit_1);
        couple.appendChild(rabbit_2);
        rabbits.appendChild(couple);
      }
    }
    console.log(rabbits);
  }
  else alert("Nope.")
}

set_default_months();
