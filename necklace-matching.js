/*
same_necklace("nicole", "icolen") => true
same_necklace("nicole", "lenico") => true
same_necklace("nicole", "coneli") => false
same_necklace("aabaaaaabaab", "aabaabaabaaa") => true
same_necklace("abc", "cba") => false
same_necklace("xxyyy", "xxxyy") => false
same_necklace("xyxxz", "xxyxz") => false
same_necklace("x", "x") => true
same_necklace("x", "xx") => false
same_necklace("x", "") => false
same_necklace("", "") => true
*/

function matchNecklace(Necklace, matchingNecklace) {
  copyNecklace = Necklace;
  for (index=0; index <= Necklace.length; index++) {
    if (copyNecklace === matchingNecklace) {
      return true
    }
    else {
      let extraChar = copyNecklace.slice(-1);
      copyNecklace.concat(extraChar);
    }
  }
  return false;
}
