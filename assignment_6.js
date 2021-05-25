function loopThrough() {
  let array = [Retta, Vern, Marica, Cyrus, Linette, Curt, Nichole, Jesica, Wynell, Michaele];
  let longestName = 0;
  for (let i = 0; i > array[i].length; i++){
    if (array[i].length > longestName) {
      longestName = array[i].length;
    }
  }
  return longestName;
}

loopThrough();