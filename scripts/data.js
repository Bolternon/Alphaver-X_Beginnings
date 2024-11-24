//Nongame Values
let isTitle = true;
let inGame = false;
let cutscene = 0;
//Coordinate Values
let posX = 8;
let posZ = 4;
let dir = 0;
let level = 0;
//UI Values
let inMenu = false;
let inAction = false;
let menuPos = 0;
let actionPos = 0;
let inText = false;
//Status Values
let statVal = [
    1, //lvl
    10, //hp
    10, //maxhp
    2, //atk
    1, //def
    0, //wis
    0  //$
];
let exp = 0;
//Item Values
let itemUse = false;
let itemVal = [
    0, //pears
    0, //obsidian pears
    0  //molotovs
];
let sealedjar = false;
//Battle Values
let canFight = false;
let inBattle = false;
let inDefense = false;
let singleUse = false;
let isBoss = false;
let battlePos = 0;
let battleItemPos = 0;
let battleItem = 0;
let sequence = 0;
let enemyHP = 0;
let dmg = 0;
const enemydata = [[3,1,0,5],[6,2,1,10],[9,3,2,15]];
let gains = 0;
let itemGain = [0,0,0];
//Text has maximum of 6 rows, and 26 chars.
const textEvent = [
    //Prison
    [
        [false,23,23,0,["155CHAN", "WHERE AM I? WHAT IS THIS", "PLACE ANYWAYS? SO DUSTY..."]],
        [false,23,22,0,["155CHAN", "I HAVE TO FIND A WAY OUT!", "XORCHAN COULD BE IN DANGER"]],
        [false,22,21,3,["ONECHAN", "YOU ARE NEVER ESCAPING", "THIS PLACE ALIVE, SO DONT","BOTHER TRYING..."]],
        [false,21,21,3,["155CHAN", "WHAT!? I DONT SEE HER", "HOW CAN I HEAR HER!"]],
        [false,9,16,0,["155CHAN", "I SENSE A STRONG ENERGY", "IN THERE."]],
        [false,10,12,1,["155CHAN", "I SEE AN ITEM ON THE FLOOR", "SHOULD I PICK IT UP?"]],
        [false,4,1,3,["155CHAN", "YOU MUST BE ONECHAN", "WITH ALL THE YELLOW!", "WHY YOU SENT ME HERE?", "WHY YOU WANT THIS GEM?"]],
        [false,3,1,3,["ONECHAN", "I WONT GIVE ANSWERS,", "I DONT WANT TO DEFY ZERO", "SHE MUST BECOME GOD", "FOR SCIENTIFIC REASON."]],
    ],
    //Hub
    [
        [false,11,24,0,["155CHAN", "WOAH, THIS PLACE LOOKS", "LIKE A SEWER SYSTEM", "BUT VERY HIGH TECH"]],
        [false,11,16,0,["155CHAN", "UWAAAHHH, IS THIS ANOTHER", "MAZE? GIVE ME A BREAK!"]],
        [false,13,14,0,["155CHAN", "THERES A DOOR IN HERE", "IT LEADS TO NEW PYTEEMA!"]],
        [false,9,14,0,["155CHAN", "THERES A DOOR IN HERE", "IT LEADS TO NOWHERE TOWN!"]],
        [false,13,6,3,["ZEROCHAN", "YOU POSSESS A POWERFUL GEM", "IF YOUR GONNA DEFEAT ME", "YOUR GONNA HAVE DEFEAT MY", "MY SEVEN EVIL DEVELOPERS!"]],
        [false,12,6,3,["155CHAN", "ZERO! I WILL STOP YOU!", "YOUR LOOKS DO NOT SCARE ME"]],
        [false,11,6,2,["ZEROCHAN", "VERY WELL THEN.", "SHOW ME IF YOU ARE WORTHY", "TO BE GRANTED WITH THE", "NEBULUS POWER!"]],
    ],
    //HQ
    [
        [false,0,24,0,["155CHAN", "SO THIS IS THE 3EMJ", "HQ, BUT WHERE COULD I FIND", "ZEROCHAN HIDING AT?"]],
        [false,3,17,3,["155CHAN", "THIS ROOM IS FULL OF", "TECHNOLOGY!"]],
        [false,3,14,3,["155CHAN", "THIS ROOM IS FULL OF", "GUN STUFF!"]],
        [false,3,11,3,["155CHAN", "THIS ROOM IS FULL OF", "GREENTECH COMPONENTS!"]],
        [false,4,17,1,["155CHAN", "THIS ROOM IS FULL OF", "RANDOM CRAP!"]],
        [false,4,14,1,["155CHAN", "THIS ROOM IS FULL OF", "TECHNOLOGY!"]],
        [false,4,11,1,["155CHAN", "THIS ROOM IS FULL OF", "COL3NCHAN MERCH!", "WOAW..."]],
        [false,9,17,3,["155CHAN", "THIS ROOM IS FULL OF", "TELEPORTATION STUFF!"]],
        [false,9,14,3,["155CHAN", "THIS ROOM IS FULL OF", "TECHNOLOGY!"]],
        [false,9,11,3,["155CHAN", "THIS ROOM IS EMPTY."]],
        [false,10,17,1,["155CHAN", "THIS ROOM IS FULL OF", "TECHNOLOGY!"]],
        [false,10,14,1,["155CHAN", "THIS ROOM IS FULL OF", "GREENTECH COMPONENTS!"]],
        [false,10,11,1,["155CHAN", "THIS ROOM IS FULL OF", "PHONE STUFF AND", "MATERIAL PROJECTORS!"]],
        [false,10,24,0,["155CHAN", "THIS ROOM IS FULL OF", "CONTAINERS OF SLIME", "AND GLOWING BLUE LIGHTS!"]],
        [false,13,24,0,["155CHAN", "THIS ROOM IS FULL OF", "ANCIENT ARTIFACTS", "AND ANCIENT LANGUAGES!"]],
        [false,13,21,0,["155CHAN", "THERES AN ANCIENT PEDESTAL", "HERE, LOOKS LIKE SOMETHING", "USED TO BELONG TO IT."]],
        [false,23,20,3,["155CHAN", "I FOUND YOU, ZERO!", "THIS IS YOUR END!"]],
        [false,22,20,3,["ZEROCHAN", "I WILL NOT FIGHT YOU. ITS", "TIME TO WITNESS THE BIRTH", "OF MY ARTIFICIAL CREATIONS", "WITH ONE SMALL DOSE OF", "CELESTIAL FLAMES!"]],
    ]
];
const intrEvent = [
    //Prison
    [
        [0,0,4,["155CHAN", "UMM, THERES NOTHING HERE", "TO INTERACT WITH..."]],
        [23,23,2,["155CHAN", "I MUSTVE BEEN ASLEEP", "FOR SOME TIME HERE..."]],
        [20,18,1,["155CHAN", "THATS A LOT OF SKELETONS", "I HOPE THIS ISNT SOME CULT"]],
        [10,12,1,["155CHAN", "...A SEALED JAR???", "ITS LABEL IS WRITTEN", "IN AN ANCIENT LANGUAGE.", "I CANT READ IT!"]],
        [12,4,0,["155CHAN", "A SIGN THAT SAYS", "THIS MAZE IS UNBEATABLE!", "CONTACT FOUR IF YOU CAN", "CLEAR THIS MAZE."]],
        [16,5,3,["155CHAN", "A SIGN THAT SAYS", "YOU BEAT THE MAZE!", "CONGRATS! YOU WIN FOURS", "HIDDEN SECRET..."]],
    ],
    //Hub
    [
        [0,0,4,["155CHAN", "UMM, THERES NOTHING HERE", "TO INTERACT WITH..."]],
        [13,11,0,["155CHAN", "I DONT WANNA GO TO", "NEW PYTEEMA, THE LOCALS", "SCARE THE HELL OUT ME", "AND THEIR...CULTURE..."]],
        [9,11,0,["155CHAN", "IF I WENT TO NOWHERE TOWN", "ID BE IN THE MIDDLE OF", "NOWHERE! NO WAY IM", "GETTING BACK HOME!"]],
        [15,10,1,["155CHAN", "THIS DOOR LEADS TO SOME", "BUISINESS OFFICE, DONT", "WANT TO DISTURB THEM."]],
        [20,15,1,["155CHAN", "THIS DOOR LEADS TO", "BLOSSOM HILLS.","","THERE IS NO ESCAPE."]],
    ],
    //HQ
    [
        [0,0,4,["155CHAN", "UMM, THERES NOTHING HERE", "TO INTERACT WITH..."]],
        [13,21,0,["155CHAN", "THERES AN ANCIENT PEDESTAL", "HERE, ITS WRITTEN IN AN", "ANCIENT LANGUAGE."]],
    ],
];
const itemEvent = [
    ["YOU CANNOT USE THIS ITEM!", "", "THIS SLOT IS EMPTY!!!"],
    ["YOU ATE A PEAR...", "", "5HP WAS RESTORED!"],
    ["YOU ATE AN OBSIDIAN PEAR!", "", "YOU QUESTION ITS EXISTANCE", "", "25HP WAS RESTORED!"],
    ["YOU CANNOT USE MOLOTOVS", "OUTSIDE OF BATTLE.","","","DIDNT XORCHAN TEACH YOU","BETTER?"],
    ["YOU TRIED TO USE THE JAR.", "", "THIS SPOT HAS NO EFFECT..", "", "TRY SOMEWHERE ELSE..."],
    ["???", "THANK YOU FOR FREEING ME", "FROM THE ETERNAL VOID!", "THE VOID*REALM IS SCARY...", "", "I SHALL GRANT YOU WISDOM!"],
];
const cutsEvent = [
    [
        "IT ALL BEGAN WHEN 155CHAN",
        "AND XORCHAN LEFT THE CITY",
        "TO FIND INSPIRATION, UNTIL",
        "ONE DAY THEY FOUND A",
        "STRANGE GEMSTONE IN THE",
        "LAKE, THIS WAS A FRAGMENT",
        "OF A GOD NAMED NEBULUS.",
        "A POWERFUL GOD WHO CAN",
        "BEND REALITY IF MADE WHOLE",
        "SUDDENLY, THEY WERE",
        "SWARMED BY RECRUITERS SENT",
        "BY AN IDIVIDUAL NAMED ZERO",
        "ZEROCHAN HAS 6 OF THE 7",
        "FRAGMENTS ALREADY!",
        "ZEROCHAN WOULD BECOME A",
        "GOD IF SHE COLLECTS THEM",
        "ALL!",
        "",
        "",
        "                  CONTINUE",
    ],
    [
        "EACH FRAGMENT GRANTS THE",
        "WEILDER A POWERFUL ABILITY",
        "THE FRAGMENT 155CHAN HAS",
        "GIVES HER SUPER STRENGTH.",
        "SHE AND XOR ARE ABLE TO",
        "DEFEND FROM THE RECRUITERS",
        "THANKS TO NEBULUS POWER!",
        "ZERO IS FED UP AND DECIDES",
        "TO CONFRONT THEM DIRECTLY!",
        "SHE BANISHES 155CHAN TO",
        "THE ASH PRISON, AND LOCKS",
        "XORCHAN IN HER OWN HOUSE.",
        "ZERO ASSUMES XOR HAS THE",
        "FRAGMENT, BUT REALIZES",
        "XORCHAN IS JUST WASTING",
        "TIME TO STALL HER HUNT",
        "TOWARDS 155CHAN.",
        "",
        "",
        "                  CONTINUE",
    ],
    [
        "ZEROCHAN TASKS ONECHAN,",
        "WHOS IN CHARGE OF THE",
        "ASH PRISON, TO KILL 155!",
        "ONECHAN POSSESS HER OWN",
        "FRAGMENT, THE POWER OF",
        "ILLUSIONS. MAKING THE",
        "PRISON AN IMPOSSIBLE MAZE!",
        "",
        "155CHAN FINALLY WAKES UP",
        "AND UNAWARE OF WHATS GONNA",
        "HAPPEN SOON, HER SUPER",
        "STRENGTH ALLOWS HER TO",
        "BREAK FREE FROM THE CHAINS",
        "",
        "",
        "THE FATE OF THE PLANET IS",
        "IN 155CHANS HANDS...",
        "",
        "",
        "               BEGIN LEVEL",
    ],
    [
        "AFTER FIGHTING OFF GROUPS",
        "OF RECRUITERS IN THE",
        "PRISON, 155CHAN MANAGES TO",
        "FIND AND DEFEAT ONECHAN",
        "AND FINDS HER EXIT OF THE",
        "PRISON... REVEALING A",
        "LARGE PLAINS OF ASH THAT",
        "SPANS HUNDREDS OF MILES...",
        "SHE ROAMS THIS EARTH LIKE",
        "LAND OF ASH UNTIL SHE",
        "FINDS A BUILDING THAT GOES",
        "TO SECTOR OF THE MASSIVE",
        "SYSTEM OF HALLS AND DOORS",
        "CALLED THE HUB! IF SHE",
        "WANTS TO ESCAPE BACK TO",
        "EARTH, SHES GONNA HAVE",
        "TO FIND THE EXIT HERE,",
        "BUT SHE ISNT ALONE...",
        "",
        "                  CONTINUE",
    ],
    [
        "ZEROCHAN, WHO IS THE BOSS",
        "IS ALSO IN THE SECTOR",
        "155CHAN IS IN, AND IS",
        "PLANNING TO CONFRONT HER",
        "HERSELF, 155CHAN UNAWARE",
        "OF WHO EXACTLY ZEROCHAN",
        "IS, HOPES TO GET AWAY",
        "WITH WHATEVER ZEROCHAN",
        "IS PLANNING. SHE HOPES",
        "TO RETURN HOME WITH",
        "XORCHAN AND EVERYTHING",
        "GO BACK TO NORMAL.",
        "HOWEVER, WHAT HAPPENS",
        "NEXT IS GONNA DO",
        "IRREVERSAL DAMAGE TO",
        "THE PLANET.",
        "",
        "",
        "",
        "               BEGIN LEVEL",
    ],
    [
        "155CHAN DEFEATS ZEROCHAN",
        "IN A FIGHT, BUT ZEROCHAN",
        "FELT NO PAIN WHATSOEVER!",
        "SHE TELLS 155CHAN THAT SHE",
        "WILL MEET HER AGAIN AT THE",
        "3EMJ HEADQUARTERS. ONLY",
        "PROBLEM IS THAT THERE ARE",
        "DOZENS OF THEM SCATTERED",
        "ALL ACROSS THE CONTINENT..",
        "WHEN 155CHAN RETURNS TO",
        "EARTH SHE ROAMS THE OPEN",
        "FIELD FOR ANY SETTLEMENTS.",
        "EVENTUALLY SHE DOES AND",
        "ASKS FOR DIRECTIONS FOR",
        "THE NEAREST 3EMJ BASE.",
        "",
        "THIS INCIDENT WILL",
        "TRIGGER A MASSIVE CHANGE.",
        "",
        "               BEGIN LEVEL",
    ],
    [
        "155CHAN KILLS THE AMALGAM",
        "CREATURE, BUT QUICKLY,",
        "DOZENS MORE BEGIN TO",
        "EMERGE FROM THEIR PODS!",
        "ZEROCHAN TELLS 155CHAN",
        "THAT THESE AMALGAMS THAT",
        "SHE CALLS ZOMBIES WERE",
        "HER OWN CREATION USING",
        "THE POWER OF NEBULUS!",
        "SLIMES THAT GROW IN SIZE",
        "WHEN THEY ABSORB ENERGY",
        "SHE IS GONNA SPREAD THESE",
        "ZOMBIES ALL OVER THE",
        "CONTINENT BY BLOWING UP",
        "THE 3EMJ HEADQUARTERS",
        "TO SCATTER THEM EVERYWHERE",
        "",
        "",
        "",
        "                  CONTINUE",
    ],
    [
        "ZEROCHAN SAYS HER GOODBYES",
        "AND TELEPORTS OUT. 155CHAN",
        "TRIES TO FLEE WHILE THE HQ",
        "BEGINS SHAKING, BUT SHE",
        "FAILS AND IS CAUGHT IN THE",
        "EXPLOSION, THANKFULLY THE",
        "SUPER STRENGTH NEBULUS",
        "GAVE HER ALLOWED HER TO",
        "TAKE NO REAL DAMAGE FROM",
        "THE BLAST! THE ZOMBIES",
        "SCATTER ALL OVER THE LAND",
        "AND THE CELESTIAL FLAMES",
        "ALSO SCATTER, AND FLOAT",
        "ABOVE IN THE SKIES WHICH",
        "CAN BE SEEN AT NIGHT!",
        "155CHAN WAKES UP AND FINDS",
        "MASSIVE COLLOSAL GIANTS",
        "ROAMING, HER ADVERNTURE",
        "HAS ONLY BEGUN!",
        "          TO BE CONTINUED!",
    ],
    [
        ".......GAME CREDITS.......",
        "",
        "PROGRAMMER.......BOLTERNON",
        "ARTIST...........BOLTERNON",
        "CHARA.DESIGNER...BOLTERNON",
        "LEVEL.DESIGNER...BOLTERNON",
        "SPRITER..........BOLTERNON",
        "LORE.WRITER......BOLTERNON",
        "STORY.WRITER.....BOLTERNON",
        "",
        "......SPECIAL THANKS......",
        "",
        "EXT1605 TEAM.....MADE 1605",
        "ZLD1.............AFFIRMING",
        "BOBBIES.TM.........HELPING",
        "MARIOOOD...........HELPING",
        "DOOR.............AFFIRMING",
        "CNTRPL............EXISTING",
        "LIMINAL...................",
        "",
    ],
    [
        ".........THE END!.........",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".     THANK YOU FOR      .",
        ".        PLAYING!        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".........THE END!.........",
    ],
    [
        "..........................",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".          GAME          .",
        ".          OVER          .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        ".                        .",
        "..........................",
    ]
];
function input(event, cki) {
    if (cki == null) {
        cki = event.key;
    };
    if (isTitle) {
        if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
            isTitle = false;
            canFight = false;
            cutscene = 0;
            statVal[1] = statVal[2];
        };
    } else {
        if (inGame) {
            if (!inBattle) {
                if (!inMenu) {
                    if (!inText) {
                        if (cki == 'w' || cki == 'W' || cki == 'ArrowUp') {
                            if (dir == 0) {
                                if (getCollision()) {
                                    posZ--;
                                    if (posZ < 0) {posZ = 24;};
                                    if (!canFight) {canFight=true;};
                                };
                            } else if (dir == 1) {
                                if (getCollision()) {
                                    posX++;
                                    if (posX > 24) {posX = 0;};
                                    if (!canFight) {canFight=true;};
                                };
                            } else if (dir == 2) {
                                if (getCollision()) {
                                    posZ++;
                                    if (posZ > 24) {posZ = 0;};
                                    if (!canFight) {canFight=true;};
                                };
                            } else {
                                if (getCollision()) {
                                    posX--;
                                    if (posX < 0) {posX = 24;};
                                    if (!canFight) {canFight=true;};
                                };
                            };
                        } else if (cki == 'a' || cki == 'A' || cki == 'ArrowLeft') {
                            rotate(-1);
                        } else if (cki == 'd' || cki == 'D' || cki == 'ArrowRight') {
                            rotate(1);
                        } else if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                            menuPos = 0;
                            inMenu = true;
                        };
                    } else {
                        if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                            inText = false;
                        };
                    };
                } else {
                    if (!inAction) {
                        if (cki == 'w' || cki == 'W' || cki == 'ArrowUp') {
                            menuPos--;
                            if (menuPos < 0) {menuPos = 0;};
                        } else if (cki == 's' || cki == 'S' || cki == 'ArrowDown') {
                            menuPos++;
                            if (menuPos > 2) {menuPos = 2;};
                        } else if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                            actionPos = 0;
                            inAction = true;
                        } else if (cki == ' ' || cki == 'p' || cki == 'P' || cki == '6' || cki == 'x' || cki == 'X') {
                            inMenu = false;
                        };
                    } else {
                        if (!itemUse) {
                            if (cki == 'w' || cki == 'W' || cki == 'ArrowUp') {
                                actionPos--;
                                if (actionPos < 0) {actionPos = 0;};
                            } else if (cki == 's' || cki == 'S' || cki == 'ArrowDown') {
                                actionPos++;
                                if (actionPos > 3) {actionPos = 3;};
                            } else if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                                if (menuPos != 2) {
                                    inMenu = false;
                                    inAction = false;
                                } else {
                                    itemUse = true;
                                };
                            } else if (cki == ' ' || cki == 'p' || cki == 'P' || cki == '6' || cki == 'x' || cki == 'X') {
                                inAction = false;
                            };
                        } else {
                            if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                                inMenu = false;
                                inAction = false;
                                itemUse = false;
                            };
                        };
                    };
                };
            } else { // 0-Encounter | 1-Menu | 2-Attack | 3-En-Attack | 4-Status | 5-Defense | 6-ItemMenu | 7-ItemUse | 8-Molotov | 9-Run | 10-Win | 11-Lose | 12-LevelUp!
                if (sequence == 0) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        sequence = 1;
                    };
                } else if (sequence == 1) {
                    if (cki == 'w' || cki == 'W' || cki == 'ArrowUp') {
                        battlePos--;
                        if (battlePos < 0) {battlePos = 0;};
                    } else if (cki == 's' || cki == 'S' || cki == 'ArrowDown') {
                        battlePos++;
                        if (battlePos > 3) {battlePos = 3;};
                    } else if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        switch (battlePos) {
                            case 0: sequence = 2; break;
                            case 1: sequence = 5; break;
                            case 2: sequence = 6; break;
                            case 3: sequence = 9; break;
                        };
                    };
                } else if (sequence == 2) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        enemyHP > 0 ? sequence = 3 : sequence = 4;
                        singleUse = false;
                    };
                } else if (sequence == 3) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        sequence = 4;
                        singleUse = false;
                    };
                } else if (sequence == 4) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        if (enemyHP <= 0) {
                            sequence = 10;
                        } else {
                            statVal[1] > 0 ? sequence = 1 : sequence = 11;
                        };
                        singleUse = false;
                    };
                } else if (sequence == 5) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        enemyHP > 0 ? sequence = 3 : sequence = 4;
                        singleUse = false;
                    };
                } else if (sequence == 6) {
                    if (cki == 'w' || cki == 'W' || cki == 'ArrowUp') {
                        battleItemPos--;
                        if (battleItemPos < 0) {battleItemPos = 0;};
                    } else if (cki == 's' || cki == 'S' || cki == 'ArrowDown') {
                        battleItemPos++;
                        if (battleItemPos > 2) {battleItemPos = 2;};
                    } else if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        switch (battleItemPos) {
                            case 0: if(itemVal[0]>0){sequence = 7; battleItem = 0;}; break;
                            case 1: if(itemVal[1]>0){sequence = 7; battleItem = 1;}; break;
                            case 2: if(itemVal[2]>0){sequence = 8;}; break;
                        };
                        singleUse = false;
                    } else if (cki == ' ' || cki == 'p' || cki == 'P' || cki == '6' || cki == 'x' || cki == 'X') {
                        sequence = 1;
                        singleUse = false;
                    };
                } else if (sequence == 7) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        enemyHP > 0 ? sequence = 3 : sequence = 4;
                        singleUse = false;
                    };
                } else if (sequence == 8) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        sequence = 4;
                        singleUse = false;
                    };
                } else if (sequence == 9) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        sequence = 0;
                        inBattle = false;
                        singleUse = false;
                    };
                } else if (sequence == 10) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        if (hasLeveledUp() > statVal[0]) {
                            sequence = 12;
                        } else {
                            if (isBoss) {
                                sequence = 0;
                                inBattle = false;
                                isBoss = false;
                                inGame = false;
                            } else {
                                sequence = 0;
                                inBattle = false;
                            }
                        };
                        singleUse = false;
                    };
                } else if (sequence == 11) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        cutscene = 10;
                        sequence = 0;
                        inBattle = false;
                        isBoss = false;
                        inGame = false;
                    };
                } else if (sequence == 12) {
                    if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                        if (isBoss) {
                            sequence = 0;
                            inBattle = false;
                            isBoss = false;
                            inGame = false;
                            singleUse = false;
                        } else {
                            sequence = 0;
                            inBattle = false;
                            singleUse = false;
                        };
                    };
                };
            };
        } else {
            if (cki == 'Enter' || cki == 'o' || cki == 'O' || cki == '2' || cki == 'z' || cki == 'Z') {
                switch (cutscene) {
                    case 2: cutscene++; level=0; loadMap(); resetInteractions(); break;
                    case 4: cutscene++; level=1; loadMap(); resetInteractions(); break;
                    case 5: cutscene++; level=2; loadMap(); resetInteractions(); break;
                    case 10: isTitle=true;
                    default: cutscene++; break;
                };
            };
        };
    };
   function rotate(d) {
        dir += d;
        if (dir < 0) {dir = 3;};
        if (dir > 3) {dir = 0;};
    };
    console.log("posX: "+posX+" |posZ: "+posZ+" |dir: "+dir+" |cki: "+cki);
    frameStart();
};
function openMenu(screen) {
    const options = [
        ["SELECT AN ACTION",""," . INTERACT"," . STATUS"," . ITEMS"],
        ["SELECT AN ACTION",""," O INTERACT"," O STATUS"," O ITEMS"]
    ];
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < options[0][y].length; x++) {
            if (menuPos+2 == y) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(options[1][y].charAt(x))]);
            } else {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(options[0][y].charAt(x))]);
            };
        };
    };
};
function doLogic(screen) {
    let e = false;
    for (let i = 0; i < textEvent[level].length; i++) {
        if (textEvent[level][i][0] == false) {
            if (textEvent[level][i][1] == posX) {
                if (textEvent[level][i][2] == posZ) {
                    if (textEvent[level][i][3] == dir) {
                        if (!e) {e=true}
                        drawText(screen, i);
                        if(level==0&&posX==3&&posZ==1&&dir==3){drawSprite(screen, 24, 16, portraits[2]);isBoss=true;};
                        if(level==1&&posX==13&&posZ==6&&dir==3){drawSprite(screen, 24, 16, portraits[3]);isBoss=true;};
                        if(level==2&&posX==22&&posZ==20&&dir==3){drawSprite(screen, 24, 16, portraits[4]);isBoss=true;};
                        break;
                    };
                };
            };
        };
    };
    if (e) {
        return;
    } else {
        if (canFight) {
            if (isBoss) {
                if(level==0&&posX==0&&posZ==1){inBattle=true;};
                if(level==1&&posX==11&&posZ==8){inBattle=true;};
                if(level==2&&posX==17&&posZ==20){inBattle=true;};
            } else {
                let encounter = Math.floor(Math.random() * 9);
                /*This was originally "if (level >= encounter) {" but this caused the 2nd and 3rd dungeons to have a ridiculously high encounter rate and made navigation unfeasable*/
                if (0 == encounter) {
                    inBattle = true;
                };
            };
        };
    };
};
function interact(screen) {
    drawTextBox(screen);
    let e = false;
    for (let i = 0; i < intrEvent[level].length; i++) {
        if (intrEvent[level][i][0] == posX) {
            if (intrEvent[level][i][1] == posZ) {
                if (intrEvent[level][i][2] == dir) {
                    if (!e) {e=true;};
                    drawInteraction(screen, i);
                    if(level==0&&posX==10&&posZ==12&&dir==1&&statVal[5]==0){sealedjar=true;};
                };
            };
        };
    };
    if (!e) {
        drawInteraction(screen, 0);
    };
    inMenu = false;
    inAction = false;
};
function displayStatus(screen) {
    drawPlayer(screen,0);
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
    const status = [
        "...STATUS...",
        "",
        "NAME.155CHAN",
        "LEVEL.....  ",
        "HEALTH....  ",
        "MAX.HP....  ",
        "ATTACK....  ",
        "DEFENSE...  ",
        "WISDOM....  ",
    ];
    for (let y = 0; y < status.length; y++) {
        for (let x = 0; x < status[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (16+(y*8)), fonts[selectText(status[y].charAt(x))]);
        };
    };
    for (let y = 0; y < status.length - 3; y++) {
        const val = statVal[y] > 9 ? statVal[y].toString() : "0"+statVal[y].toString();
        for (let x = 0; x < 2; x++) {
            drawSprite(screen, (104+(x*8)), (40+(y*8)), fonts[selectText(val.charAt(x))]);
        };
    };
};
function displayItems(screen) {
    const itemsUI = "......SELECT AN ITEM......";
    const items = [
        [
            "   .......................",
            "   .......................",
            "   .......................",
            "   ......................."
        ],
        [
            "   PEAR.................  ",
            "   OBSIDIAN.PEAR........  ",
            "   MOLOTOV..............  ",
            "   SEALED.JAR............."
        ]
    ];
    drawTextBox(screen);
    for (let y = 0; y < 1; y++) {
        for (let x = 0; x < itemsUI.length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemsUI.charAt(x))]);
        };
    };
    for (let y = 0; y < items[0].length - 1; y++) {
        for (let x = 0; x < items[0][0].length; x++) {
            if (itemVal[y] != 0) {
                drawSprite(screen, (24+(x*8)), (144+(y*8)), fonts[selectText(items[1][y].charAt(x))]);
            } else {
                drawSprite(screen, (24+(x*8)), (144+(y*8)), fonts[selectText(items[0][y].charAt(x))]);
            };
        };
        if (itemVal[y] != 0) {
            const val = itemVal[y] > 9 ? itemVal[y].toString() : "0"+itemVal[y].toString();
            for (let x = 0; x < 2; x++) {
                drawSprite(screen, (216+(x*8)), (144+(y*8)), fonts[selectText(val.charAt(x))]);
            }
        };
    };
    for (let x = 0; x < items[0][0].length; x++) {
        if (sealedjar) {
            drawSprite(screen, (24+(x*8)), 168, fonts[selectText(items[1][3].charAt(x))]);
        } else {
            drawSprite(screen, (24+(x*8)), 168, fonts[selectText(items[0][3].charAt(x))]);
        };
    };
    for (let y = 0; y < 4; y++) {
        if (actionPos == y) {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText("O")]);
        } else {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText(".")]);
        };
    };
};
function levelUp() {
    if (exp >= 1000) {
        statVal[0] = 10;
        statVal[1] = 99;
        statVal[2] = 99;
        statVal[3] = 32*((statVal[5]*2)+1);
        statVal[4] = 16*((statVal[5]*2)+1);
    } else if (exp >= 500) {
        statVal[0] = 9;
        statVal[1] = 80;
        statVal[2] = 80;
        statVal[3] = 24*((statVal[5]*2)+1);
        statVal[4] = 13*((statVal[5]*2)+1);
    } else if (exp >= 400) {
        statVal[0] = 8;
        statVal[1] = 65;
        statVal[2] = 65;
        statVal[3] = 16*((statVal[5]*2)+1);
        statVal[4] = 11*((statVal[5]*2)+1);
    } else if (exp >= 300) {
        statVal[0] = 7;
        statVal[1] = 50;
        statVal[2] = 50;
        statVal[3] = 12*((statVal[5]*2)+1);
        statVal[4] = 9*((statVal[5]*2)+1);
    } else if (exp >= 200) {
        statVal[0] = 6;
        statVal[1] = 40;
        statVal[2] = 40;
        statVal[3] = 8*((statVal[5]*2)+1);
        statVal[4] = 7*((statVal[5]*2)+1);
    } else if (exp >= 150) {
        statVal[0] = 5;
        statVal[1] = 35;
        statVal[2] = 35;
        statVal[3] = 7*((statVal[5]*2)+1);
        statVal[4] = 7*((statVal[5]*2)+1);
    } else if (exp >= 100) {
        statVal[0] = 4;
        statVal[1] = 30;
        statVal[2] = 30;
        statVal[3] = 6*((statVal[5]*2)+1);
        statVal[4] = 5*((statVal[5]*2)+1);
    } else if (exp >= 50) {
        statVal[0] = 3;
        statVal[1] = 20;
        statVal[2] = 20;
        statVal[3] = 5*((statVal[5]*2)+1);
        statVal[4] = 3*((statVal[5]*2)+1);
    } else if (exp >= 25) {
        statVal[0] = 2;
        statVal[1] = 15;
        statVal[2] = 15;
        statVal[3] = 3*((statVal[5]*2)+1);
        statVal[4] = 2*((statVal[5]*2)+1);
    } else {
        statVal[0] = 1;
        statVal[1] = 10;
        statVal[2] = 10;
        statVal[3] = 2*((statVal[5]*2)+1);
        statVal[4] = 1*((statVal[5]*2)+1);
    };
};
function hasLeveledUp() {
    if (exp >= 1000) {
        return 10;
    } else if (exp >= 500) {
        return 9;
    } else if (exp >= 400) {
        return 8;
    } else if (exp >= 300) {
        return 7;
    } else if (exp >= 200) {
        return 6;
    } else if (exp >= 150) {
        return 5;
    } else if (exp >= 100) {
        return 4;
    } else if (exp >= 50) {
        return 3;
    } else if (exp >= 25) {
        return 2;
    } else {
        return 1;
    };
};
function enemyEncounter(screen) {
    isBoss ? enemyHP = ((enemydata[level][0]) * 10) : enemyHP = Math.floor(Math.random() * ((enemydata[level][0]) * statVal[0]));
    if (enemyHP <= 0) {enemyHP=1;};
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
    drawEnemy(screen);
    const redalert = [
        [
            [
                "",
                "WATCH OUT!",
                "",
                "WILD ENEMY RECRUITER",
                "IS ATTACKING YOU!"
            ],
            [
                "",
                "WATCH OUT!",
                "",
                "WILD ENEMY HUB WANDERER",
                "IS ATTACKING YOU!"
            ],
            [
                "",
                "WATCH OUT!",
                "",
                "WILD ENEMY 3EMJ EMPLOYEE",
                "IS ATTACKING YOU!"
            ]
        ],
        [
            [
                "",
                "WATCH OUT!",
                "",
                "ONECHAN IS CHALLENGING",
                "YOU! BECAREFUL!!!"
            ],
            [
                "",
                "WATCH OUT!",
                "",
                "ZEROCHAN IS TESTING YOU!",
                "DONT HOLD BACK!"
            ],
            [
                "",
                "WATCH OUT!",
                "",
                "AMALGAM LIFEFORM AWAKENS",
                "TAKE CARE OF IT QUICK!!!"
            ]
        ]
    ];
    drawTextBox(screen);
    if (isBoss) {
        for (let y = 0; y < redalert[1][level].length; y++) {
            for (let x = 0; x < redalert[1][level][y].length; x++) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(redalert[1][level][y].charAt(x))]);
            };
        };
    } else {
        for (let y = 0; y < redalert[0][level].length; y++) {
            for (let x = 0; x < redalert[0][level][y].length; x++) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(redalert[0][level][y].charAt(x))]);
            };
        };
    };
};
function battleMenu(screen) {
    drawPlayer(screen,0);
    drawEnemy(screen);
    const battleUI = [
        ".....SELECT AN ACTION.....",
        "",
        "   ATTACK",
        "   DEFEND",
        "   ITEM",
        "   RUN"
    ];
    drawTextBox(screen);
    for (let y = 0; y < battleUI.length; y++) {
        for (let x = 0; x < battleUI[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(battleUI[y].charAt(x))]);
        };
    };
    for (let y = 0; y < 4; y++) {
        if (battlePos == y) {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText("O")]);
        } else {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText(".")]);
        };
    };
};
function resetInteractions() {
    for (let y = 0; y < textEvent.length; y++) {
        for (let x = 0; x < textEvent[y].length; x++) {
            textEvent[y][x][0] = false;
        };
    };
};