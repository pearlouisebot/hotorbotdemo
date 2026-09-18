export interface Person {
  id: string
  name: string
  age: number
  distance: number
  clipUrl: string
  posterUrl: string
  prompt: string
  caption: string
  verified: boolean
  isSynthetic: boolean
}

const P1 = 'my worst travel story'
const P2 = 'the moment I knew I was actually an adult'
const P3 = 'the most embarrassing thing I have ever ordered'
const P4 = 'my unpopular food opinion'
const P5 = 'the last thing I lied about'
const P6 = 'the skill I would never put on a resume'
const P7 = 'my weirdest recurring nightmare'
const P8 = 'my first impression of this city'

export const PEOPLE: Person[] = [
  // Prompt 1 — my worst travel story
  { id:'p1', name:'Maya Chen', age:28, distance:1.2, clipUrl:'/clips/clip_1.mp4', posterUrl:'/clips/poster_1.jpg', prompt:P1, caption:'I missed a connecting flight in Istanbul and ended up stranded for 36 hours with nothing but a carry-on and nine dollars. I learned that airport benches are not beds and that Turkish coffee at 3am is a mistake.', verified:true, isSynthetic:false },
  { id:'p2', name:'Priya Sharma', age:31, distance:2.8, clipUrl:'/clips/clip_2.mp4', posterUrl:'/clips/poster_2.jpg', prompt:P1, caption:'My bag ended up in Oslo when I was headed to Lisbon. I spent four days in Portugal wearing the same dress and aggressively window shopping. Honestly it was freeing.', verified:false, isSynthetic:false },
  { id:'p3', name:'Zoe Nakamura', age:26, distance:0.8, clipUrl:'/clips/clip_3.mp4', posterUrl:'/clips/poster_3.jpg', prompt:P1, caption:'I booked a hostel in Prague and showed up to find out it was a boat. A literal boat. On a river. I am a terrible swimmer and I did not sleep for two nights.', verified:true, isSynthetic:false },
  { id:'p4', name:'Jordan Mills', age:29, distance:3.4, clipUrl:'/clips/clip_4.mp4', posterUrl:'/clips/poster_4.jpg', prompt:P1, caption:'I confidently led my whole family through the wrong terminal for two hours in Tokyo. We missed the bullet train. My mom still brings it up at Thanksgiving.', verified:false, isSynthetic:true },
  { id:'p5', name:'Camille Dubois', age:33, distance:1.9, clipUrl:'/clips/clip_5.mp4', posterUrl:'/clips/poster_5.jpg', prompt:P1, caption:'Rented a scooter in Bali, drove into a ditch within the first ten minutes, and then tried to play it cool in front of locals who absolutely saw everything. Zero dignity, great story.', verified:true, isSynthetic:false },

  // Prompt 2 — the moment I knew I was actually an adult
  { id:'p6', name:'Sofia Martinez', age:27, distance:0.5, clipUrl:'/clips/clip_6.mp4', posterUrl:'/clips/poster_6.jpg', prompt:P2, caption:'I called a plumber, paid him, and felt genuinely proud of myself for three days. That was it. That was the whole moment. I am still proud of it.', verified:true, isSynthetic:false },
  { id:'p7', name:'Nadia Okafor', age:30, distance:4.1, clipUrl:'/clips/clip_7.mp4', posterUrl:'/clips/poster_7.jpg', prompt:P2, caption:'When I started getting excited about a really good mattress. I saw an ad, paused it, rewound it, and watched it again. Something shifted that day and I cannot explain it.', verified:false, isSynthetic:false },
  { id:'p8', name:'Taylor Brooks', age:25, distance:2.2, clipUrl:'/clips/clip_8.mp4', posterUrl:'/clips/poster_8.jpg', prompt:P2, caption:'I turned down plans to stay home, clean my apartment, and then felt deeply satisfied afterward. Nobody warned me this would happen. It just happens to you one day.', verified:true, isSynthetic:true },
  { id:'p9', name:'Zoe Kim', age:32, distance:1.7, clipUrl:'/clips/clip_9.mp4', posterUrl:'/clips/poster_9.jpg', prompt:P2, caption:'The first time I made a doctor appointment without my mom and did not panic. I sat there filling out the forms like a normal person and thought: okay, I live here now.', verified:false, isSynthetic:false },
  { id:'p10', name:'Isabelle Fontaine', age:28, distance:3.8, clipUrl:'/clips/clip_10.mp4', posterUrl:'/clips/poster_10.jpg', prompt:P2, caption:'I started keeping snacks in my car. Not emergency snacks. Intentional snacks. That is when I knew. It sounds small. It was not small.', verified:true, isSynthetic:false },

  // Prompt 3 — the most embarrassing thing I have ever ordered
  { id:'p11', name:'Ava Johnson', age:24, distance:0.9, clipUrl:'/clips/clip_1.mp4', posterUrl:'/clips/poster_1.jpg', prompt:P3, caption:'A $22 salad on a first date that I did not even want. I was trying to seem low-maintenance and ordered the most expensive thing on the menu by accident. He definitely saw the price.', verified:false, isSynthetic:false },
  { id:'p12', name:'Lily Chen', age:29, distance:2.5, clipUrl:'/clips/clip_2.mp4', posterUrl:'/clips/poster_2.jpg', prompt:P3, caption:'A personalized blanket with my dog\'s face on it. Three of them. I was going through something. The blankets are genuinely excellent and I regret nothing.', verified:true, isSynthetic:false },
  { id:'p13', name:'Emma Walsh', age:31, distance:1.3, clipUrl:'/clips/clip_3.mp4', posterUrl:'/clips/poster_3.jpg', prompt:P3, caption:'I ordered an extremely complicated coffee at a busy diner — oat milk, specific temperature, light foam — and the waitress just looked at me and said "we have coffee." I had coffee.', verified:false, isSynthetic:false },
  { id:'p14', name:'Mia Patel', age:26, distance:4.6, clipUrl:'/clips/clip_4.mp4', posterUrl:'/clips/poster_4.jpg', prompt:P3, caption:'A meal kit subscription I kept pausing but never canceling for eight months. I spent two hundred dollars on ingredients I forgot in the fridge while ordering delivery every night.', verified:true, isSynthetic:true },
  { id:'p15', name:'Grace Liu', age:27, distance:0.7, clipUrl:'/clips/clip_5.mp4', posterUrl:'/clips/poster_5.jpg', prompt:P3, caption:'I drunkenly ordered a full birthday party setup for myself — balloons, banner, cake — at 2am. Woke up completely sober, tried to cancel, could not. Best Saturday I ever had alone.', verified:false, isSynthetic:false },

  // Prompt 4 — my unpopular food opinion
  { id:'p16', name:'Hannah Park', age:23, distance:1.5, clipUrl:'/clips/clip_6.mp4', posterUrl:'/clips/poster_6.jpg', prompt:P4, caption:'Brunch is not a meal. It is a financial decision and almost always the wrong one. I have said this to people and watched friendships cool in real time.', verified:true, isSynthetic:false },
  { id:'p17', name:'Chloe Wang', age:30, distance:3.2, clipUrl:'/clips/clip_7.mp4', posterUrl:'/clips/poster_7.jpg', prompt:P4, caption:'Truffle oil should be banned. It is never real truffle, everyone knows it is fake, and yet we keep ordering it. It smells like a chemistry lab and tastes like a lie.', verified:false, isSynthetic:false },
  { id:'p18', name:'Olivia Smith', age:28, distance:0.4, clipUrl:'/clips/clip_8.mp4', posterUrl:'/clips/poster_8.jpg', prompt:P4, caption:'Cold pizza is better than hot pizza and I will not argue about this anymore. The cheese sets. The crust firms up. It becomes something else entirely. People are wrong.', verified:true, isSynthetic:false },
  { id:'p19', name:'Ruby Tran', age:25, distance:2.9, clipUrl:'/clips/clip_9.mp4', posterUrl:'/clips/poster_9.jpg', prompt:P4, caption:'Soup is a beverage. You drink it. The fact that we use spoons is a social construct. I have never once felt full from soup and I think we all secretly agree.', verified:false, isSynthetic:true },
  { id:'p20', name:'Stella Kim', age:33, distance:1.1, clipUrl:'/clips/clip_10.mp4', posterUrl:'/clips/poster_10.jpg', prompt:P4, caption:'Dessert menus should come out before dinner so you can plan accordingly. Nobody wants to be committed to pasta and then see a chocolate soufflé. This is basic logistics.', verified:true, isSynthetic:false },

  // Prompt 5 — the last thing I lied about
  { id:'p21', name:'Jade Wilson', age:27, distance:0.6, clipUrl:'/clips/clip_1.mp4', posterUrl:'/clips/poster_1.jpg', prompt:P5, caption:'I told my coworker her presentation was great. It had seventeen slides and ten of them were the same chart with a different color. I smiled through all of it.', verified:false, isSynthetic:false },
  { id:'p22', name:'Luna Rodriguez', age:29, distance:3.7, clipUrl:'/clips/clip_2.mp4', posterUrl:'/clips/poster_2.jpg', prompt:P5, caption:'I said I had already seen that movie when someone mentioned it, then went home and watched it immediately so I would not have to feel bad about missing it. It was fine. Not worth the lie.', verified:true, isSynthetic:false },
  { id:'p23', name:'Aria Thompson', age:26, distance:1.8, clipUrl:'/clips/clip_3.mp4', posterUrl:'/clips/poster_3.jpg', prompt:P5, caption:'I told someone I was five minutes away when I had not left yet. I am working on this. It is a character flaw I am aware of and actively making worse.', verified:false, isSynthetic:false },
  { id:'p24', name:'Nova Davis', age:31, distance:2.1, clipUrl:'/clips/clip_4.mp4', posterUrl:'/clips/poster_4.jpg', prompt:P5, caption:'I pretended to be interested in golf for an entire dinner. I do not know anything about golf. I described a shot I had apparently made, details and everything. I have never once held a club.', verified:true, isSynthetic:true },
  { id:'p25', name:'Skye Anderson', age:24, distance:4.3, clipUrl:'/clips/clip_5.mp4', posterUrl:'/clips/poster_5.jpg', prompt:P5, caption:'I told my mom I eat vegetables. I eat the vegetables she makes when I visit. Between visits there is a significant vegetable gap that I am choosing not to address right now.', verified:false, isSynthetic:false },

  // Prompt 6 — the skill I would never put on a resume
  { id:'p26', name:'Violet Brown', age:28, distance:0.9, clipUrl:'/clips/clip_6.mp4', posterUrl:'/clips/poster_6.jpg', prompt:P6, caption:'I can identify the decade a carpet was installed just by looking at it. I have no idea why I know this. It has come up twice and both times I was right and both times people were unsettled.', verified:true, isSynthetic:false },
  { id:'p27', name:'Willow Jackson', age:32, distance:2.6, clipUrl:'/clips/clip_7.mp4', posterUrl:'/clips/poster_7.jpg', prompt:P6, caption:'I am very fast at mental math for restaurant splits. People think it is helpful. What they do not know is that I am also silently judging everyone at the table for what they ordered.', verified:false, isSynthetic:false },
  { id:'p28', name:'Aurora Harris', age:25, distance:1.4, clipUrl:'/clips/clip_8.mp4', posterUrl:'/clips/poster_8.jpg', prompt:P6, caption:'I can fall asleep anywhere in under four minutes. Planes, cars, waiting rooms, once at a concert. I am not proud. I am just built differently and I have accepted this about myself.', verified:true, isSynthetic:false },
  { id:'p29', name:'Indigo Lewis', age:30, distance:3.9, clipUrl:'/clips/clip_9.mp4', posterUrl:'/clips/poster_9.jpg', prompt:P6, caption:'I am exceptional at remembering the names of minor characters from shows I watched years ago. It comes up at trivia nights and approximately nowhere else in life.', verified:false, isSynthetic:true },
  { id:'p30', name:'Crimson Clark', age:27, distance:0.8, clipUrl:'/clips/clip_10.mp4', posterUrl:'/clips/poster_10.jpg', prompt:P6, caption:'I can parallel park perfectly on the first try in basically any space. It is not useful in Austin. It is not useful anywhere cars have parking lots. But it is mine and I am keeping it.', verified:true, isSynthetic:false },

  // Prompt 7 — my weirdest recurring nightmare
  { id:'p31', name:'Ember White', age:26, distance:2.3, clipUrl:'/clips/clip_1.mp4', posterUrl:'/clips/poster_1.jpg', prompt:P7, caption:'I am always late to an exam for a class I forgot I enrolled in. I am also inexplicably wearing a coat that is too small for me. I wake up and check my calendar every time.', verified:false, isSynthetic:false },
  { id:'p32', name:'Sage Martin', age:29, distance:1.6, clipUrl:'/clips/clip_2.mp4', posterUrl:'/clips/poster_2.jpg', prompt:P7, caption:'I am in a mall that keeps expanding. Every store I pass opens into another store. I need to find the exit but I also keep stopping to look at things. Very on-brand for me honestly.', verified:true, isSynthetic:false },
  { id:'p33', name:'River Hall', age:31, distance:4.8, clipUrl:'/clips/clip_3.mp4', posterUrl:'/clips/poster_3.jpg', prompt:P7, caption:'My teeth just slowly become loose and fall out one by one. I have googled this dream. Apparently it means stress or a fear of losing control. That tracks. That tracks completely.', verified:false, isSynthetic:false },
  { id:'p34', name:'Storm Young', age:24, distance:0.5, clipUrl:'/clips/clip_4.mp4', posterUrl:'/clips/poster_4.jpg', prompt:P7, caption:'I am performing in a play I have never rehearsed, the curtain is already going up, and everyone in the audience is someone I have disappointed in real life. Very relaxing.', verified:true, isSynthetic:true },
  { id:'p35', name:'Haven Allen', age:28, distance:3.1, clipUrl:'/clips/clip_5.mp4', posterUrl:'/clips/poster_5.jpg', prompt:P7, caption:'I am driving a car from the back seat with no one in the front. I cannot reach the wheel properly, I cannot find the brake, and traffic is somehow completely normal around me.', verified:false, isSynthetic:false },

  // Prompt 8 — my first impression of this city
  { id:'p36', name:'Eden Scott', age:30, distance:1.0, clipUrl:'/clips/clip_6.mp4', posterUrl:'/clips/poster_6.jpg', prompt:P8, caption:'I thought everyone was extremely friendly and wondered what was wrong. I was from New York. It took me a full year to understand that nothing was wrong. People are just like that here.', verified:true, isSynthetic:false },
  { id:'p37', name:'Wren Baker', age:25, distance:2.7, clipUrl:'/clips/clip_7.mp4', posterUrl:'/clips/poster_7.jpg', prompt:P8, caption:'I showed up in July and genuinely thought I had made an error. Nobody told me what July was actually like here. I called my mom from a parking lot and reconsidered my entire life plan.', verified:false, isSynthetic:false },
  { id:'p38', name:'Quinn Nelson', age:27, distance:0.3, clipUrl:'/clips/clip_8.mp4', posterUrl:'/clips/poster_8.jpg', prompt:P8, caption:'The tacos immediately fixed everything I was worried about. I had been nervous about the move for months. Then I had the tacos and thought okay, I can build a life here. And I did.', verified:true, isSynthetic:false },
  { id:'p39', name:'Bryn Carter', age:32, distance:4.5, clipUrl:'/clips/clip_9.mp4', posterUrl:'/clips/poster_9.jpg', prompt:P8, caption:'Everyone kept asking if I had been to the bats. I did not know what that meant. I nodded anyway. It took me three months to actually go. It is a lot of bats. I was not prepared.', verified:false, isSynthetic:true },
  { id:'p40', name:'Remy Mitchell', age:26, distance:1.9, clipUrl:'/clips/clip_10.mp4', posterUrl:'/clips/poster_10.jpg', prompt:P8, caption:'I thought the traffic was fine at first. I had moved on a Sunday morning in February. I did not understand until my second week what I had actually signed up for. No one warned me.', verified:true, isSynthetic:false },
]

export const YOU: Person = {
  id: 'you',
  name: 'You',
  age: 29,
  distance: 0,
  clipUrl: '/clips/clip_you_a.mp4',
  posterUrl: '/clips/poster_you.jpg',
  prompt: '',
  caption: '',
  verified: true,
  isSynthetic: false,
}
