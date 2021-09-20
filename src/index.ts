import fastify from 'fastify';

const server = fastify()

server.get('/commits', async (request, reply) => {
  return ['11', '22', '33'];
})

const commits = []
// get commits every minute
setInterval(() => {

}, 1000 * 60)

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
