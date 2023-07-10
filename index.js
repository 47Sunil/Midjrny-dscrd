const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in ${client.user.tag}`);
});
function convertCollectionToJSObject(collection) {
  const collectionObject = Object.fromEntries(collection);
  return collectionObject;
}
client.on("messageCreate", async (msg) => {
  console.log(msg);
  console.log(msg.content, "lllllllllllllllll");
  const attachments = msg.attachments;
  const collectionObject = convertCollectionToJSObject(attachments);

  // Access the first attachment's URL
  if (Object.values(collectionObject).length > 0) {
    const imageUrl = Object.values(collectionObject)[0].url;
    console.log(imageUrl);
  }
});

client.login(
  "MTEyNzE5ODcwODk4MzkyNjgwNA.G84XGT.I8OwcDAmyoE77GIwMguMWqGK6kAFdbrKuWXix8"
);

// const express = require("express");
// const app = express();
// const port = 6000;
// app.use(express.json());

const axios = require("axios");

const channelID = "1127193744794464308";
const botToken =
  "MTEyNzE5ODcwODk4MzkyNjgwNA.G84XGT.I8OwcDAmyoE77GIwMguMWqGK6kAFdbrKuWXix8";

const sendMessage = async () => {
  try {
    const response = await axios.post(
      `https://discord.com/api/v9/channels/${channelID}/messages`,
      {
        content: "/imagine prompt: A boy playing football",
      },
      {
        headers: {
          Authorization: `Bot ${botToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.message);
  }
};

sendMessage();

// const Discord = require("discord.js");

// client.login(
//   "MTEyNzE5ODcwODk4MzkyNjgwNA.G84XGT.I8OwcDAmyoE77GIwMguMWqGK6kAFdbrKuWXix8"
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
//   "MTEyNzE5ODcwODk4MzkyNjgwNA.G84XGT.I8OwcDAmyoE77GIwMguMWqGK6kAFdbrKuWXix8"
// );

// sendDirectMessage("1127198708983926804", "hello");

// // const recipientUserID = "1127198708983926804";

// // const sendMessage1 = async (messageContent) => {
// //   try {
// //     const response = await axios.post(
// //       `https://discord.com/api/v9/users/@me/channels`,
// //       {
// //         recipient_id: recipientUserID,
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bot ${botToken}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     const channelID = response.data.id;

// //     await axios.post(
// //       `https://discord.com/api/v9/channels/${channelID}/messages`,
// //       {
// //         content: messageContent,
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bot ${botToken}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     console.log("Message sent successfully");
// //   } catch (error) {
// //     console.log(error);
// //     console.error("Error sending message:", error.message);
// //   }
// // };

// // sendMessage1("Hello, Discord User!");

// // const express = require("express");
// // const { Client, GatewayIntentBits } = require("discord.js");

// // const app = express();
// // const port = 6000;

// // const client = new Client({
// //   intents: [
// //     GatewayIntentBits.Guilds,
// //     GatewayIntentBits.GuildMessages,
// //     GatewayIntentBits.MessageContent,
// //   ],
// // });

// // client.on("ready", () => {
// //   console.log(`Logged in ${client.user.tag}`);
// // });

// // client.on("messageCreate", async (msg) => {
// //   if (msg.author.bot) return;
// //   if (msg.content.startsWith("/imagine")) {
// //     const prompt = msg.content;
// //     const imageUrl = await generateImageURL(prompt); // Call the function to generate the image URL
// //     console.log(`Generated image URL: ${imageUrl}`);
// //   }
// // });

// // function generateImageURL(prompt) {
// //   // Logic to generate the image URL based on the prompt
// //   // Replace this with your own implementation
// //   return new Promise((resolve, reject) => {
// //     // Simulating an asynchronous operation
// //     setTimeout(() => {
// //       const imageUrl = `https://example.com/image?prompt=${encodeURIComponent(
// //         prompt
// //       )}`;
// //       resolve(imageUrl);
// //     }, 2000);
// //   });
// // }

// // app.use(express.json());

// // app.post("/imagine", (req, res) => {
// //   const prompt = req.body.prompt;
// //   generateImageURL(prompt)
// //     .then((imageUrl) => {
// //       res.status(200).json({ imageUrl });
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: "Failed to generate image URL" });
// //     });
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// // client.login(
// //   "MTEyNzE5ODcwODk4MzkyNjgwNA.G84XGT.I8OwcDAmyoE77GIwMguMWqGK6kAFdbrKuWXix8"
// // );
