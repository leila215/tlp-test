scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    tiles.placeOnRandomTile(sprMain, myTiles.tile7)
    game.over(false)
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
tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070707070507070707070707070707070707070700070707070707070100000000000007000000000000000807070707070700070007070707070707070707070707000700070707070707070707070707070007000707070707070707070707070700070007070707070707070707070707000700070707070707070400000707070007000707070700000307070000000000070000000000000707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070700070707070707070707070707070707000707070707070707070707070707070607070707070707`, img`
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
    `, [myTiles.transparency16,myTiles.tile2,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(sprMain, myTiles.tile2)
controller.moveSprite(sprMain, 100, 100)
scene.cameraFollowSprite(sprMain)
