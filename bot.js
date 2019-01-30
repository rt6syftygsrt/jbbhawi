const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NDM4MzcxMjQzODAxMDUxMTQx.DyuL0w.2YKPerRUndolKHXoa2O6NaBvNjY'); 


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          



         

client.on('تثبيت', () => {
var x = client.channels.get("504807381373419541");
if (x) x.join();
});





const  adminprefix  =  " $ " ؛
const  devs  = [ ' 496597218195800084 ' ، ' 438371243801051141 ' ]؛
العميل . على ( ' message ' ، message  => {
  var argresult =  message . محتوى . انقسام ( `  ` ). شريحة ( 1 ). انضمام ( '  ' )؛
    اذا ( ! devs . تتضمن ( message . author . id )) return ؛
    
إذا كان ( message . content . يبدأ بـ (adminprefix +  ' بلاي ' )) {
  العميل . المستخدم . setGame (argresult)؛
    رسالة . قناة . sendMessage ( ` ** $ { argresult } تم تغيير بلاينق البوت إلى ** ` )
} آخر 
  إذا كان ( message . content . يبدأ بـ (adminprefix +  ' نيم ' )) {
العميل . المستخدم . setUsername (argresult). ثم
    رسالة . قناة . sendMessage ( ` ** $ { argresult } **: تم تغيير أسم البوت إلى ` )
 رسالة العودة . الرد ( " ** لا يمكن تغيير الاسم يجب عليك الانتظآر لمدة ساعتين. ** " )؛
} آخر
  إذا كان ( message . content . تبدأ (adminprefix +  ' افتار ' )) {
العميل . المستخدم . setAvatar (argresult)؛
  رسالة . قناة . sendMessage ( ` ** $ { argresult } **: تم تغير صورة البوت ` )؛
      } آخر     
إذا كان ( message . content . يبدأ بـ (adminprefix +  ' ستريم ' )) {
  العميل . المستخدم . setGame (argresult، " https://www.twitch.tv/idk " )؛ // wennnn
    رسالة . قناة . sendMessage ( ` ** تم تغيير تويتش البوت إلى   $ { argresult } ** ` )
}
})؛



