// const { Client, GatewayIntentBits } = require("discord.js");

// // const client = new Client({
// //   intents: [
// //     GatewayIntentBits.Guilds,
// //     GatewayIntentBits.GuildMessages,
// //     GatewayIntentBits.MessageContent,
// //   ],
// // });

// client.on("ready", () => {
//   console.log(`Logged in ${client.user.tag}`);
// });
// function convertCollectionToJSObject(collection) {
//   const collectionObject = Object.fromEntries(collection);
//   return collectionObject;
// }
// client.on("messageCreate", async (msg) => {
//   console.log(msg);
//   console.log(msg.content, "lllllllllllllllll");
//   const attachments = msg.attachments;
//   const collectionObject = convertCollectionToJSObject(attachments);

//   // Access the first attachment's URL
//   if (Object.values(collectionObject).length > 0) {
//     const imageUrl = Object.values(collectionObject)[0].url;
//     console.log(imageUrl);
//   }
// });

// client.login(
//   ""
// );

// // const express = require("express");
// // const app = express();
// // const port = 6000;
// // app.use(express.json());

// const axios = require("axios");

// const channelID = "1127193744794464308";
// const botToken =
//   "";

// const sendMessage = async () => {
//   try {
//     const response = await axios.post(
//       `https://discord.com/api/v9/channels/${channelID}/messages`,
//       {
//         content: "/imagine prompt: A boy playing football",
//       },
//       {
//         headers: {
//           Authorization: `Bot ${botToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Message sent:", response.data);
//   } catch (error) {
//     console.error("Error sending message:", error.message);
//   }
// };

// sendMessage();

// const Discord = require("discord.js");

// client.login(
//   ""
// );

// client.on("ready", () => {
//   console.log(`Logged in as ${client.user.tag}`);
// });

// client.on("message", (message) => {
//   // Check if the message is a command or trigger for sending a DM
//   if (message.content === "!sendDM") {
//     sendDirectMessage(
//       "USER_ID",
//       "Hello, this is a direct message from my API!"
//     );
//   }
// });

// function sendDirectMessage(userId, messageContent) {
//   client.users
//     .fetch(userId)
//     .then((user) => {
//       user.send(messageContent);
//     })
//     .catch(console.error);
// }

// sendDirectMessage("1127198708983926804", "hi");
// const Discord = require("discord.js");

// const client = new Discord.Client({
//   intents: [  GatewayIntentBits.Guilds,
//          GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent,
//         GatewayIntentBits.
//       ],
// });

// client.on("ready", () => {
//   console.log(`Logged in as ${client.user.tag}`);
// });

// client.on("message", (message) => {
//   // Check if the message is a command or trigger for sending a DM
//   if (message.content === "!sendDM") {
//     sendDirectMessage(
//       "USER_ID",
//       "Hello, this is a direct message from my API!"
//     );
//   }
// });

// function sendDirectMessage(userId, messageContent) {
//   client.users
//     .fetch(userId)
//     .then((user) => {
//       user.send(messageContent);
//     })
//     .catch(console.error);
// }

// client.login(
//   ""
// );

// sendDirectMessage("1127198708983926804", "hello");

// const recipientUserID = "1127198708983926804";

// const sendMessage1 = async (messageContent) => {
//   try {
//     const response = await axios.post(
//       `https://discord.com/api/v9/users/@me/channels`,
//       {
//         recipient_id: recipientUserID,
//       },
//       {
//         headers: {
//           Authorization: `Bot ${botToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const channelID = response.data.id;

//     await axios.post(
//       `https://discord.com/api/v9/channels/${channelID}/messages`,
//       {
//         content: messageContent,
//       },
//       {
//         headers: {
//           Authorization: `Bot ${botToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Message sent successfully");
//   } catch (error) {
//     console.log(error);
//     console.error("Error sending message:", error.message);
//   }
// };

// sendMessage1("Hello, Discord User!");

