scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    tiles.placeOnRandomTile(sprMain, myTiles.tile7)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    tiles.placeOnRandomTile(sprMain, myTiles.tile8)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    tiles.placeOnRandomTile(sprMain, myTiles.tile5)
})
let sprMain: Sprite = null
sprMain = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010501010101010101010101010101010100010101010101010200000000000001000000000000000101010101010100010001010101010101010101010101000100010101010101010101010101010001000101010101010101010101010100010001010101010101010101010101000100010101010101010400000101010001000101010100000301010000000000010000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100010101010101010101010101010101000101010101010101010101010101010601010101010101`, img`
    . . . . . . . 2 . 2 2 . . . . . 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
    . . . . . . . 2 . . . . . . . . 
    2 2 2 2 2 2 . 2 . 2 2 2 2 2 2 2 
    . . . . . 2 . 2 . 2 . . . . . . 
    . . . . . 2 . 2 . 2 . . . . . . 
    . . . . . 2 . 2 . 2 . . . . . . 
    2 2 2 2 . 2 . 2 . 2 . . 2 2 2 2 
    . . . 2 2 2 . 2 . 2 2 2 2 . . . 
    2 2 . . . . . 2 . . . . . . 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen))
tiles.placeOnRandomTile(sprMain, myTiles.tile2)
controller.moveSprite(sprMain, 100, 100)
scene.cameraFollowSprite(sprMain)
