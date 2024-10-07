const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const peliculapequeña = []
const peliculamediana = []
const peliculagrande = []

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i]
  if (movie.durationInMinutes <= 100) {
    peliculapequeña.push(movies[i])
  }
  if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    peliculamediana.push(movies[i])
  }
  if (movie.durationInMinutes > 200) {
    peliculagrande.push(movies[i])
  }
}
console.log('las peliculas pequeñas son: ', peliculapequeña)
console.log('las peliculas medianas son: ', peliculamediana)
console.log('las peliculas grandes son: ', peliculagrande)
