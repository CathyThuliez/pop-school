function fibonacci()
{
  var number_1 = 0, number_2 = 1;

  for(var i = 0; i < 2500; i++)
  {
    var result = number_1 + number_2;

    console.log(result);

    number_1 = number_2;
    number_2 = result;
  }
}

fibonacci();
