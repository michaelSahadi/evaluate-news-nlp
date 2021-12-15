function checkForURL(inputText) {
  console.log("::: Running checkForURL :::", inputText);
  const exp = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  const regex = new RegExp(exp)

  return !!inputText.match(regex)
}

export { checkForURL }