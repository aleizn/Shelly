let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐งจ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด๐งจ:* ${pesan}`
let teks = `*๐ท๏ธ๐พ ๐๐ง๐๐ค๐จ๐๐ง๐ ๐๐๐ก๐๐ฅ๐๐ ๐พ๐ท๏ธ*\n\nโ ${oi}\n\nโ *โโ๐ด๐๐ธ๐๐๐ด๐๐ฐ๐โโ:*\n`
for (let mem of participants) {
teks += `โ๏ธโฎ @${mem.id.split('@')[0]}\n`}
teks += `โ๐๐ก๐๐ฅ๐ฅ๐ฒ๐ฆ๐๐จ๐ญ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
