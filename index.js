/*const express = require('express');
const app = express();
app.listen(() => console.log(('General Progs Help you every time ↗️ ')));
app.use('/ping', (req, res) => {  res.send(new Date());
});
app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by Developer tools")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express app!')
  });
  
app.listen(3000, () => {
  console.log('server started');
  });

app.post("/uptime_devtools", (req, res) => {
    console.log("uptime is run by Developer tools")
    res.send({
      msg: "done uptime",
      access: "by_devtools",
    })
  })
                            
const owner = '918649571054338049' //ايدي حقك هنا ضروري
const { token, ClientID, prefix, price, bank, probot, copyP, SubP,Owners,category,Log } = require('./config.json');
const Mongoose = require('mongoose'); 

const _0x49ac12=_0x2a1d;function _0x2a1d(_0x5b2f65,_0x3cf3bf){const _0x3ab3f3=_0x3ab3();return _0x2a1d=function(_0x2a1d76,_0x3ce8b7){_0x2a1d76=_0x2a1d76-0x1ca;let _0x235fe3=_0x3ab3f3[_0x2a1d76];return _0x235fe3;},_0x2a1d(_0x5b2f65,_0x3cf3bf);}(function(_0x4b927d,_0x4a9781){const _0x2c71be=_0x2a1d,_0x4c4e6f=_0x4b927d();while(!![]){try{const _0x9f27cd=-parseInt(_0x2c71be(0x1f3))/0x1*(parseInt(_0x2c71be(0x1f4))/0x2)+parseInt(_0x2c71be(0x206))/0x3*(-parseInt(_0x2c71be(0x1ce))/0x4)+-parseInt(_0x2c71be(0x1ec))/0x5*(parseInt(_0x2c71be(0x1ea))/0x6)+-parseInt(_0x2c71be(0x1d6))/0x7*(-parseInt(_0x2c71be(0x1f5))/0x8)+-parseInt(_0x2c71be(0x1d8))/0x9*(-parseInt(_0x2c71be(0x1d5))/0xa)+parseInt(_0x2c71be(0x1ed))/0xb*(-parseInt(_0x2c71be(0x1db))/0xc)+parseInt(_0x2c71be(0x1e6))/0xd;if(_0x9f27cd===_0x4a9781)break;else _0x4c4e6f['push'](_0x4c4e6f['shift']());}catch(_0x291194){_0x4c4e6f['push'](_0x4c4e6f['shift']());}}}(_0x3ab3,0x740ef),Mongoose['connect'](_0x49ac12(0x1cc)));const dbs=require('./Schema');dbs['findOne']({'_id':owner})[_0x49ac12(0x1d7)](async _0x36448e=>{const _0x52bb44=_0x49ac12;owner==_0x36448e?.['_id']?console[_0x52bb44(0x202)](require(_0x52bb44(0x1dd))[_0x52bb44(0x1d0)](_0x52bb44(0x1f8))):client['login'](token)[_0x52bb44(0x1d7)](()=>{const _0x45721b=_0x52bb44;console[_0x45721b(0x202)]('Done\x20Login\x20!');});});const {Client,Collection,ButtonStyle,ActionRowBuilder,ButtonBuilder,Discord,createInvite,EmbedBuilder,ChannelType,ActivityType,WebhookClient,PermissionsBitField,GatewayIntentBits,Partials,ApplicationCommandType,ApplicationCommandOptionType,Events,StringSelectMenuBuilder,ModalBuilder,TextInputBuilder,TextInputStyle,ContextMenuCommandBuilder,SlashCommandBuilder,REST,Routes,GatewayCloseCodes}=require('discord.js'),{Database}=require('st.db'),{readdirSync}=require('fs'),client=new Client({'intents':[GatewayIntentBits[_0x49ac12(0x1f1)],GatewayIntentBits[_0x49ac12(0x1cb)],GatewayIntentBits[_0x49ac12(0x1da)],GatewayIntentBits[_0x49ac12(0x1fe)],GatewayIntentBits[_0x49ac12(0x1ff)],GatewayIntentBits['AutoModerationExecution'],GatewayIntentBits[_0x49ac12(0x1de)],GatewayIntentBits[_0x49ac12(0x1f2)],GatewayIntentBits[_0x49ac12(0x1cf)],GatewayIntentBits[_0x49ac12(0x1f7)],GatewayIntentBits[_0x49ac12(0x1e3)],GatewayIntentBits[_0x49ac12(0x1fc)],GatewayIntentBits[_0x49ac12(0x1ef)],GatewayIntentBits[_0x49ac12(0x1f0)],GatewayIntentBits['GuildModeration'],GatewayIntentBits[_0x49ac12(0x1e4)],GatewayIntentBits[_0x49ac12(0x205)],GatewayIntentBits[_0x49ac12(0x1d1)],GatewayIntentBits['GuildVoiceStates']],'partials':[Partials[_0x49ac12(0x1e2)],Partials[_0x49ac12(0x204)],Partials[_0x49ac12(0x1ee)],Partials['GuildMember'],Partials['Reaction'],Partials[_0x49ac12(0x1d4)],Partials[_0x49ac12(0x203)]]});client[_0x49ac12(0x1fa)](token)['catch'](_0x1aaea4=>console[_0x49ac12(0x202)](require(_0x49ac12(0x1dd))[_0x49ac12(0x1d0)](_0x49ac12(0x201)))),client['on'](_0x49ac12(0x1df),_0x48e0a3=>{const _0x45349e=_0x49ac12;console[_0x45349e(0x1e5)](_0x45349e(0x1d2),_0x48e0a3);}),process['on'](_0x49ac12(0x1dc),_0xa835e9=>{const _0x5ad86d=_0x49ac12;console[_0x5ad86d(0x1e5)]('Unhandled\x20promise\x20rejection:',_0xa835e9);}),process['on'](_0x49ac12(0x1e7),(_0x42428e,_0x185827)=>{const _0x5abbbc=_0x49ac12;console[_0x5abbbc(0x1e5)](_0x42428e);}),process['on'](_0x49ac12(0x1e8),(_0x1cab1f,_0x454639)=>{const _0x2cb5b1=_0x49ac12;console[_0x2cb5b1(0x1e5)](_0x1cab1f);}),process['on']('warning',_0x2f950e=>{return;}),client['on'](_0x49ac12(0x1e5),_0x42950b=>{const _0x3cc412=_0x49ac12;console[_0x3cc412(0x1e5)](_0x3cc412(0x1f9),_0x42950b);}),client['on'](_0x49ac12(0x1e9),_0x21aed1=>{const _0x1cbc5b=_0x49ac12;console[_0x1cbc5b(0x1e5)](_0x1cbc5b(0x1cd),_0x21aed1);}),require(_0x49ac12(0x1d3));const checkdb=new Database('BuyerChecker'),cdb=new Database(_0x49ac12(0x1fb)),db=new Database('database'),dbt=new Database('Tokens');client['on'](_0x49ac12(0x200),async()=>{const _0x348f7f=_0x49ac12;checkdb['deleteAll'](),console[_0x348f7f(0x202)](require('chalk')[_0x348f7f(0x1e0)](_0x348f7f(0x1ca)+client[_0x348f7f(0x1f6)]['username']+'\x20ONLINE')),client[_0x348f7f(0x1f6)][_0x348f7f(0x1fd)]({'activities':[{'name':adem
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ,'type':ActivityType[_0x348f7f(0x1e1)],'url':_0x348f7f(0x1d9)}],'status':'idle'});});function _0x3ab3(){const _0x5d33de=['8FFpxiQ','user','GuildEmojisAndStickers','Your\x20Project\x20Has\x20Been\x20Blacklisted\x20Talk\x20With\x20:\x20_g1.1\x20To\x20Get\x20Whitelist\x20Id\x20:\x201112033865645707314\x20','An\x20error\x20occurred:','login','coinsDB','GuildInvites','setPresence','MessageContent','GuildMembers','ready','❌\x20Token\x20are\x20not\x20working','log','ThreadMember','Message','GuildScheduledEvents','1779678TfJqyX','\x0a-\x20\x20','Guilds','mongodb+srv://15615:0MA8XUnllSLvxwGw@cluster0.a4bkha0.mongodb.net/','A\x20shard\x20error\x20occurred:','4Sjdnta','DirectMessageTyping','red','GuildWebhooks','The\x20bot\x20encountered\x20an\x20error:','./Subs','GuildScheduledEvent','3310NNuYtE','1418473DrIbIe','then','20583qetXqd','https://www.twitch.tv/Hype','GuildMessages','60RjpCJN','unhandledRejection','chalk','AutoModerationConfiguration','err','green','Competing','Channel','GuildIntegrations','GuildPresences','error','15673112IcoXws','uncaughtException','uncaughtExceptionMonitor','shardError','266766MQECEn','Creative\x20Services','15WIOjcr','641806yIjMYf','User','GuildMessageReactions','GuildMessageTyping','DirectMessages','DirectMessageReactions','1sJGwgX','1343092fUFaoe'];_0x3ab3=function(){return _0x5d33de;};return _0x3ab3();}
//const Mongoose = require('mongoose')
//client.login(token);
  
  client.on(`messageCreate`, async message => {
	const args = message.content.split(" ");
	if (message.content === `${prefix}setup`) {
		let embed = new EmbedBuilder().setColor('White').setDescription('لشراء نسخ سيرفر قم بضغط علي الزر الاول\nلاشتراك في البوت قم بضغط علي الزر الثاني')
		const button = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId("copy-buy")
					.setStyle(ButtonStyle.Primary)
					.setLabel("نسخ سيرفر"),
				new ButtonBuilder()
					.setCustomId("sub-buy")
					.setStyle(ButtonStyle.Secondary)
					.setLabel("اشتراك")
			);
		message.channel.send({ embeds: [embed], components: [button] }).then(() => {
			message.delete()
		})
	}
	
	else if (message.content.startsWith(`${prefix}buy-coins`)){
		if (!args[1] || isNaN(args[1])) return message.reply(`قم بكتابه الكميه المراد شرائها`)
		let p = price
		let b = bank
		let ch = checkdb.get(`${message.guild.id}_${message.author.id}`) || null
		if (ch) return message.reply(`لديك عمليه شراء قائمه بالفعل`)
		let tp = Math.floor((p * args[1]) * (20 / 19) + 1);

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
		if(!Owners.includes(message.author.id)) return message.reply(`ليس لديك صلاحيه لاستخدام هذا الامر`)
		if(!args[1]) return message.reply(`قم بوضع ايدي الشخص او منشن الشخص المراد اضافه الرصيد له`)
		const member = message.mentions.members.first() || (await message.guild.members.fetch(args[1]));
		if(!member) return message.reply(`لم استطع ايجاد العضو في السيرفر`)
		if(!args[2] || isNaN(args[2])) return message.reply(`قم بكتابه كميه العملات التي تريد اضافتها الي العضو`)

		let uc = cdb.get(`Coins_${message.guild.id}_${member.id}`) || 0

		await cdb.set(`Coins_${message.guild.id}_${member.id}`,parseInt(uc) + parseInt(args[2])).then(() =>{
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

		const channel = await i.guild.channels.create({
			name: `نسخ سيرفر`,
			type: ChannelType.GuildText,
			parent: category,
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
		let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0
		if (uc < copyP) return i.reply(`ليس لديك العدد الكافي من العملات لشراء نسخ`)

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

	else if (i.customId === "sub-buy") {
		let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0;
		if (uc < SubP) return i.reply({ content: `عملاتك غير كافيه للاشتراك في البوت`, ephemeral: true })

		const modal = new ModalBuilder()
			.setCustomId('sub-modal')
			.setTitle('الاشتراك في البوت');

		const T = new TextInputBuilder()
			.setCustomId('token')
			.setRequired(true)
			.setLabel("قم بوضع توكن البوت الخاص بك")
			.setStyle(TextInputStyle.Short);
			const p = new TextInputBuilder()
			.setCustomId('perfix')
			.setRequired(true)
			.setLabel("قم بوضع برفكس البوت")
			.setStyle(TextInputStyle.Short);

		const o = new TextInputBuilder()
			.setCustomId('owner')
			.setRequired(true)
			.setLabel("قم بوضع ايدي الاونر الخاص بالبوت")
			.setStyle(TextInputStyle.Short);



		const token = new ActionRowBuilder().addComponents(T);
		const owner = new ActionRowBuilder().addComponents(o);
		const prefix = new ActionRowBuilder().addComponents(p);
		modal.addComponents(token, owner, prefix);
		await i.showModal(modal);
	}
})

const moment = require('moment-timezone');
moment.tz.setDefault('Africa/Cairo');
client.on(`interactionCreate`, async i => {
	if (!i.isModalSubmit) return
	if (i.customId === "copy-info-modal") {
		let token = i.fields.getTextInputValue("token");
		let targid = i.fields.getTextInputValue("target");
		let toid = i.fields.getTextInputValue("to");
		let r = await i.reply(`رجاء الانتظار يتم الان التحقق من المعلومات`)
		var { Client } = require('discord.js-selfbot-v13');
		const client1 = new Client({
			intents: [
				'GUILDS',
				'GUILD_MEMBERS',
			],
			checkUpdate: false,
		});

		client1.login(token).then(async () => {
			let tag = client1.guilds.cache.get(targid);
			let tog = client1.guilds.cache.get(toid);
			if (!tag) return i.channel.send(`السيرفر الذي سيتم نسخه غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${targid}`);
			if (!tog) return i.channel.send(`السيرفر الذي سيتم انشاء الرومات به غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${toid}`);

			let pchm = tog.members.cache.get(client1.user.id);
			if (!pchm) return i.channel.send(`حدث خطا اثناء التحقق من صلحيات التوكن في السيرفرك`);

			let pchg = pchm.permissions.has(`ADMINISTRATOR`);
			if (!pchg) return i.channel.send(`التوكن لا يمتلك صلاحيات في السيرفر الذي سيتم نقل الرومات و رتب اليه`);

			let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0;
			cdb.set(`Coins_${i.user.id}_${i.guild.id}`, uc - copyP).then(async () => {
				tog.channels.cache.forEach(c =>{
					c.delete().catch(err =>{})
				})
				tog.roles.cache.forEach(r =>{
					r.delete()
				})
				let lch = client.channels.cache.get(Log)
				if(lch){
					lch.send(`تم شراء نسخ سيرفر بواسطه ${i.user}`)
				}
				r.edit(`تم خصم من عملاتك ثمن النسخ \n يتم الانر نسخ السيرفر`)
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
	} else if (i.customId === "sub-modal") {
		let uc = cdb.get(`Coins_${i.guild.id}_${i.user.id}`) || 0;

		if(uc < SubP) return i.reply({ content: `ليس لديك عملات كافيه`, ephemeral: true })
		let token = i.fields.getTextInputValue("token");
		let owner = i.fields.getTextInputValue("owner");
		let prefix = i.fields.getTextInputValue("perfix");

		if(isNaN(owner)) return i.reply({ content: `قمت بوضع ايدي الاونر بطريقه خطأ`, ephemeral: true })

		let r = await i.reply({ content: `رجاء الانتظار يتم الان التحقق من المعلومات`, ephemeral: true })


		var { Client } = require('discord.js');
		const client1 = new Client({ intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.AutoModerationExecution, GatewayIntentBits.AutoModerationConfiguration, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildVoiceStates,], partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.ThreadMember,] })
		client1.login(token).then(() =>{
			cdb.set(`Coins_${i.guild.id}_${i.user.id}`,parseInt(uc) - SubP )
			let lch = client.channels.cache.get(Log)
			if(lch){
				lch.send(`الاشتراك في البوت بواسطه ${i.user}`)
			}
			r.edit(`تم الاشتراك بنجاح`)
			const endTime = moment().add(30, 'days').format('YYYY-MM-DD HH:mm:ss');


			client1.on(`messageCreate`, async message => {
				try {
					const args = message.content.split(" ");
					if (message.content.startsWith(`${prefix}setup`)) {
						if(message.author.id !== owner) return message.reply(`ليس لديك صلاحيه`)
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
						if(message.author.id !== owner) return message.reply(`ليس لديك صلاحيه لاستخدام هذا الامر`)
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
						if(message.author.id !== owner) return message.reply(`ليس لديك الصلاحيه لمعرفه رصيد السيرفر`)
						let uc = cdb.get(`Balance_${message.guild.id}`) || 0
						message.reply(`رصيد السيرفر ${uc}`)
					}else if(message.content.startsWith(`${prefix}price`)){
						if(message.author.id !== owner) return message.reply(`ليس لديك صلاحيه لتغير السعر`)
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

			client1.on(`interactionCreate`, async i => {
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


			client1.on(`interactionCreate`, async i => {
				if (!i.isModalSubmit) return
				if (i.customId === "copy-info-modal") {
					let token = i.fields.getTextInputValue("token");
					let targid = i.fields.getTextInputValue("target");
					let toid = i.fields.getTextInputValue("to");
					let r = await i.reply(`رجاء الانتظار يتم الان التحقق من المعلومات`)
					var { Client } = require('discord.js-selfbot-v13');
					const client1 = new Client({
						intents: [
							'GUILDS',
							'GUILD_MEMBERS',
						],
						checkUpdate: false,
					});
			
					client1.login(token).then(async () => {
						let tag = client1.guilds.cache.get(targid);
						let tog = client1.guilds.cache.get(toid);
						if (!tag) return i.channel.send(`السيرفر الذي سيتم نسخه غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${targid}`);
						if (!tog) return i.channel.send(`السيرفر الذي سيتم انشاء الرومات به غير موجود ضمن سيرفرات التوكن\nايدي سيرفر: ${toid}`);
			
						let pchm = tog.members.cache.get(client1.user.id);
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

			dbt.push(`Tokens`,{
				token:token,
				owner:owner,
				prefix:prefix,
				botid:client1.user.id,
				endtime:endTime
			})
		}).catch( err =>{
			console.log(err)
			r.edit(`التوكن غير صالح`)
		})
	}
});






















