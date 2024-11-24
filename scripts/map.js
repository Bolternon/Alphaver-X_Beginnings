function renderDungeon(screen) {
    if (dir == 0 || dir == 2) {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                const tile = [
                    loadedMap[warpFOV(posZ-2+y)][warpFOV(posX-1+x)],
                    null,
                    loadedMap[warpFOV(posZ+2-y)][warpFOV(posX+1-x)],
                    null
                ];
                generateDungeon(screen, tile[dir], x, y);
            };
            const tile = [
                loadedMap[warpFOV(posZ-2+y)][warpFOV(posX-1+1)],
                null,
                loadedMap[warpFOV(posZ+2-y)][warpFOV(posX+1-1)],
                null
            ];
            generateDungeon(screen, tile[dir], 1, y);
            dunegonOverlay(screen, y);
        };
    } else {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                const tile = [
                    null,
                    loadedMap[warpFOV(posZ-1+y)][warpFOV(posX+2-x)],
                    null,
                    loadedMap[warpFOV(posZ+1-y)][warpFOV(posX-2+x)]
                ];
                generateDungeon(screen, tile[dir], x, y);
            };
            const tile = [
                null,
                loadedMap[warpFOV(posZ-1+1)][warpFOV(posX+2-x)],
                null,
                loadedMap[warpFOV(posZ+1-1)][warpFOV(posX-2+x)]
            ];
            generateDungeon(screen, tile[dir], x, 1);
            dunegonOverlay(screen, x);
        };
    };
    function warpFOV(c) {
        while (c >= 25) {
            c = 0;
        };
        while (c < 0) {
            c = 24;
        };
        return c;
    };
};
const dd = [
    /*NNNNNNNEEEEEEEWWWWWWW*/
    "qwetrfvedcvtgbzaqrbgt",
    "edcvtgbcxzbvfrqwetrfv",
    "cxzbvfrzaqrbgtedcvtgb",
    "zaqrbgtqwetrfvcxzbvfr"
];
function generateDungeon(screen, tile, x, z) {
    const sd = [
        [48,16,64,56,80],
        [24,32,56,40,88],
        [-24,64,40,24,104]
    ];
    if (dir == 0 || dir == 2) {
        if (tile == dd[dir][0] || tile == dd[dir][1] || tile == dd[dir][2] || tile == dd[dir][3] || tile == dd[dir][4] || tile == dd[dir][5] || tile == dd[dir][6] || tile == "?") {
            drawSprite(screen, (sd[z][0]+(x*sd[z][1])), sd[z][2], loadedSet[z][0]);
        };
        if (x == 1) {
            if (tile == dd[dir][14] || tile == dd[dir][15] || tile == dd[dir][16] || tile == dd[dir][17] || tile == dd[dir][18] || tile == dd[dir][19] || tile == dd[dir][20] || tile == "?") {
                drawSprite(screen, sd[z][3], sd[z][3], loadedSet[z][1]);
            };
            if (tile == dd[dir][7] || tile == dd[dir][8] || tile == dd[dir][9] || tile == dd[dir][10] || tile == dd[dir][11] || tile == dd[dir][12] || tile == dd[dir][13] || tile == "?") {
                drawSpriteFlipped(screen, sd[z][4], sd[z][3], loadedSet[z][1]);
            };
        };
    } else {
        if (tile == dd[dir][0] || tile == dd[dir][1] || tile == dd[dir][2] || tile == dd[dir][3] || tile == dd[dir][4] || tile == dd[dir][5] || tile == dd[dir][6] || tile == "?") {
            drawSprite(screen, (sd[x][0]+(z*sd[x][1])), sd[x][2], loadedSet[x][0]);
        };
        if (z == 1) {
            if (tile == dd[dir][14] || tile == dd[dir][15] || tile == dd[dir][16] || tile == dd[dir][17] || tile == dd[dir][18] || tile == dd[dir][19] || tile == dd[dir][20] || tile == "?") {
                drawSprite(screen, sd[x][3], sd[x][3], loadedSet[x][1]);
            };
            if (tile == dd[dir][7] || tile == dd[dir][8] || tile == dd[dir][9] || tile == dd[dir][10] || tile == dd[dir][11] || tile == dd[dir][12] || tile == dd[dir][13] || tile == "?") {
                drawSpriteFlipped(screen, sd[x][4], sd[x][3], loadedSet[x][1]);
            };
        };
    };
};
function getCollision() {
    const tile = loadedMap[posZ][posX];
    if (tile == dd[dir][0] || tile == dd[dir][1] || tile == dd[dir][2] || tile == dd[dir][3] || tile == dd[dir][4] || tile == dd[dir][5] || tile == dd[dir][6] || tile == "?") {
        return false;
    } else {
        return true;
    };
};
function loadMap() {
    switch (level) {
        case 0: loadedMap = prison; dir = 0; posX = 23; posZ = 23; break;
        case 1: loadedMap = hub; dir = 0; posX = 11; posZ = 24; break;
        case 2: loadedMap = hq; dir = 0; posX = 0; posZ = 24; break;
    };
    inGame = true;
};
let loadedMap = [
    "qwwwwwwwwwwwwwwwwwwwwwwwe",
    "asssssssssssssssssssssssd",
    "assssxxxsxxxssssssssssssd",
    "asssdrfvgrfvasssssssssssd",
    "assxswwwswwwsxssssssssssd",
    "asdtasssssssdtasssssssssd",
    "asdgasssssssdgasssssssssd",
    "asdbasssxsssdbasssssssssd",
    "assfsssd?asssfssssssssssd",
    "asdtassswsssdtasssssssssd",
    "asdgasssssssdgassxsxsxssd",
    "asdbasssssssdbasd?g?g?asd",
    "asswsxxxsxxxswsssfsfsfssd",
    "asssdrfvgrfvasssd?g?g?asd",
    "asssswwwswwwsssssfsfsfssd",
    "asssssssssssssssd?g?g?asd",
    "asssssssssssssssswswswssd",
    "asssssssxsssxsssxsssssssd",
    "assssssd?asd?asd?assssssd",
    "assssssswssswssswsssssssd",
    "asssssssxsssxsssxsssssssd",
    "assssssd?asd?asd?assssssd",
    "assssssswssswssswsssssssd",
    "asssssssssssssssssssssssd",
    "zxxxxxxxxxxxxxxxxxxxxxxxc"
];
const prison = [
    "qwerfwfvqeqeqweqwegrffffe",
    "assffsffsssdasdasssfffffc",
    "zxcrfxfvadzczsczscgqweqwe",
    "qwwwwwwwssfffxffxvassdasd",
    "zxxxsxxxscqetqvqvtgzsczsc",
    "qwetgqfvgqsxxxegrdgqswwse",
    "asdggawfsdbttqxxeggzxxxxc",
    "zscgggqvqdtasxfvggafffffv",
    "?grdggawsxcgbrffxdgqwwwwe",
    "qseggzxczffcrffffcgzxxsxc",
    "zscgzfffffffffffffdqeqswe",
    "?grsfffwffffwfffwegassssd",
    "qsegqwegqwwvgqweadgzczsxc",
    "asdgasdgasdqdasdadafffxfv",
    "zscgzscgzscadzscadgqwwwwe",
    "?grxvgrxvgrxxvgrxcgzxxxsc",
    "fxfffxfwfxwfwfxfffsfwffxf",
    "qweqweqseqsegtqwweg?gqwwe",
    "asdaxczxczxcgbassdavasssd",
    "asdaweqweqwegtzsxcgtgzxxc",
    "asdaxczsczscgafsffggg?qet",
    "asdzfffxffxfcbqsfegbafsdg",
    "asswwwwwwwwwwead?gavgtzdg",
    "assssssssssssdzxfcgtbaebg",
    "zxxxxxxxxxxxxxfffvgzrxxfc"
];
const hub = [
    "qwwweggqffffwwwwwwwwwwwwe",
    "asssdgggrffezxxxsxxxxxxsc",
    "zxxxcggzffeawffwswffffvg?",
    "fwfffdzfwegzcqeasdqfffwxf",
    "tgqvqxfezdaffsdasdgqffdqw",
    "gggqcqezebgqezcaxcggqegad",
    "ggggqsseafdaxffdqfdgasdad",
    "ggadzsscgtggqffggtggzcgad",
    "gbgzezcqcggbgrfcgggzffdad",
    "xfsezwwxqdzfxfffdbzfffcad",
    "qezseadqxxfwfffvaffwfffxd",
    "asezcadgqwegqweqdqvgrffeg",
    "assffsdgasdgasdadgaswwegg",
    "ascqegggzscgzscadgzxssdgg",
    "zcqsdggafxfsfxfsdzfezscgg",
    "qwxxcgggqwvgrweaxwezvgrcg",
    "adqfwxcgacqsezdgtaswwswwd",
    "adgtaffdgqsssegggaxxxsxxd",
    "adzdzwvggasssdggggqfvgreg",
    "aswctgqcgzssscggbgbqwsegg",
    "asdqsdgrxeasdqdafsfsssdgg",
    "asdadgawegasdadg?gtzxxcgg",
    "asdadgasdgzscadafdzffffcg",
    "asdzcgzxcaegqsdg?awwwwwwd",
    "zxxffgrffxcbzxczfxxxxxxxc"
];
const hq = [
    "adqfffwffervqetqetqweqeqe",
    "adzerfcrvzffcggzxdzsdzdzd",
    "aswcqerffffffdgqeafxxfxfc",
    "zxcrdzfffffffcgzxdqwwwwwe",
    "rwwfxfffffffffdqwdzxxxxxc",
    "qssfwfwfwwfeqegzcafwwfwfe",
    "asd?g?g?adtgadgqwdqsdqdqd",
    "zxxfxfxfxcgzxcgzcgzxczczc",
    "rfffffffffxffvgrvgrfffffv",
    "rffwwffffwwfffdqfsfwwfwfe",
    "qweadqeqeadqwegg?g?ad?gtg",
    "asssssdasssssdgafsfsxfcbg",
    "zxcadzczcadzxcgg?g?gqfffc",
    "qweadqeqeadqwegzfxfcgrffv",
    "asssssdasssssdgfffffxfffv",
    "zxcadzczcadzxcgqffffffffe",
    "qweadqeqeadqweggrffffffvg",
    "asssssdasssssdgafffffffeg",
    "zxcadzczcadzxcggqfffffegg",
    "rffxxfwwfxxffvgggqwwwebgg",
    "rffffeadqfffffcggassssfdg",
    "qwwwegadgqweqweggzxxxctgg",
    "asxsdbadgasdasdgzfffffcgg",
    "adtaswsdgzsczsczfffffffcg",
    "zcbzxxxczfxffxffffffffffc"
];