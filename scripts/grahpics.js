const width = 256;
const height = 192;
function frameStart() {
    let screen = [];
    generateScreen(screen);
};
function generateScreen(screen) {
    for (let y = 0; y < height; y++) {
        screen[y] = [];
        for (let x = 0; x < width; x++) {
            screen[y][x] = "1";
        };
    };
    if (!isTitle) {
        if (!inGame) {
            drawCutscene(screen);
            drawCutsceneText(screen);
        } else {
            gameBackground(screen);
            drawDungeon(screen);
            drawPortrait(screen);
            drawTextBox(screen);
            if (inBattle) {
                switch (sequence) {
                    case 0: enemyEncounter(screen); break;
                    case 1: battleMenu(screen); break;
                    case 2: attackEnemy(screen); break;
                    case 3: enemyAttack(screen); break;
                    case 4: turnEndStatus(screen); break;
                    case 5: defenseMode(screen); break;
                    case 6: itemSelect(screen); break;
                    case 7: battleItemUse(screen); break;
                    case 8: battleMolotov(screen); break;
                    case 9: runAway(screen); break;
                    case 10: winResults(screen); break;
                    case 11: gameOver(screen); break;
                    case 12: levelUpSequence(screen); break;
                };
            } else {
                if (inMenu) {
                    if (inAction) {
                        if (itemUse) {
                            switch (actionPos) {
                                case 0: if(itemVal[0]!=0){eatPear(screen);}else{useNothing(screen)} break;
                                case 1: if(itemVal[1]!=0){eatObsPear(screen);}else{useNothing(screen)} break;
                                case 2: if(itemVal[2]!=0){useMolotov(screen);}else{useNothing(screen)} break;
                                case 3: if(sealedjar){useSealedJar(screen);}else{useNothing(screen)} break;  
                            };
                        } else {
                            switch (menuPos) {
                                case 0: interact(screen); break;
                                case 1: displayStatus(screen); break;
                                case 2: displayItems(screen); break;
                            };
                        };
                    } else {
                        openMenu(screen);
                    };
                } else {
                    doLogic(screen);
                };
            };
        };
    } else {
        drawTitleScreen(screen);
    };
    canvasExport(screen);
};
function drawPixel(screen, x, y, char) {
    if (char != '@') {
        if (x >= 0 && x < width) {
            if (y >= 0 && y < height) {
                screen[y][x] = char;
            };
        };
    };
};
function drawSprite(screen, x, y, sprite) {
    for (let sy = 0; sy < sprite.length; sy++) {
        for (let sx = 0; sx < sprite[sy].length; sx++) {
            drawPixel(screen, (x + sx), (y + sy), sprite[sy][sx]);
        };
    };
};
function drawSpriteFlipped(screen, x, y, sprite) {
    for (let sy = 0; sy < sprite.length; sy++) {
        for (let sx = 0; sx < sprite[sy].length; sx++) {
            drawPixel(screen, (x + sx), (y + sy), sprite[sy][sprite[sy].length - 1 - sx]);
        };
    };
};
function gameBackground(screen) {
    for (let y = 0; y < (height/16); y++) {
        for (let x = 0; x < (width/16); x++) {
            drawSprite(screen, (x*16), (y*16), backgroundWall);
        };
    };
    for (let j = 0; j <= 112; j+=112) {
        drawSprite(screen, (16+j), 0, backgroundBorder[0]);
        for (let i = 0; i < 5; i++) {
            drawSprite(screen, ((32+j)+(i*16)), 0, backgroundBorder[1]);
        };
        drawSprite(screen, (112+j), 0, backgroundBorder[2]);
    };
    for (let j = 0; j <= 112; j+=112) {
        drawSprite(screen, (16+j), 16, backgroundBorder[3]);
        drawSprite(screen, (112+j), 16, backgroundBorder[4]);
    };
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 112; j+=112) {
            drawSprite(screen, (16+j), (32+(i*16)), backgroundBorder[5]);
            drawSprite(screen, (112+j), (32+(i*16)), backgroundBorder[6]);
        };
    };
    for (let j = 0; j <= 112; j+=112) {
        drawSprite(screen, (16+j), 96, backgroundBorder[7]);
        drawSprite(screen, (112+j), 96, backgroundBorder[8]);
    };
    for (let j = 0; j <= 112; j+=112) {
        drawSprite(screen, (16+j), 112, backgroundBorder[9]);
        for (let i = 0; i < 5; i++) {
            drawSprite(screen, ((32+j)+(i*16)), 112, backgroundBorder[10]);
        };
        drawSprite(screen, (112+j), 112, backgroundBorder[11]);
    };
    drawSprite(screen, (16), 112, backgroundBorder[0]);
    for (let i = 0; i < 12; i++) {
        drawSprite(screen, ((32)+(i*16)), 112, backgroundBorder[1]);
    };
    drawSprite(screen, (224), 112, backgroundBorder[2]);
    drawSprite(screen, (16), 128, backgroundBorder[3]);
    drawSprite(screen, (224), 128, backgroundBorder[4]);
    drawSprite(screen, (16), 144, backgroundBorder[5]);
    drawSprite(screen, (224), 144, backgroundBorder[6]);
    drawSprite(screen, (16), 160, backgroundBorder[7]);
    drawSprite(screen, (224), 160, backgroundBorder[8]);
    drawSprite(screen, (16), 176, backgroundBorder[9]);
    for (let i = 0; i < 12; i++) {
        drawSprite(screen, ((32)+(i*16)), 176, backgroundBorder[10]);
    };
    drawSprite(screen, (224), 176, backgroundBorder[11]);
};
function drawDungeon(screen) {
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
    renderDungeon(screen);
    for (let y = 2; y < 7; y++) {
        for (let x = 0; x < 1; x++) {
            drawSprite(screen, (x*16), (y*16), backgroundWall);
        };
    };
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 112; j+=112) {
            drawSprite(screen, (16+j), (32+(i*16)), backgroundBorder[5]);
            drawSprite(screen, (112+j), (32+(i*16)), backgroundBorder[6]);
        };
    };
    for (let j = 0; j <= 112; j+=112) {
        drawSprite(screen, (16+j), 96, backgroundBorder[7]);
        drawSprite(screen, (112+j), 96, backgroundBorder[8]);
    };
};
function drawPortrait(screen) {
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+136), (y+16), "0");
        };
    };
    if (statVal[1] > (statVal[2]/2)) {
        drawSprite(screen, 136, 16, portraits[0]);
    } else {
        drawSprite(screen, 136, 16, portraits[1]);
    };
};
function drawTextBox(screen) {
    for (let y = 0; y < 48; y++) {
        for (let x = 0; x < 208; x++) {
            drawPixel(screen, (x+24), (y+128), "0");
        };
    };
};
function drawText(screen, i) {
    for (let y = 0; y < textEvent[level][i][4].length; y++) {
        for (let x = 0; x < textEvent[level][i][4][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(textEvent[level][i][4][y].charAt(x))]);
        };
    };
    textEvent[level][i][0] = true;
};
function drawInteraction(screen, i) {
    for (let y = 0; y < intrEvent[level][i][3].length; y++) {
        for (let x = 0; x < intrEvent[level][i][3][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (128+(y*8)), fonts[selectText(intrEvent[level][i][3][y].charAt(x))]);
        };
    };
};
function selectText(char) {
    switch (char) {
        case 'A': return 0;
        case 'B': return 1;
        case 'C': return 2;
        case 'D': return 3;
        case 'E': return 4;
        case 'F': return 5;
        case 'G': return 6;
        case 'H': return 7;
        case 'I': return 8;
        case 'J': return 9;
        case 'K': return 10;
        case 'L': return 11;
        case 'M': return 12;
        case 'N': return 13;
        case 'O': return 14;
        case 'P': return 15;
        case 'Q': return 16;
        case 'R': return 17;
        case 'S': return 18;
        case 'T': return 19;
        case 'U': return 20;
        case 'V': return 21;
        case 'W': return 22;
        case 'X': return 23;
        case 'Y': return 24;
        case 'Z': return 25;
        case '0': return 26;
        case '1': return 27;
        case '2': return 28;
        case '3': return 29;
        case '4': return 30;
        case '5': return 31;
        case '6': return 32;
        case '7': return 33;
        case '8': return 34;
        case '9': return 35;
        case '.': return 36;
        case ',': return 37;
        case '?': return 38;
        case '!': return 39;
        case ' ': return 40;
        case '*': return 41;
        case '©': return 42;
        case '-': return 43;
        default:  return 40;
    };
};
function drawCutscene(screen) {
    for (let y = 0; y < (height/16); y++) {
        for (let x = 0; x < (width/16); x++) {
            drawSprite(screen, (x*16), (y*16), backgroundWall);
        };
    };
    drawSprite(screen, 16, 0, backgroundBorder[0]);
    for (let i = 0; i < 12; i++) {
        drawSprite(screen, (32+(i*16)), 0, backgroundBorder[1]);
    };
    drawSprite(screen, 224, 0, backgroundBorder[2]);
    drawSprite(screen, 16, 16, backgroundBorder[3]);
    drawSprite(screen, 224, 16, backgroundBorder[4]);
    for (let i = 0; i < 8; i++) {
        drawSprite(screen, 16, (32+(i*16)), backgroundBorder[5]);
        drawSprite(screen, 224, (32+(i*16)), backgroundBorder[6]);
    };
    drawSprite(screen, 16, 160, backgroundBorder[7]);
    drawSprite(screen, 224, 160, backgroundBorder[8]);
    drawSprite(screen, 16, 176, backgroundBorder[9]);
    for (let i = 0; i < 12; i++) {
        drawSprite(screen, (32+(i*16)), 176, backgroundBorder[10]);
    };
    drawSprite(screen, 224, 176, backgroundBorder[11]);
    for (let y = 0; y < 160; y++) {
        for (let x = 0; x < 208; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
};
function drawPlayer(screen, i) {
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+136), (y+16), "0");
        };
    };
    drawSprite(screen, 160, 32, pchan[i]);
};
function drawEnemy(screen) {
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
    isBoss ? drawSprite(screen, 48, 32, enemies[3+level]) : drawSprite(screen, 48, 32, enemies[level]);
};
function drawEnemyKill(screen) {
    for (let y = 0; y < 96; y++) {
        for (let x = 0; x < 96; x++) {
            drawPixel(screen, (x+24), (y+16), "0");
        };
    };
};
function drawCutsceneText(screen) {
    for (let y = 0; y < cutsEvent[cutscene].length; y++) {
        for (let x = 0; x < cutsEvent[cutscene][y].length; x++) {
            drawSprite(screen, (24+(x*8)), (16+(y*8)), fonts[selectText(cutsEvent[cutscene][y].charAt(x))]);
        };
    };
};
function drawTitleScreen(screen) {
    for (let y = 0; y < (height/16); y++) {
        for (let x = 0; x < (width/16); x++) {
            drawSprite(screen, (x*16), (y*16), backgroundWall);
        };
    };
    drawSprite(screen, 32, 0, backgroundBorder[0]);
    for (let i = 0; i < 10; i++) {
        drawSprite(screen, (48+(i*16)), 0, backgroundBorder[1]);
    };
    drawSprite(screen, 208, 0, backgroundBorder[2]);
    drawSprite(screen, 32, 16, backgroundBorder[3]);
    drawSprite(screen, 208, 16, backgroundBorder[4]);
    drawSprite(screen, 32, 32, backgroundBorder[7]);
    drawSprite(screen, 208, 32, backgroundBorder[8]);
    drawSprite(screen, 32, 48, backgroundBorder[9]);
    for (let i = 0; i < 10; i++) {
        drawSprite(screen, (48+(i*16)), 48, backgroundBorder[10]);
    };
    drawSprite(screen, 208, 48, backgroundBorder[11]);
    for (let y = 0; y < 32; y++) {
        for (let x = 0; x < 176; x++) {
            drawPixel(screen, (x+40), (y+16), "0");
        };
    };
    const title = [
        "ALPHAVER-X",
        "BEGINNINGS"
    ];
    for (let y = 0; y < title.length; y++) {
        for (let x = 0; x < title[y].length; x++) {
            drawSprite(screen, (86+(x*8)), (24+(y*8)), fonts[selectText(title[y].charAt(x))]);
        };
    };
    drawSprite(screen, 32, 64, backgroundBorder[0]);
    for (let i = 0; i < 10; i++) {
        drawSprite(screen, (48+(i*16)), 64, backgroundBorder[1]);
    };
    drawSprite(screen, 208, 64, backgroundBorder[2]);
    drawSprite(screen, 32, 80, backgroundBorder[3]);
    drawSprite(screen, 208, 80, backgroundBorder[4]);
    drawSprite(screen, 32, 88, backgroundBorder[7]);
    drawSprite(screen, 208, 88, backgroundBorder[8]);
    drawSprite(screen, 32, 104, backgroundBorder[9]);
    for (let i = 0; i < 10; i++) {
        drawSprite(screen, (48+(i*16)), 104, backgroundBorder[10]);
    };
    drawSprite(screen, 208, 104, backgroundBorder[11]);
    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 176; x++) {
            drawPixel(screen, (x+40), (y+80), "0");
        };
    };
    const start = "PRESS START!"
    for (let x = 0; x < start.length; x++) {
        drawSprite(screen, (78+(x*8)), 88, fonts[selectText(start.charAt(x))]);
    };
    const copyright = "       ©2024 ZETCHERGAMES"
    for (let x = 0; x < copyright.length; x++) {
        drawSprite(screen, (0+(x*8)), 184, fonts[selectText(copyright.charAt(x))]);
    };
};
function dunegonOverlay(screen, i) {
    const overlay = [
        [
            "0@",
            "@0"
        ],
        [
            "0@",
            "@@"
        ],
        [
            "@@",
            "@@"
        ]
    ];
    for (let y = 0; y < 48; y++) {
        for (let x = 0; x < 48; x++) {
            drawSprite(screen, (24+(x*2)), (16+(y*2)), overlay[i]);
        }
    }
};