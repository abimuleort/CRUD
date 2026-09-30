const sortBy = (c) => [...c.children]
  .sort((a, b) => b.dataset.votos - a.dataset.votos)
  .forEach(n => c.append(n))

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('topicsList')
  if (!list) return

  list.addEventListener('submit', async (e) => {
    const form = e.target
    if (!form.matches('.vote-form')) return
    e.preventDefault()

    try {
      const res = await fetch(form.action, { method: 'POST' })
      const { votos } = await res.json()
      if (votos == null) return

      form.querySelector('button').textContent = `👍 ${votos}`
      const item = form.closest('li')
      item.dataset.votos = votos
      sortBy(item.parentElement)
    } catch (err) {
      console.error(err)
    }
  })
})