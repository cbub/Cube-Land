namespace projectImages {
    //% fixedInstance
    export const Boss_Final = image.ofBuffer(hex`e4101000e000000000000000e20e00000000000020f200000000f000002e0e000000ff0000202e222200ff0f0000224422f2ff0f000020bb22feff000020222222fe0f000020222222fe0f00000020bb22feff000000224422f2ff0f00202e222200ff0f002e0e000000ff0020f200000000f000e20e000000000000e000000000000000`);
    //% fixedInstance
    export const Boy = image.ofBuffer(hex`e41010000000000000000000000000606606000000000060660600000000006066060000dddddd6066060000ddbcdd6066666666ddcfdd6d66666666dddddd6d66666666dddddd6d66666666ddcfdd6d66666666ddbcdd6066666666dddddd60660600000000006066060000000000606606000000000060660600000000000000000000`);
    //% fixedInstance
    export const Chest = image.ofBuffer(hex`e41010000000000000000000000000000000000000e0eeeeeeeb0e0000eeeeeeeeebee0000eeeeeeeeebee0000eebeeceecbee0000eeceeeeeeeee0000eeee4ee4ebee0000eeee4e44ebee0000eeee4ee4ebee0000bbbbbebbbbbb0000eeceeeeecbee0000eeeeeeeeebee0000e0eeeeeeeb0e0000000000000000000000000000000000`);
    //% fixedInstance
    export const Door = image.ofBuffer(hex`e410100000000000000000000000000000f0000000eeeefeeefeefee00eeeefeeefeefee00bbbbfebecbbcbb00eeeefeeeceecee00eeeefeeefeefee00eeeefeeefeefee00eeeefeeefeefee00eeeefefefeefee00bbbbfefeccbcbb00eeeefeeeceecee00eeeefeeefeefee00eeeeffeefeefee00000000000000000000000000000000`);
    //% fixedInstance
    export const Girl = image.ofBuffer(hex`e41010000000000000000000000000303303000000000030330300000000003033030000bddddd3033030000bdbcdd3033333333bdcfdd3d33333333dddddd3d33333333dddddd3d33333333bdcfdd3d33333333bdbcdd3033333333bddddd30330300000000003033030000000000303303000000000030330300000000000000000000`);
    //% fixedInstance
    export const Border = image.ofBuffer(hex`e4101000dc11db1111bd11cdcd1dbd1dd1dbd1dcd1dcd1dccd1dcd1d11cd1dbddbd1dc11dbd1dcd11dcd1dbdbd1dcd1dd1dcd1dbd1dcd1dccd1dcd1d11bd1dfddfd1db1111bd1dfddfd1db11d1dcd1dccd1dcd1dbd1dcd1dd1dcd1dbdbd1dcd11dcd1dbd11cd1dbddbd1dc11d1dcd1dccd1dcd1dcd1dbd1dd1dbd1dcdc11db1111bd11cd`);
    //% fixedInstance
    export const Boss_1 = image.ofBuffer(hex`e410100000000000000000000000000000000000000000000000000000b0bbbbbb00000000b0dcbbbb00000000bbcfbbbb0c000000bbccbbbbfc000000bbbbbbbb0d000000bbbbbbbb0d000000bbccbbbbfc000000bbcfbbbb0c000000b0dcbbbb00000000b0bbbbbb000000000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const Boss_2 = image.ofBuffer(hex`e4101000000000000000000000000000000000000000000000550000004044444455000000404444445544040044dddd445545440044111144554544004411db445545440044cddf445545440044bddb445545440044dddd4455454400404444445544040040444444554000000000000055000000000000000000000000000000000000`);
    //% fixedInstance
    export const Boss_3 = image.ofBuffer(hex`e41010000000000000000000000000000000000000080000000000000088000090990900008808009099090080b88c8896990900808888880800000080888888969909008088888896990900808888880800000080b88c889699090000880800909909000088000090990900000800000000000000000000000000000000000000000000`);
}

enum Kind {
    Girl,
    Boss,
    Chest
}

function introSequence() {

    game.showLongText("In a cube land far far away...", DialogLayout.Center)
    game.showLongText("There was cubed lad and a cubed lady,      living     happily    ever      after.", DialogLayout.Center)
    music.baDing.play()
    //let girlSprite = sprites.create(projectImages.Girl)
    //girlSprite.
}

function levelsSetup() {
    scene.setTileMap(img`
. . . . . . . . . . . . . . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9   
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9  
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . 9 . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . 9 . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . 9 . . . . 9 9 9 . . 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 9 9 9 9 9 . . . . . . . . . . . . . 6 . . . . . . . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . 9
9 . . . . . . . . . . . . . . . . . . . . . . 6 . . . . . . . . . 9 . . . . . . . . . . . 9 9 . . . . . . . . 9  
9 . . . . . . . . . . . . . 9 . . 9 . . . . 9 9 . . . . . . . . . 9 . . . . . . . . . . . 6 . . . . . . . . . 9  
9 . . . . . . . . . . . . . 9 . . 9 . . . . . 9 . . . . . . . . . 9 . . . . . . . . . . . 6 . . . . . . . . . 9  
9 . . . 9 . . 9 . . . . . . 9 . . 9 . . . . . 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . . . 9 9 9 9 9 9 9 9 9 9 9  
9 . . . 9 . . 9 9 9 9 9 . . 9 . . 9 9 9 . . . 9 . . 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . . . 9 . . . . . . . . 9 . 3 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . . . 9 . . . . . . . . 9 . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 . . . 9 . . . . . . . . 5 9 . . . . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
    scene.setTile(9, projectImages.Border, true)
    scene.setTile(6, projectImages.Door)
    scene.setTile(3, projectImages.Boy)
    girlSprite.setPosition(30, 128)
}

scene.onHitTile(Kind.Boss, 3, function (sprite: Sprite) {

})
//let boySprite = sprites.create(projectImages.Boy)
let girlSprite = sprites.create(projectImages.Girl, Kind.Girl)
//let bossFinalSprite = sprites.create(projectImages.Boss_Final)

//introSequence()
scene.setBackgroundColor(7)
levelsSetup()

girlSprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(girlSprite)

let chestsCollected = 0

scene.cameraFollowSprite(girlSprite);


