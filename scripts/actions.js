function useNothing(screen) {
    for (let y = 0; y < itemEvent[0].length; y++) {
        for (let x = 0; x < itemEvent[0][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[0][y].charAt(x))]);
        };
    };
};
function eatPear(screen) {
    for (let y = 0; y < itemEvent[1].length; y++) {
        for (let x = 0; x < itemEvent[1][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[1][y].charAt(x))]);
        };
    };
    statVal[1] += 5;
    if (statVal[1] > statVal[2]) {
        statVal[1] = statVal[2];
    };
    itemVal[0]--;
    inMenu = false;
    inAction = false;
    itemUse = false;
};
function eatObsPear(screen) {
    for (let y = 0; y < itemEvent[2].length; y++) {
        for (let x = 0; x < itemEvent[2][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[2][y].charAt(x))]);
        };
    };
    statVal[1] += 25;
    if (statVal[1] > statVal[2]) {
        statVal[1] = statVal[2];
    };
    itemVal[1]--;
    inMenu = false;
    inAction = false;
    itemUse = false;
};
function useMolotov(screen) {
    for (let y = 0; y < itemEvent[3].length; y++) {
        for (let x = 0; x < itemEvent[3][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[3][y].charAt(x))]);
        };
    };
    inMenu = false;
    inAction = false;
    itemUse = false;
};
function useSealedJar(screen) {
    let e = false;
    if (level == 2) {
        if (posX == 13) {
            if (posZ == 21) {
                if (dir == 0) {
                    if (!e) {e=true;}
                    drawSprite(screen, 24, 16, portraits[5]);
                    for (let y = 0; y < itemEvent[5].length; y++) {
                        for (let x = 0; x < itemEvent[5][y].length; x++) {
                            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[5][y].charAt(x))]);
                        };
                    };
                    sealedjar = false;
                    statVal[5] += 1;
                    levelUp();
                };
            };
        };
    };
    if (!e) {
        for (let y = 0; y < itemEvent[4].length; y++) {
            for (let x = 0; x < itemEvent[4][y].length; x++) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[4][y].charAt(x))]);
            };
        };
    };
    inMenu = false;
    inAction = false;
    itemUse = false;
};
//BATTLE
function attackEnemy(screen) {
    if (!singleUse) {
        dmg = (Math.floor(Math.random() * (statVal[3]+1)) - Math.floor(Math.random() * ((enemydata[level][2]+1)*statVal[0])));
        if(dmg>99){dmg=99;};
        if(dmg<0){dmg=0;};
        enemyHP -= dmg;
        singleUse = true;
    };
    drawPlayer(screen,1);
    drawEnemy(screen);
    const battleShout = [
        "TAKE THIS!!!",
        "",
        "POW!!!",
        "",
        ("DEALT " + dmg + "DMG TO ENEMY!")
    ];
    drawTextBox(screen);
    for (let y = 0; y < battleShout.length; y++) {
        for (let x = 0; x < battleShout[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(battleShout[y].charAt(x))]);
        };
    };
};
function enemyAttack(screen) {
    if (!singleUse) {
        dmg = (Math.floor(Math.random() * ((enemydata[level][1]+1)*statVal[0])) - Math.floor(Math.random() * (statVal[4]+1)));
        if(inDefense){dmg/2;};
        if(dmg>99){dmg=99;};
        if(dmg<0){dmg=0;};
        statVal[1] -= dmg;
        singleUse = true;
    };
    drawPlayer(screen,0);
    drawEnemy(screen);
    const battleShout = [
        "ENEMY FIGHT BACK!!",
        "",
        "POW!!!",
        "",
        ("DEALT " + dmg + "DMG TO 155CHAN!")
    ];
    drawTextBox(screen);
    for (let y = 0; y < battleShout.length; y++) {
        for (let x = 0; x < battleShout[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(battleShout[y].charAt(x))]);
        };
    };
};
function turnEndStatus(screen) {
    inDefense = false;
    let status = "";
    if (enemyHP <= 0) {
        status = "I DID IT! ENEMY DEFEATED!"
        drawPlayer(screen,2);
        drawEnemyKill(screen);
    } else if (statVal[1] > (statVal[2]/2)) {
        status = "STILL HOLDING UP STRONG!";
        drawPlayer(screen,1);
        drawEnemy(screen);
    } else if (statVal[1] > 0) {
        status = "NOT FEELING TOO WELL.";
        drawPlayer(screen,0);
        drawEnemy(screen);
    } else {
        status = "I DONT THINK I CAN GO ON..";
        drawPlayer(screen,0);
        drawEnemy(screen);
    };
    drawTextBox(screen);
    for (let x = 0; x < status.length; x++) {
        drawSprite(screen, (24+(x*8)), 128, fonts[selectText(status.charAt(x))]);
    };
};
function winResults(screen) {
    if (!singleUse) {
        gains = Math.floor(Math.random() * (enemydata[level][3] * statVal[0]));
        const getPear = Math.floor(Math.random() * 10);
        const getObsPear = Math.floor(Math.random() * 10);
        const getMolotov = Math.floor(Math.random() * 10);
        if(getPear>4){itemGain[0]=1;}else{itemGain[0]=0;};
        if(getObsPear>=8){itemGain[1]=1;}else{itemGain[1]=0;};
        if(getMolotov==9){itemGain[2]=1;}else{itemGain[2]=0;};
        exp += gains;
        for(let i=0;i<3;i++){itemVal[i]+=itemGain[i];if(itemVal[i]>99){itemVal[i]=99;};};
        singleUse = true;
        canFight = false;
    };
    drawPlayer(screen,2);
    drawEnemyKill(screen);
    const g = [0,0,gains,itemGain[0],itemGain[1],itemGain[2]];
    const winMSG = [
        [
            ".........YOU WIN!.........",
            "",
            ("YOU GOT " + gains + " EXPERIENCE"),
            ("YOU GOT " + itemGain[0] + " PEAR"),
            ("YOU GOT " + itemGain[1] + " OBSIDIAN PEAR"),
            ("YOU GOT " + itemGain[2] + " MOLOTOV")
        ],
        [
            ".........YOU WIN!.........",
            "",
            "",
            "",
            "",
            ""
        ]
    ];
    drawTextBox(screen);
    for (let y = 0; y < winMSG[0].length; y++) {
        for (let x = 0; x < winMSG[0][y].length; x++) {
            if (g[y] != 0) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(winMSG[0][y].charAt(x))]);
            } else {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(winMSG[1][y].charAt(x))]);
            };
        };
    };
};
function levelUpSequence(screen) {
    drawPlayer(screen,2);
    drawEnemyKill(screen);
    levelUp();
    const fanfare = [
        "........LEVEL UP!!........",
        ("LEVEL NOW " + statVal[0] + "!"),
        ("MAX.HP NOW " + statVal[2] + "!"),
        ("ATTACK NOW " + statVal[3] + "!"),
        ("DEFENSE NOW " + statVal[4] + "!"),
        "..HEALTH FULLY RESTORED!.."
    ];
    drawTextBox(screen);
    for (let y = 0; y < fanfare.length; y++) {
        for (let x = 0; x < fanfare[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(fanfare[y].charAt(x))]);
        };
    };
};
function defenseMode(screen) {
    drawPlayer(screen,1);
    drawEnemy(screen);
    inDefense = true;
    const df = "I MUST STAY GUARDED!";
    drawTextBox(screen);
    for (let x = 0; x < df.length; x++) {
        drawSprite(screen, (24+(x*8)), 128, fonts[selectText(df.charAt(x))]);
    };
};
function runAway(screen) {
    drawPlayer(screen,0);
    drawEnemy(screen);
    const run = "I DONT WANNA FIGHT, BYE!";
    drawTextBox(screen);
    for (let x = 0; x < run.length; x++) {
        drawSprite(screen, (24+(x*8)), 128, fonts[selectText(run.charAt(x))]);
    };
};
function gameOver(screen) {
    drawPlayer(screen,0);
    drawEnemy(screen);
    const run = "..............";
    drawTextBox(screen);
    for (let x = 0; x < run.length; x++) {
        drawSprite(screen, (24+(x*8)), 128, fonts[selectText(run.charAt(x))]);
    };
};
function itemSelect(screen) {
    drawPlayer(screen,0);
    drawEnemy(screen);
    const itemsUI = "......SELECT AN ITEM......";
    const items = [
        [
            "   .......................",
            "   .......................",
            "   .......................",
        ],
        [
            "   PEAR.................  ",
            "   OBSIDIAN.PEAR........  ",
            "   MOLOTOV..............  ",
        ]
    ];
    drawTextBox(screen);
    for (let y = 0; y < 1; y++) {
        for (let x = 0; x < itemsUI.length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemsUI.charAt(x))]);
        };
    };
    for (let y = 0; y < items[0].length; y++) {
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
    for (let y = 0; y < 3; y++) {
        if (battleItemPos == y) {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText("O")]);
        } else {
            drawSprite(screen, 32, (144+(y*8)), fonts[selectText(".")]);
        };
    };
};
function battleItemUse(screen) {
    drawPlayer(screen,0);
    drawEnemy(screen);
    if (battleItem == 0) {
        for (let y = 0; y < itemEvent[1].length; y++) {
            for (let x = 0; x < itemEvent[1][y].length; x++) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[1][y].charAt(x))]);
            };
        };
        statVal[1] += 5;
        if (statVal[1] > statVal[2]) {
            statVal[1] = statVal[2];
        };
        itemVal[0]--;
    } else {
        for (let y = 0; y < itemEvent[2].length; y++) {
            for (let x = 0; x < itemEvent[2][y].length; x++) {
                drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(itemEvent[2][y].charAt(x))]);
            };
        };
        statVal[1] += 25;
        if (statVal[1] > statVal[2]) {
            statVal[1] = statVal[2];
        };
        itemVal[1]--;
    };
};
function battleMolotov(screen) {
    if (!singleUse) {
        dmg = (statVal[3]+1) - Math.floor(Math.random() * ((enemydata[level][2]+1)*statVal[0]));
        if(dmg>99){dmg=99;};
        if(dmg<0){dmg=0;};
        enemyHP -= dmg;
        singleUse = true;
    };
    drawPlayer(screen,1);
    drawEnemy(screen);
    const battleShout = [
        "TAKE ONE OF THESE!!!!!",
        "",
        "BOOOOOM!!!",
        "",
        ("DEALT " + dmg + "DMG TO ENEMY!")
    ];
    drawTextBox(screen);
    for (let y = 0; y < battleShout.length; y++) {
        for (let x = 0; x < battleShout[y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(battleShout[y].charAt(x))]);
        };
    };
    itemVal[2]--;
};