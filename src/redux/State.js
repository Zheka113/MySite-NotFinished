let state = {
    postData:[
        {text:'My first post', like:5},
        {text:'Do you like music?', like:7},
        {text:'It is a logo by Sportify', like:15},
        {text:'I can better', like:9},
        {text:'Belive me', like:0}
    ],
    messagesData:{
        AndrewChatData:[
            {peopleName:'Andrew', 
            messageContent:'Hello!', 
            imgAdress:'https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png'},

            {peopleName:'Me', 
            messageContent:'Hi. Where are your from?', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Andrew', 
            messageContent:'I\'m from your code))', 
            imgAdress:'https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png'},

            {peopleName:'Me', 
            messageContent:'Bot...', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Andrew', 
            messageContent:'😭', 
            imgAdress:'https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png'}
        ],

        DmitryChatData:[
            {peopleName:'Dmitry', 
            messageContent:'Hello! I think that you can give me smiles)))', 
            imgAdress:'https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png'},

            {peopleName:'Me', 
            messageContent:'Hi. What i take from you?', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Dmitry', 
            messageContent:'Thanks?)', 
            imgAdress:'https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png'},

            {peopleName:'Me', 
            messageContent:'...', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Dmitry', 
            messageContent:'😱 🙀 ℹ 💗 👇', 
            imgAdress:'https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png'}
        ],

        SashaChatData:[
            {peopleName:'Me', 
            messageContent:'Hi. Who are you?', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Me', 
            messageContent:'HEY!!!', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Me', 
            messageContent:'Dont ignore me!', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Me', 
            messageContent:'I can delete you!', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Sasha', 
            messageContent:'Oh no......', 
            imgAdress:'https://banner2.cleanpng.com/20180622/jpz/kisspng-circle-logo-clip-art-kero-5b2ce282e43848.1651177015296682269348.jpg'},
            
            {peopleName:'Sasha', 
            messageContent:'Dont kill me 😰', 
            imgAdress:'https://banner2.cleanpng.com/20180622/jpz/kisspng-circle-logo-clip-art-kero-5b2ce282e43848.1651177015296682269348.jpg'},

            {peopleName:'Admin', 
            messageContent:'Sasha has been killed.', 
            imgAdress:'https://miro.medium.com/max/2400/2*ErHzItrSYBAPV8YjaNY7Mg.jpeg'}
        ],

        SvetaChatData:[
            {peopleName:'Me', 
            messageContent:'Hello', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Sveta', 
            messageContent:'Hello', 
            imgAdress:'https://w0.pngwave.com/png/283/254/logo-circle-point-font-circle-png-clip-art.png'},

            {peopleName:'Me', 
            messageContent:'Googbye', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Sveta', 
            messageContent:'Googbye', 
            imgAdress:'https://w0.pngwave.com/png/283/254/logo-circle-point-font-circle-png-clip-art.png'}
        ],

        ValeraChatData:[
            {peopleName:'Me', 
            messageContent:'Hello', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Valera', 
            messageContent:'Дарова, нафиг этот инглишь)', 
            imgAdress:'https://i.pinimg.com/originals/78/eb/4a/78eb4a5d75692d02cb6ecd0635462482.jpg'},

            {peopleName:'Me', 
            messageContent:'Согласен. Трудный язык.', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Valera', 
            messageContent:'Как сам?', 
            imgAdress:'https://i.pinimg.com/originals/78/eb/4a/78eb4a5d75692d02cb6ecd0635462482.jpg'},

            {peopleName:'Me', 
            messageContent:'Всё круто, когда пишешь на русском)', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'}
        ],

        VictorChatData:[
            {peopleName:'Victor', 
            messageContent:'You have mistakes', 
            imgAdress:'https://ae01.alicdn.com/kf/HTB1hoAgHHGYBuNjy0Foq6AiBFXaz/Nirvana.jpg'},

            {peopleName:'Me', 
            messageContent:'Where?', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Victor', 
            messageContent:'Anywhere', 
            imgAdress:'https://ae01.alicdn.com/kf/HTB1hoAgHHGYBuNjy0Foq6AiBFXaz/Nirvana.jpg'},

            {peopleName:'Me', 
            messageContent:'☹', 
            imgAdress:'https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo'},

            {peopleName:'Admin', 
            messageContent:'This is a joke))', 
            imgAdress:'https://miro.medium.com/max/2400/2*ErHzItrSYBAPV8YjaNY7Mg.jpeg'}
        ]
    }
}

export default state