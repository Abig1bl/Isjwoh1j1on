const { Client, Collection,ButtonStyle ,Discord, createInvite, ChannelType, ActivityType, WebhookClient, PermissionsBitField, GatewayIntentBits, Partials, ApplicationCommandType, ApplicationCommandOptionType, Events, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ContextMenuCommandBuilder, SlashCommandBuilder, REST, Routes, GatewayCloseCodes, EmbedBuilder } = require('discord.js');
const { Database } = require("st.db")
const dbt = new Database("Tokens")
let Tokens = dbt.get('Tokens') || []
const { readdirSync } = require("fs");
const moment = require('moment-timezone');
moment.tz.setDefault('Africa/Cairo');

Tokens.forEach(data => {
    const client = new Client({
        intents: [
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.AutoModerationExecution,
            GatewayIntentBits.AutoModerationConfiguration,
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildInvites,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildMessageTyping,
            GatewayIntentBits.GuildModeration,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.GuildScheduledEvents,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.GuildVoiceStates,
        ],
        partials: [
            Partials.Channel,
            Partials.Message,
            Partials.User,
            Partials.GuildMember,
            Partials.Reaction,
            Partials.GuildScheduledEvent,
            Partials.ThreadMember,
        ]
    });

    client.login(data.token).catch((err) => console.log(`${data.token} not work`));

    client.on('err', (error) => {
        console.error('The bot encountered an error:', error);
    });

    process.on('unhandledRejection', (error) => {
        console.error('Unhandled promise rejection:', error);
    });

    process.on('uncaughtException', (err, origin) => {
        console.error(err)
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.error(err)

    });
    process.on('warning', (warning) => {
        return;
    });

    client.on('error', (error) => {
        console.error('An error occurred:', error);
    });

    client.on('shardError', (error) => {
        console.error('A shard error occurred:', error);
    });

    const checkdb = new Database("BuyerChecker");
    const cdb = new Database("coinsDB");
    const db = new Database("database");
    const dbt = new Database("Tokens");


    let prefix = data.prefix

    client.on(`messageCreate`, async message => {
        try {
            const args = message.content.split(" ");
            if (message.content.startsWith(`${prefix}setup`)) {
                if(message.author.id !== data.owner) return message.reply(`ليس لديك صلاحيه`)
                if(!args[1] || isNaN(args[1])) return message.reply(`قم بوضع ايدي الكاتجوري لفتح التكتات بعد الامر`)
                if(!args[2] || isNaN(args[2])) return message.reply(`قم بوضع ايدي الحساب الذي سوف يكون التحويل له`)

                let embed = new EmbedBuilder().setColor('White').setDescription('لشراء نسخ سيرفر قم بضغط علي الزر الاول')
                const button = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("copy-buy")
                            .setStyle(ButtonStyle.Primary)
                            .setLabel("نسخ سيرفر")
                    );
                message.channel.send({ embeds: [embed], components: [button] }).then(() => {
                    db.set(`CopyCa_${message.guild.id}`,args[1]).then(() =>{
                        db.set(`bank_${message.guild.id}`,args[2])
                    })
                    message.delete()
                })
            }
            
            else if (message.content.startsWith(`${prefix}buy-coins`)){
                if (!args[1] || isNaN(args[1])) return message.reply(`قم بكتابه الكميه المراد شرائها`)
                let p = cdb.get(`Copy_Price_${message.guild.id}`) || copyP || 1
                let b = db.get(`bank_${message.guild.id}`) || null
                if(!b) return message.reply(`رجاء الانتظار حتي يقوم الانور بتسطيب النظام\n${prefix}setup`)
                let ch = checkdb.get(`${message.guild.id}_${message.author.id}`) || null
                if (ch) return message.reply(`لديك عمليه شراء قائمه بالفعل`)
                let tp = Math.floor((p * args[1]) * (20 / 19) + 1);
        
                let ba = cdb.get(`Balance_${message.guild.id}`) || 0
                if(ba < args[1]) return message.reply(`رصيد السيرفر غير كافي`)

                message.reply(`#credit ${b} ${tp}`).then(async () => {
                    checkdb.set(`${message.guild.id}_${message.author.id}`, 'true')
                    const filter = (response) =>
                        response.content.startsWith(
                            `**:moneybag: | ${message.author.username}, has transferred \`$${p * args[1]}\``
                        ) &&
                        response.content.includes(`${b}`) &&
                        response.author.id === probot &&
                        response.content.includes(Number(p * args[1]));
                    const filteruser = (i) => i.user.id === message.author.id;
                    const collector = message.channel.createMessageCollector({
                        filter,
                        filteruser,
                        time: 60000,
                    });
        
                    let uc = cdb.get(`Coins_${message.guild.id}_${message.author.id}`) || 0
                    collector.on("collect", async () => {
                        checkdb.delete(`${message.guild.id}_${message.author.id}`)
                        cdb.set(`Coins_${message.guild.id}_${message.author.id}`, parseInt(uc) + parseInt(args[1])).then(() => {
                            cdb.set(`Balance_${message.guild.id}`,parseInt(ba) - parseInt(args[1]) )
                            message.channel.send(`تم شراء العملات بنجاح الكميه ${args[1]}`)
                        })
                        collector.stop()
                        return
                    });
        
                    collector.on("end", (collected) => {
                        if (collected.size !== 0) {
                            return
                        } else {
                            checkdb.delete(`${message.guild.id}_${message.author.id}`)
                            message.channel.send(`وقت التحويل انتهي ${message.author}`)
                        }
                    });
                })
            }else if(message.content.startsWith(`${prefix}add-coins`)){
                if(message.author.id !== data.owner) return message.reply(`ليس لديك صلاحيه لاستخدام هذا الامر`)
                if(!args[1]) return message.reply(`قم بوضع ايدي الشخص او منشن الشخص المراد اضافه الرصيد له`)
                const member = message.mentions.members.first() || (await message.guild.members.fetch(args[1]));
                if(!member) return message.reply(`لم استطع ايجاد العضو في السيرفر`)
                if(!args[2] || isNaN(args[2])) return message.reply(`قم بكتابه كميه العملات التي تريد اضافتها الي العضو`)
        
                let b = cdb.get(`Balance_${message.guild.id}`) || 0
                let uc = cdb.get(`Coins_${message.guild.id}_${member.id}`) || 0
                if(b < uc) return message.reply(`رصيد السيرفر غير كافي`)
        

                await cdb.set(`Coins_${message.guild.id}_${member.id}`,parseInt(uc) + parseInt(args[2])).then(() =>{
                    cdb.set(`Balance_${message.guild.id}`,parseInt(b) - parseInt(args[2]) )
                    message.reply(`تم اضافه العملات بنجاح الي ${member} الكميه ${args[2]}`)
                })
            }else if(message.content.startsWith(`${prefix}add-balance`)){
                if(!Owners.includes(message.author.id)) return message.reply(`ليس لديك صلاحيه لاستخدام هذا الامر`)
                if(!args[1] || isNaN(args[1])) return message.reply(`قم بوضع ايدي السيرفر لاضافه رصيد له`)
                if(!args[2] || isNaN(args[2])) return message.reply(`قم بكتابه كميه الرصيد التي تريد اضافتها الي السيرفر`)
                let uc = cdb.get(`Balance_${args[1]}`) || 0
                await cdb.set(`Balance_${args[1]}`,parseInt(uc) + parseInt(args[2])).then(() =>{
                    message.reply(`تم اضافه الرصيد بنجاح الي السيرفر ${args[1]}`)
                })
            }else if(message.content.startsWith(`${prefix}coins`)){
                if(!args[1]){
                    let uc = cdb.get(`Coins_${message.guild.id}_${message.author.id}`) || 0
                    message.reply(`رصيدك الحالي هو ${uc}`)
        
                }else{
                    const member = message.mentions.members.first() || (await message.guild.members.fetch(args[1]));
                    let uc = cdb.get(`Coins_${message.guild.id}_${member.id}`) || 0
                    message.reply(`رصيد ${member.user.username} هو ${uc}`)
                }
            }else if(message.content === `${prefix}balance`){
                if(message.author.id !== data.owner) return message.reply(`ليس لديك الصلاحيه لمعرفه رصيد السيرفر`)
                let uc = cdb.get(`Balance_${message.guild.id}`) || 0
                message.reply(`رصيد السيرفر ${uc}`)
            }else if(message.content.startsWith(`${prefix}price`)){
                if(message.author.id !== data.owner) return message.reply(`ليس لديك صلاحيه لتغير السعر`)
                if(!args[1] || !args[1].toLowerCase() === 'coins' && args[1].toLowerCase() !== 'copy') return message.reply(`قم بتحديد الغرض الذي تريد تغير سعره\n${prefix}price copy [السعر]\n${prefix}price coins [السعر]`)

                if(!args[2] || isNaN(args[2])) return message.reply(`قم وضع السعر بعد الامر`)

                if(args[1].toLowerCase() === 'coins'){
                    cdb.set(`Coins_Price_${message.guild.id}`, parseInt(args[2])).then(() =>{
                        return message.reply(`تم تغير سعر العمله الي ${args[2]}`)
                    })
                }
                else if(args[1].toLowerCase() === 'copy'){
                    cdb.set(`Copy_Price_${message.guild.id}`, parseInt(args[2])).then(() =>{
                        return message.reply(`تم تغير سعر النسخ الي ${args[2]}`)
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }

    })

    client.on(`interactionCreate`, async i => {
        if (!i.isButton) return
        if (i.customId === 'copy-buy') {
            let embed = new EmbedBuilder()
                .setColor('White')
                .setDescription('قم ببدا الشراء عن طريق الضغط علي الزر Start\nقم باغلاق التذكره عن طريق زر Close')
            const button = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("copy-start")
                        .setStyle(ButtonStyle.Success)
                        .setLabel("Start"),
                    new ButtonBuilder()
                        .setCustomId("ticket-close")
                        .setStyle(ButtonStyle.Secondary)
                        .setLabel("Close")
                );
    
                let ca = db.get(`CopyCa_${i.guild.id}`) || null
            const channel = await i.guild.channels.create({
                name: `نسخ سيرفر`,
                type: ChannelType.GuildText,
                parent: ca,
                permissionOverwrites: [
                    {
                        id: i.guild.roles.everyone.id,
                        deny: ["ViewChannel"],
                    },
                    {
                        id: `${i.user.id}`,
                        allow: ["ViewChannel", "SendMessages"],
                    }
                ]
            }
            );
    
            await i.reply({ content: `تم فتح تذكره ${channel}`, ephemeral: true })
    
            channel.send({ embeds: [embed], components: [button] })
        } else if (i.customId === 'copy-start') {
            let pri = cdb.get(`Copy_Price_${i.guild.id}`) || copyP || 1
            let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0
            if (uc < pri) return i.reply(`ليس لديك العدد الكافي من العملات لشراء نسخ`)
    
            const modal = new ModalBuilder()
                .setCustomId('copy-info-modal')
                .setTitle('نسخ سيرفر');
    
            const T = new TextInputBuilder()
                .setCustomId('token')
                .setRequired(true)
                .setLabel("قم بوضع توكن الحساب")
                .setStyle(TextInputStyle.Short);
    
            const c = new TextInputBuilder()
                .setCustomId('target')
                .setRequired(true)
                .setLabel("قم بوضع ايدي السيرفر الذي سيتم نسخه")
                .setStyle(TextInputStyle.Short);
    
            const t = new TextInputBuilder()
                .setCustomId('to')
                .setRequired(true)
                .setLabel("قم بوضع ايدي سيرفرك")
                .setStyle(TextInputStyle.Short);
    
    
    
            const token = new ActionRowBuilder().addComponents(T);
            const copy = new ActionRowBuilder().addComponents(c);
            const to = new ActionRowBuilder().addComponents(t);
            modal.addComponents(token, copy, to);
    
            await i.showModal(modal);
        } else if (i.customId === "ticket-close") {
            return i.channel.delete().catch(err => { })
        }
    })


    client.on(`interactionCreate`, async i => {
        if (!i.isModalSubmit) return
        if (i.customId === "copy-info-modal") {
            let token = i.fields.getTextInputValue("token");
            let targid = i.fields.getTextInputValue("target");
            let toid = i.fields.getTextInputValue("to");
            let r = await i.reply(`رجاء الانتظار يتم الان التحقق من المعلومات`)
            var { Client } = require('discord.js-selfbot-v13');
            const client = new Client({
                intents: [
                    'GUILDS',
                    'GUILD_MEMBERS',
                ],
                checkUpdate: false,
            });
    
            client.login(token).then(async () => {
                let tag = client.guilds.cache.get(targid);
                let tog = client.guilds.cache.get(toid);
                if (!tag) return i.channel.send(`السيرفر الذي سيتم نسخه غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${targid}`);
                if (!tog) return i.channel.send(`السيرفر الذي سيتم انشاء الرومات به غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${toid}`);
    
                let pchm = tog.members.cache.get(client.user.id);
                if (!pchm) return i.channel.send(`حدث خطا اثناء التحقق من صلحيات التوكن في السيرفرك`);
    
                let pchg = pchm.permissions.has(`ADMINISTRATOR`);
                if (!pchg) return i.channel.send(`التوكن لا يمتلك صلاحيات في السيرفر الذي سيتم نقل الرومات و رتب اليه`);
    
                let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0;
                let pri = cdb.get(`Copy_Price_${i.guild.id}`) || copyP || 1
                cdb.set(`Coins_${i.user.id}_${i.guild.id}`,uc - pri).then(async () => {
                    tog.channels.cache.forEach(c =>{
                        c.delete().catch(err =>{})
                    })
                    tog.roles.cache.forEach(r =>{
                        r.delete()
                    })
                    r.edit(`تم خصم من عملاتك المبلغ \nيتم الان نسخ السيرفر`)
                    const ctc = [];
                    const chtc = [];
                    tag.channels.cache.forEach((channel) => {
                        tag.roles.cache.forEach(async (role) => {
                            if (role.name !== '@everyone') {
                                const clonedRole = await tog.roles.create({
                                    name: role.name,
                                    color: role.color,
                                    permissions: role.permissions,
                                    position: role.position,
                                    hoist: role.hoist,
                                    mentionable: role.mentionable,
                                });
                            }
                        });
                        if (channel.type === 'GUILD_CATEGORY') {
                            ctc.push(channel);
                        } else {
                            const options = {
                                type: channel.type,
                                topic: channel.topic,
                                nsfw: channel.nsfw,
                                position: channel.position,
                                parent: channel.parentId ? tog.channels.cache.find((c) => c.name === tag.channels.cache.get(channel.parentId).name && c.type === 'GUILD_CATEGORY')?.id : null,
                            };
    
                            if (channel.type === 'GUILD_TEXT') {
                                options.rateLimitPerUser = channel.rateLimitPerUser;
                            }
    
                            chtc.push({ channel, options });
                        }
                    });
                    for (const category of ctc) {
                        const newCategory = await tog.channels.create(category.name, { type: 'GUILD_CATEGORY' });
                        const relatedChannels = chtc.filter((channelData) => channelData.channel.parentId === category.id);
                        for (const { channel, options } of relatedChannels) {
                            options.parent = newCategory.id;
                            const newChannel = await tog.channels.create(channel.name, options);
                            const och = tag.channels.cache.get(channel.id);
                        }
    
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
                i.channel.send(`التوكن غير صالح\n${i.user}`);
            });
        }
    });


    client.on('ready', async () => {
        try {
            setInterval(() => {
                const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
                const subscriptions = dbt.get(`Tokens`);
                if (subscriptions) {
                    subscriptions.forEach(async subscription => {
                        const { botid, endTime } = subscription;
                        if (botid === client.user.id) {
                            if (moment(currentTime).isAfter(endTime)) {
                                if (botid === client.user.id) {
                                    await client.destroy()
                                    const check = dbt.get(`Tokens`);
                                    const Remove = check.filter(re => re.botid !== client.user.id);
                                    await dbt.set(`Tokens`, Remove)
                                }
                            } else {

                            }
                        }

                    });
                }
            }, 5000);
        } catch (error) {
        }
    });


});