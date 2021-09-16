const w = 5000
const N = 20
const d = w / N

// Color Scheme (light, dark)
const colorSchemes = []
// Blue
colorSchemes[0] = ["#0fb4e1", "#07a0dc"]
// Red
colorSchemes[1] = ["#f54341", "#c81211"]
// Gold
colorSchemes[2] = ["#f0d588", "#e9cb82"]

function setup() {
  createCanvas(w, w, SVG)
  noStroke()
  rectMode(CENTER)

  colorScheme = random(colorSchemes)
  // colorScheme = colorSchemes[2]
}

function draw() {
  background(colorScheme[0])
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const pos = [d * (i + 0.5), d * (j + 0.5)]
      push()
      translate(...pos)
      rotate(PI / 4)
      fill(colorScheme[1])
      rect(0, 0, d / sqrt(2))

      fill(colorScheme[0])
      rect(0, 0, d / sqrt(2) / 2)
      pop()
    }
  }
  // save("kuginuki_03.svg");
  // print("saved svg");
  // noLoop();
}