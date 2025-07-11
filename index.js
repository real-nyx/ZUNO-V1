/*
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	if (message.body === '.ping') {
		// reply back "pong" directly to the message
		message.reply('pong');
	}
});

client.initialize();
*/
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ✅ Your WhatsApp number (replace with yours, no +, ends with @c.us)
const OWNER_NUMBER = '2349012345678@c.us';  // Update with your actual number

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: 'main-bot-session'
    })
});

client.on('qr', qr => {
    console.log('📱 Scan the QR code below:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('✅ Bot is ready and authenticated!');

    // ✅ Send a message to the owner's DM
    try {
        await client.sendMessage(OWNER_NUMBER, '🤖 Bot is now connected and ready!');
        console.log('📩 Sent connection message to owner.');
    } catch (err) {
        console.error('❌ Failed to send DM to owner:', err.message);
    }
});
const owner = 'BLUEY'
const menu = `
╭━〔 ZUNO V1 〕━⬣
┃
┃ ✦ ʜᴇʟʟᴏ, メ×͜× 𝙱𝚕𝚞𝚎𝚢😇🥋ᴬˡᵖʰᵃ
┃ ✦ 🕐 ʀᴜɴᴛɪᴍᴇ: 42 minutes, 33 seconds
┃ ✦ 🏖 sᴛᴀᴛᴜs : active 
┃ ✦ 🕳 prefix : [.]
┃ ✦ 👑 ᴏᴡɴᴇʀ: ${owner}
┃ ✦ 🧩 ᴠᴇʀꜱɪᴏɴ: BETA
┃
┃┌─〔 *Status Menu* 〕
┃│ ❦ .ping
┃│ ❦ .alive
┃│ ❦ .uptime
┃└─────────
┃┌─〔 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕
┃│ ❦ .chat
┃└─────────
┃
┃┃┌─〔 Group Mᴇɴᴜ 〕
┃│ ❦ .tagall
┃│ ❦ .hidetag
┃│ ❦ .kick
┃│ ❦ .add
┃└─────────
┃
┃┌─〔 Fun ᴍᴇɴᴜ 〕
┃│ ❦ .chat
└─────────

`;
/*
const signature = `
*….oooO…………..*
*…..(….)…Oooo…*
*……)../…..(….)….*
*…..(_/…….)../…..*
*….…………(_/…….*
*… I WAS …………*
*………. HERE ……*
`;*/

const image = MessageMedia.fromFilePath("botImg.jpg");
const zuno = MessageMedia.fromFilePath("zuno.jpg");
const audio = MessageMedia.fromFilePath("dax.mp3");
// owner picture
const ownerImg = MessageMedia.fromFilePath("owner.jpg");
//create alive message
const aliveImg = MessageMedia.fromFilePath('alive.jpg');
const zuno_response = `
*Hiya! I'm Zuno — your cheerful little helper 🙂‍↔*
*thought i heard my name 🌚*
*Let’s make today awesome together! 😋🤭*
`;
const ownerMessage = `
𝐌𝐲 𝐨𝐰𝐧𝐞𝐫? 𝐈'𝐝 𝐛𝐫𝐚𝐠, 𝐛𝐮𝐭 𝐭𝐡𝐞𝐲 𝐭𝐨𝐥𝐝 𝐦𝐞 𝐭𝐨 𝐬𝐭𝐚𝐲 𝐡𝐮𝐦𝐛𝐥𝐞 😌
𝐙𝐮𝐧𝐨 𝐰𝐚𝐬 𝐡𝐚𝐧𝐝𝐜𝐫𝐚𝐟𝐭𝐞𝐝 𝐛𝐲 𝐚 𝐠𝐞𝐧𝐢𝐮𝐬 𝐰𝐡𝐨 𝐭𝐚𝐥𝐤'𝐬 𝐭𝐨 𝐜𝐨𝐦𝐩𝐮𝐭𝐞𝐫𝐬 𝐚𝐧𝐝 𝐭𝐡𝐞𝐲 𝐥𝐢𝐬𝐭𝐞𝐧 🤫💀
𝐈'𝐦 𝐣𝐮𝐬𝐭 𝐭𝐡𝐞 𝐜𝐮𝐭𝐞 𝐜𝐡𝐚𝐭𝐛𝐨𝐭🙋... 𝙱𝙻𝚄𝙴𝚈🥋 𝐢𝐬 𝐭𝐡𝐞 𝐦𝐚𝐬𝐭𝐞𝐫𝐦𝐢𝐧𝐝 𝐩𝐮𝐥𝐥𝐢𝐧𝐠 𝐭𝐡𝐞 𝐬𝐭𝐫𝐢𝐧𝐠𝐬 🎭🤓
`;
const aliveMessage = `
Zuno is upppp and running 🥳
If I ever get dead😹,𝙱𝙻𝚄𝙴𝚈🥋 would fix me🤭
`;
//time update
const startTime = Date.now();
client.on('message', async (message) => {
    const text = message.body.toLowerCase();
    const isGroup = message.from.endsWith('@g.us');
    const chat = isGroup ? await message.getChat() : null;
    const sender = await message.getContact();
    const botId = client.info.wid._serialized;

    switch (true) {
        case text === 'zuno':
            await message.reply(zuno, undefined, {
                caption: zuno_response
            });
            break;

        case text === '.menu':
            await message.reply(image, undefined, {
                caption: menu
            });
            await client.sendMessage(message.from, audio);
            break;

        case text === '.ping':
            const uptime = ((Date.now() - startTime) / 1000).toFixed(2);
            await message.reply(` *Pong 🏓*\n *Uptime: ${uptime}s*`);
            break;

        case text === 'alive':
            await message.reply(aliveImg, undefined, {
                caption: aliveMessage
            });
            break;

        case text.startsWith('tag all'):
        case text.startsWith('.tagall'):
            if (isGroup) {
                let mentions = [];
                const commandLength = text.startsWith('.tagall') ? 8 : 7;
                const customMessage = message.body.slice(commandLength).trim() || '👥 *Tagging everyone in the group:*';
                let messageText = `${customMessage}\n\n`;

                for (let participant of chat.participants) {
                    const contact = await client.getContactById(participant.id._serialized);
                    mentions.push(contact);
                    messageText += `@${participant.id.user}\n`;
                }

                await chat.sendMessage(messageText, { mentions });
            } else {
                await message.reply("🚫 This command only works in group chats!");
            }
            break;

        case text.startsWith('.hidetag'):
            if (isGroup) {
                let mentions = [];

                for (let participant of chat.participants) {
                    const contact = await client.getContactById(participant.id._serialized);
                    mentions.push(contact);
                }

                const customMessage = message.body.slice(9).trim() || '*🔔 Attention everyone!*';
                await chat.sendMessage(customMessage, { mentions });
            } else {
                await message.reply("🚫 This command only works in group chats!");
            }
            break;

        case text.startsWith('.kick'):
            if (!isGroup) {
                await message.reply("🚫 This command only works in group chats.");
                break;
            }

            const isBotAdmin = chat.participants.find(p => p.id._serialized === botId)?.isAdmin;
            const isSenderAdmin = chat.participants.find(p => p.id._serialized === sender.id._serialized)?.isAdmin;

            if (!isBotAdmin) {
                await message.reply("🚫 I need to be *admin* to remove people.");
                break;
            }

            if (!isSenderAdmin) {
                await message.reply("🚫 Only *group admins* can use this command.");
                break;
            }

            if (message.mentionedIds.length === 0) {
                await message.reply("❗ Usage: `.kick @user`\nYou must mention who to kick.");
                break;
            }

            for (const id of message.mentionedIds) {
                try {
                    if (id === botId) {
                        await message.reply("😅 I can't kick myself.");
                        continue;
                    }

                    await chat.removeParticipants([id]);
                    await message.reply(`✅ Kicked @${id.split('@')[0]}`, {
                        mentions: [await client.getContactById(id)]
                    });
                } catch (err) {
                    console.error(`❌ Error removing ${id}:`, err);
                    await message.reply(`❌ Failed to kick @${id.split('@')[0]}`);
                }
            }
            break;

        case text.startsWith('.add'):
    if (!isGroup) {
        await message.reply("🚫 This command only works in *group chats*.");
        break;
    }

    const number = message.body.split(' ')[1]?.replace(/[^0-9]/g, '');
    if (!number) {
        await message.reply("❗ Usage: `.add 1234567890`");
        break;
    }

    const userId = `${number}@c.us`;

    const isBotAdminAdd = chat.participants.find(p => p.id._serialized === botId)?.isAdmin;
    const isSenderAdminAdd = chat.participants.find(p => p.id._serialized === sender.id._serialized)?.isAdmin;

    if (!isBotAdminAdd) {
        await message.reply("🚫 I need to be *admin* to add people.");
        break;
    }

    if (!isSenderAdminAdd) {
        await message.reply("🚫 Only *group admins* can use this command.");
        break;
    }

    try {
        await chat.addParticipants([userId]);
        await message.reply(`✅ Added @${number}`, {
            mentions: [await client.getContactById(userId)]
        });
    } catch (err) {
        console.error(`❌ Failed to add ${userId}:`, err);
        await message.reply(`❌ Couldn't add @${number}. They may need to *message the bot first* or have group invite settings enabled.`);
    }
    break;

    }

    // Outside switch: respond to any message containing "owner"
    if (text.includes('owner')) {
        await message.reply(ownerImg, undefined, {
            caption: ownerMessage
        });
    }
});


client.initialize();
