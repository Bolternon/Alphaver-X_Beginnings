const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const texture = document.getElementById("textures");
function canvasExport(screen) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            ctx.fillStyle = getCanvasColor(screen[y][x]);
            ctx.fillRect(x,y,1,1);
        };
    };
};
function getCanvasColor(pixel) {
    const walls = [
        [
            "#ababab",
            "#ffffff",
            "#ffffff"
        ],
        [
            "#005500",
            "#005555",
            "#000000"
        ],
        [
            "#ffffff",
            "#0055ff",
            "#0055ff"
        ]
    ];
    switch (pixel) {
        case '0': return "#000000"; //Black
        case '1': return "#ffffff"; //White
        case '2': return "#ababab"; //Light Gray
        case '3': return "#555555"; //Dark Gray
        case '4': return "#0000ab"; //Blue
        case '5': return "#000055"; //Dark Blue
        case '6': return "#ffff00"; //Yellow
        case '7': return "#aaaa00"; //Dark Yellow
        case '8': return "#00ffff"; //Cyan
        case '9': return "#00aaaa"; //Dark Cyan
        case 'a': return "#00ffff"; //Light Blue
        case 'b': return "#ab00ab"; //Purple
        case 'c': return "#ffb691"; //Skin Color
        case 'd': return "#ab5500"; //Brown
        case 'e': return "#ff0000"; //Red
        case 'f': return "#00ff00"; //Lime
        case 'g': return "#00ab00"; //Green
        case 'h': return "#005500"; //Dark Green
        case 'i': return "#550055"; //Dark Purple
        case 'j': return "#ff55ff"; //Pink
        case 'k': return walls[level][0]; //Edges
        case 'l': return walls[level][1]; //Solid
        case 'm': return walls[level][2]; //Holes
    };
};