// const express = require("express");
// const { Client, GatewayIntentBits } = require("discord.js");

// const app = express();
// const port = 6000;

// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// client.on("ready", () => {
//   console.log(`Logged in ${client.user.tag}`);
// });

// client.on("messageCreate", async (msg) => {
//   if (msg.author.bot) return;
//   if (msg.content.startsWith("/imagine")) {
//     const prompt = msg.content;
//     const imageUrl = await generateImageURL(prompt); // Call the function to generate the image URL
//     console.log(`Generated image URL: ${imageUrl}`);
//   }
// });

// function generateImageURL(prompt) {
//   // Logic to generate the image URL based on the prompt
//   // Replace this with your own implementation
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const imageUrl = `https://example.com/image?prompt=${encodeURIComponent(
//         prompt
//       )}`;
//       resolve(imageUrl);
//     }, 2000);
//   });
// }

// ID: 934412643840720956
// TOKEN: hidden inside a secret file.
// Invite link: https://discord.com/api/oauth2/authorize?client_id=934412643840720956&scope=bot&permissions=1
// invite second bot link: https://discord.com/api/oauth2/authorize?client_id=805128667809972234&scope=bot&permissions=1

const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");

const Client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildMembers, // Corrected intent name
  ],
  partials: [
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "USER",
    "DIRECT_MESSAGES",
  ],
});

Client.on("ready", (client) => {
  console.log("This bot is now online " + client.user.tag);
});

Client.on("messageCreate", (message) => {
  if (message.author.bot == false) {
    message.reply("Hello");
    console.log(message);
  }
});

Client.on("guildMemberAdd", (guildMember) => {
  if (guildMember.user.bot == false) {
    guildMember.send("Welcome to the server!");
  }

  Client.on("messageCreate", (message) => {
    // only run this code is the user that wrote the message is NOT a bot.
    if (message.author.bot == false) {
      message.reply("Hello");
    }
  });

  guildMember.guild.channels
    .fetch("1127193744794464308")
    .then((channel) =>
      channel.send("Welcome to the server! <@" + guildMember.id + ">")
    )
    .catch(console.error);

  guildMember.guild.channels
    .fetch("951951720311820299")
    .then((channel) =>
      channel.send(
        guildMember.user.tag +
          " joined the server. Date & Time: " +
          new Date(guildMember.joinedTimestamp)
      )
    )
    .catch(console.error);

  console.log(1000000);
  console.log(new Date(1000000));
});

Client.login("");

// const Discord = require("discord.js");
const {
  Client,
  Intents,
  MessageEmbed,
  GatewayIntentBits,
} = require("discord.js");
const bot = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,

    GatewayIntentBits.GuildMembers, // Corrected intent name
  ],
  partials: [
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "USER",
    "DIRECT_MESSAGES",
  ],
});

const token = "";

const PREFIX = "!";

bot.on("ready", () => {
  console.log("This bot is active!");
});

bot.on("messageCreate", (message) => {
  console.log("message:", message);
  console.log("Message received:", message.content);
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  console.log("Command prefix:", PREFIX); // Log the command prefix
  console.log("Command arguments:", args);
  arguments;
  console.log("Message author:", message.author.tag); // Log the author of the message
  console.log("Message channel:", message.channel.name); // Log the channel where the message was sent

  console.log("Message author:", message.author.tag); // Log the author of the message
  console.log("Message channel:", message.channel.name); // Log the channel where the message was sent

  switch (args[0]) {
    case "help":
      const embed = new MessageEmbed()
        .setTitle("Helper Embed")
        .setColor(0xff0000)
        .setDescription("Hello");
      console.log("Sending help embed to:", message.author.tag);
      message.author
        .send({ embeds: [embed] })
        .then(() => console.log("Help embed sent successfully!"))
        .catch((error) => console.error("Error sending help embed:", error));
      break;
  }
});

bot.login("");
