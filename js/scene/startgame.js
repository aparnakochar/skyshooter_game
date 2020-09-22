class startgame extends Phaser.Scene{
    constructor()   {
        super()
    }
    preload()
    {
        this.load.image('start-game','assets/images/game-start.jpg')
    }
    create()
    {
        this.add.iamge(400,300,'start-game')
    }
}