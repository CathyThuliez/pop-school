function fibonacci()
{
  var nb_1 = 0, nb_2 = 1;

  for(var i = 0; i < 2500; i++)
  {
    var result = nb_1 + nb_2;

    console.log(result);

    nb_1 = nb_2;
    nb_2 = result;
  }
}

fibonacci();
