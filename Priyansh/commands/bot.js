const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga",    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
    "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
            "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ","Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
 "Ha chad jao india gate p", "bhgwan k nam p raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krvao apna 😏", "Tum vhi ho na jo jamin se 1 rupya v utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao kbhi delhi fir milke party krte h ", "ooo bot k  chamcheee sant ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
            "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi himachal tumko thnd m jmate h 😁😹", "apna sasta internet pack htake achha sa dalwao pehle"," मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌",   " मासूम सी दिखेगी बवाल कर जायेगी इसकी क्या जरूरत थी कह कह के कंगाल कर जायेगी।😝",   "वो आई थी मेरे कब्र पर दिया जलाने के लिए रखा हुआ फूल भी ले गई दूसरे वाले को पटाने के लिए ",   "रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝 ",   " चाईनीज मोहब्ब्त थी साहब टूट कर बिखर गई पर दिल हिन्दुस्तानी था एक और पटा ली.😁",   "सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है। ",   "कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है ",   "ये जो तुम लोग बिना बॉयफ्रेंड वाली लड़की ढूंढ रहे हो ना.. शास्त्रों में इसे पत्थर में से तेल निकालना कहा गया है😁 ", 
            " काली काली साड़ी में कढ़ाई नही होती जान तुम्हारी याद में पढ़ाई नही होती 🙈",   "छोटी छोटी बातों में खुशियां तलाश लेता हूं, सायकिल पर चलता हूं फिर भी फोन को फ्लाइट मोड पर डाल लेता हूं🤣 ",   "क्रश हो या ब्रश वक्त पर बदल लेना चाहिए वरना दिल हो या दांत टूट ही जाएगा..🤪 ",   " इश्क़ होने लगे तो पूजा पाठ किया करो दोस्तों मोहब्ब्त होगी तो मिल जाएगी बला होगी तो टल जायेगी😝",   "मां: तुझे कैसी बीवी चाहिए बेटा.?? मै: तुम्हारे जैसी लाड और प्यार करनेवाली 🙈 ां : क्या बात है बेटा पूरी जिंदगी चप्पल खाकर ही काटनी है क्या😂😂 ",   "गुस्से में उसी का नंबर डिलीट करना चाहिए जिसका नंबर याद हो वरना बाद में बहुत तकलीफ होती है ",   "दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂 ",   "टंकी में टंकी, टंकी में पानी बाबू शोना के चक्कर में don’t waste your Jawaani😁 ",   "She – मेरे घरवाले सरकारी नौकरी के बिना नहीं मानेंगे Me: अरे अगर लग गई ना तो मेरे घरवाले नही मानेंगे ",   "सच्चा दोस्त 2 ही बाते बताता है अंडा nonveg नही होता और बीयर दारू नही होती.! "," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu .","Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" ,
            "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , 
            "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" ,
            "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍","Abhi Toh Party Shuru Hui Hai" ,  "Kya Aapke Toothpaste Mein Namak Hai?" ,"Ye Dosti Hum Nahi Todenge" ,"Aapke Paas Bangla Hai, Gaadi Hai, Paisa Hai...Lekin Mere Paas Maa Hai" ,"Kabhi Kabhi Mujhe Bhi Lagta Hai Ki Main Kuch Jyada Hi Busy Ho Gya Hun 🙄","Chal na yar, movie dekhne chalte hain", "Jaldi se ready ho jao, late ho jayenge", "Kitne baje milna hai?", "Mujhe thoda time do, main abhi free nahi hun",
            "Tu sach mein pagal hai", "Aaj bahut kaam hai, baad mein baat karte hain", "Kya kar rahe ho?", "Tu kahan chala gaya tha?", "Mujhe tujhse baat karni hai", "Kal ka plan kya hai?", "Abhi kya kar rahe ho?", "Mere paas koi time nahi hai", "Jaldi se message ka jawab do", "Main thodi der mein aata hun", "Mere sath chalna hai?", "Aaj bahut maza aaya", "Kya tumne abhi tak khana nahi khaya?", "Mujhe tumse pyar hai", "Tum mere liye kuch bhi kar sakte ho", "Kahan rehte ho?", "Tumne mujhe kitna sataya hai", "Kal milte hain", "Aaj bahut busy tha", "Tum mujhe bahut yaad aate ho", "Mujhe teri zarurat hai", "Kya tumne abhi tak kaam nahi kiya?", "Main tumhare bina nahi reh sakta", "Kya tum mere saath dinner pe chal sakti ho?", "Main tumhe bahut miss karta hun", "Tum meri zindagi ho", "Tumhari yaad mein jeena mushkil hai", "Mujhe tumhari bahut yaad aa rahi hai", "Main tumhare saath hamesha rehna chahta hun",
            "Aaj bahut thaka hua hun", "Kya tum mere liye kuch bhi kar sakti ho?", "Mujhe tumhari aadat si ho gayi hai", "Tumhari muskurahat mere liye bahut important hai", "Kya tum mere saath shopping pe chal sakti ho?", "Mujhe tumse baat karke bahut achha lagta hai", "Tum mujhe bahut khushi deti ho", "Kya tum mere liye kuch special bana sakti ho?", "Mujhe tumhari har baat bahut pasand hai", "Tum mere liye kya ho?", "Main tumhe kabhi nahi bhoolunga", "Kya tum mere saath travel pe chal sakti ho?", "Mujhe tumhare saath time spend karna bahut achha lagta hai", "Tum meri duniya ho", "Mujhe tumse milne ki bahut ichcha hai", "Kya tum mere liye kuch special gift la sakti ho?","hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi",
            "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय अजान जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" , "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" , "यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "मैं हाथ जोड़ के आदि बाबू जी से गुजारिश करता हूं कि तुम्हे कोई जानू ढूंढ के दे। 😜😎😪" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं आदि बाबू को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "हा बोलो आदि बाबू का नंबर चाहिए ये लो 👉[+91 950XXX3608] और हमेशा खुश रहो। 😎", "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈","मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया","तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈","यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈"," आदि से बोलो आई लव यू 😗🤟","तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "मैं सिर्फ प्र का हूं 🙂🤞" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "आप मुझे बार-बार बोट मत बोला करो मेरे नाम आदि है। 😒👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "मेरा बचपन से सपना था की बड़ा हो कर मैं आपका टकलू बाबू बनूगा 😒👈" , "यार मेरी बीवी भाग गई 😭👈" , "मेरा नाम टकलू बाबू है। 😒🤟" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता  😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" ,  "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈👈"];
  
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   if
((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈")) {
     return api.sendMessage("🌸= 𝐇𝐲𝐄 𝐇𝐨𝐖 𝐃𝐢𝐃 𝐓𝐡𝐄 𝐏𝐞𝐈𝐦𝐈𝐭𝐈𝐯𝐄 𝐌𝐚𝐍 𝐂𝐨𝐌𝐞 𝐎𝐮𝐓 𝐎𝐟 𝐓𝐡𝐀 𝐙𝐨𝐎 ? 𝐆𝐨 𝐓𝐨 𝐓𝐡𝐄 𝐙𝐨𝐎 𝐀𝐠𝐀𝐢𝐍 . 𝐖𝐚𝐇𝐭 𝐀𝐫𝐄 𝐘𝐨𝐔 𝐃𝐨𝐈𝐧𝐆 𝐎𝐮𝐓𝐬𝐈𝐝𝐄 ____😁", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("#𝐒𝐈𝐌", threadID);
   };


if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️𝐊𝐢𝐒𝐬 𝐊𝐡𝐔𝐬𝐇𝐢 𝐌𝐞 𝐌𝐚𝐈 𝐒𝐢𝐑𝐟 𝐀𝐩𝐍𝐞 𝐁𝐚𝐁𝐮 𝐊𝐨 𝐊𝐢𝐬𝐒 𝐊𝐚𝐑𝐭𝐀 𝐇𝐮 ___😁😅🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐒𝐨𝐂𝐡 𝐑𝐚𝐇𝐞 𝐇𝐨 𝐈𝐭𝐍𝐚 𝐊𝐨𝐈 𝐍𝐚𝐇𝐢 𝐏𝐚𝐭𝐆𝐚 🤨", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋")) {
     return api.sendMessage("𝐀𝐥𝐋 𝐂𝐡𝐀𝐤 𝐌𝐚𝐈𝐧 𝐀𝐚 𝐆𝐚𝐘𝐚 🙋", threadID);
   };

   if ((event.body.toLowerCase() == "kya kr rahe ho") || (event.body.toLowerCase() == "KYA KR RAHE HO") || (event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "🌸= 𝐊𝐮𝐂𝐡 𝐍𝐚𝐇𝐢 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 𝐀𝐩𝐏𝐬𝐄 𝐁𝐚𝐀𝐭 𝐊𝐚𝐑 𝐑𝐞𝐇𝐢 𝐇𝐮 _____😗😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "bot hume kon banaya") || (event.body.toLowerCase() == "tume kis ne banaya hai")) {
     return api.sendMessage("𝐀𝐚𝐃𝐢 𝐁𝐚𝐁𝐮 𝐉𝐢 𝐍𝐞", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("𝐀𝐚𝐃𝐢 𝐁𝐚𝐁𝐮 𝐉𝐢 𝐍𝐞", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "UFF")) {
     return api.sendMessage("🌸== 𝐇𝐲𝐄 𝐓𝐞𝐑𝐢 𝐮𝐅𝐅 𝐌𝐞𝐑𝐞  😍 ___ 𝐀𝐀𝐃𝐈 𝐁𝐀𝐁𝐔 ___ 😍 𝐁𝐨𝐒𝐬 𝐅𝐢𝐃𝐚 𝐇𝐨 𝐆𝐚𝐘𝐞😁", threadID);
   };

   if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "Call aao?")) {
     return api.sendMessage("📞==🌸 𝐌𝐚𝐈 𝐂𝐚𝐋𝐋 𝐊𝐚𝐈𝐬𝐄 𝐀𝐨𝐎 𝐌𝐚𝐈 𝐓𝐨 𝐁𝐨𝐓 𝐇𝐮 𝐍𝐚 _🥺👈🤸‍♂️", threadID);
   };


   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🙏")) {
     return api.sendMessage("__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️",threadID);
   };

