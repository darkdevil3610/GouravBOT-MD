let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *WEBSITE* ${htka}
• Info update
• Info promo
• Info bot
• Follow me on Instagram
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Website', url: 'https://cutt.ly/mKSJt3s'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['website']
handler.tags = ['info']
handler.command = /^website$/i

export default handler