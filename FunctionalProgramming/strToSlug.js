// Only change code below this line
function urlSlug(title) {
  const arr = title.trim().split(/\W+/);
  return arr.map((el) => el.toLowerCase()).join("-");
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