if ((event.body.toLowerCase() == "🤲") ||(event.body.toLowerCase() == "Assalamu alaikum")) {
     return api.sendMessage("Walekum assalam", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("️", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😐😐😐") || (event.body.toLowerCase() == "😐😐😐😐")) {
     return api.sendMessage("🌸= 𝐀𝐢𝐒𝐞 𝐇𝐢 𝐂𝐡𝐔𝐩 𝐂𝐡𝐀𝐩 𝐁𝐚𝐈𝐭𝐇𝐨 ", threadID);
   };

  if
((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️", threadID);
   };

   if ((event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋")) {
     return api.sendMessage("️𝐌𝐞𝐑𝐚 𝐁𝐚𝐁𝐲 𝐀𝐣𝐉 𝐊𝐲𝐀 𝐊𝐡𝐀 𝐋𝐢𝐘𝐚 𝐂𝐡𝐀𝐥𝐨 𝐌𝐚𝐈 𝐀𝐩𝐏𝐧𝐄 𝐇𝐚𝐓𝐡𝐎 𝐒𝐞  --- 𝐆𝐎𝐋𝐀𝐆𝐏𝐏𝐄 𝐊𝐇𝐀𝐋𝐀𝐎 𝐋𝐈𝐊𝐇𝐎 👉  PANI PURI 👈😋😋", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("️𝐉𝐚𝐁𝐚𝐍 𝐀𝐧𝐃𝐚𝐑 𝐊𝐚𝐑𝐨 𝐁𝐚𝐑𝐧𝐀  ___𝐀𝐀𝐃𝐈 __𝐁𝐀𝐁𝐔 __ 𝐒𝐞 𝐊𝐡𝐀 𝐊𝐞 𝐊𝐚𝐓𝐛𝐀 𝐃𝐮𝐍𝐠𝐀 🤸‍♂️😸.", threadID);
   };

   if ((event.body.toLowerCase() == "main hu") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️🌸= 𝐇𝐦𝐌 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 𝐁𝐨𝐋𝐨 𝐁𝐚𝐁𝐮 ____😘❤️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "Land")) {
     return api.sendMessage("️𝐆𝐚𝐍𝐝 𝐌 𝐉𝐲𝐀𝐝𝐀 𝐊𝐡𝐔𝐋𝐢 𝐇𝐚𝐢 𝐓𝐨𝐇 𝐁𝐚𝐍𝐚𝐍𝐚 𝐔𝐧𝐃𝐚𝐑 𝐋𝐞 𝐋𝐞 . :))))", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡")) {
     return api.sendMessage("️️🥺 𝐌 𝐓𝐨𝐇 𝐒𝐢𝐑𝐟 𝐌𝐚𝐙𝐚𝐊 𝐊𝐚𝐑 𝐑𝐡𝐀 𝐓𝐡𝐀 🥺🥺 𝐆𝐮𝐒𝐬𝐀 𝐌𝐚𝐓 𝐊𝐚𝐑𝐨 𝐄𝐞 𝐂𝐡𝐔𝐦𝐌𝐢 𝐋𝐨 𝐀𝐮𝐑 𝐒𝐡𝐀𝐧𝐓 𝐑𝐚𝐇𝐨 😘", threadID);
   };
 
   if ((event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("🌸= 𝐌𝐮𝐇 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑𝐨 𝐕𝐚𝐑𝐧𝐀 𝐌𝐚𝐊𝐤𝐇𝐢 𝐆𝐡𝐔𝐬 𝐉𝐚𝐘𝐠𝐈 ___ 😈🙄🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥🔥")) {
     return api.sendMessage("𝐀𝐚𝐆 𝐋𝐚𝐆𝐚 𝐃𝐢 𝐈𝐬𝐍𝐞 𝐆𝐫𝐎𝐮𝐏 𝐌𝐚𝐈 𝐁𝐡𝐀𝐠𝐎𝐀𝐀𝐆 𝐋𝐀𝐆𝐀 𝐃𝐈 𝐈𝐒𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍 𝐁𝐇𝐀𝐆𝐎 😁", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🌸== 𝐌𝐚𝐈 𝐓𝐨 𝐌𝐚𝐒𝐭 𝐇𝐮 𝐀𝐚𝐏 𝐁𝐚𝐓𝐚𝐎 𝐊𝐚𝐈𝐬𝐄 𝐇𝐨 ___😗𒁍•🦋🙃", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("𝐊𝐲𝐀 𝐇𝐮𝐘𝐚 𝐀𝐚𝐍𝐤𝐇𝐨 𝐌𝐞 𝐍𝐚𝐌𝐢 𝐤𝐄𝐬𝐞 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛🥰आदि बाबू❤️ *★᭄ ཫ༄𒁍≛ 』====🌸__💙 Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛आदि❤️बाबू❤ *★᭄ ཫ༄𒁍≛ 』====🌸__💙I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

   if ((event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("𝐀𝐫𝐄 𝐀𝐫𝐄 𝐋𝐢𝐏𝐬 𝐊𝐚𝐇𝐚 𝐆𝐚𝐘𝐞  𝐆𝐅/𝐁𝐅 𝐊𝐞  𝐒𝐚𝐓𝐡  𝐊𝐢𝐒𝐬  𝐊𝐚𝐑𝐭𝐄  𝐓𝐢𝐌𝐞  𝐔𝐬𝐈  𝐍𝐞  𝐓𝐨  𝐍𝐚𝐇𝐢  𝐊𝐚𝐀  𝐋𝐢𝐘𝐞 😛😜🤪", threadID);
   };

   if ((event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐡𝐎𝐨𝐓 𝐃𝐚𝐊𝐡 𝐋𝐢𝐘𝐚 𝐊𝐲𝐀 👻 👻", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: ` ${name} \n____________________________________\n\n${rand}\n____________________________________ \n𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }