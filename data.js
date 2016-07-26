module.exports = {
  home: {
    tvs: 15,
    couches: 19,
    animals: [
      {animal:'duck'},
      {animal:'wombat'},
      {animal:'dog'},
      {animal:'weta'},
      {animal:'aardvark'},
      {animal:'unicorn'}
    ],
    cutlery: [
      {utensil: 'spoon'},
      {utensil: 'fork'},
      {utensil: 'knife'},
      {utensil: 'teaspoon'},
      {utensil: 'chopsticks'}
    ],
    spitOutMessage: spitOutMessage
  }
}

function spitOutMessage (err, message) {
  if (!err) {
    return message
  } else {
    console.error(err)
  }
}
